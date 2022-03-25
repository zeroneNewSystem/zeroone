<?php


namespace App\Modules\Admin\StockTakes\Controllers;

use App\Http\Controllers\Controller;
use App\Modules\Admin\Accounts\Models\Transaction;
use App\Modules\Admin\people\Models\Person;
use App\Modules\Admin\people\Models\Supplier;
use App\Modules\Admin\Products\Models\Inventory;
use App\Modules\Admin\Products\Models\Product;
use App\Modules\Admin\StockTakes\Models\StockTake;
use App\Modules\Admin\StockTakes\Models\StockTakeDetail;
use App\Traits\AccountTrait;
use App\Traits\TranstactionTrait;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Spatie\Valuestore\Valuestore;

class StockTakeController extends Controller
{
    use AccountTrait;

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */


    public function all(Request $request)
    {

        $search  = json_decode($request->search, true);


        $stocktakes = StockTake::where('stocktakes.company_id', 1);
        $stocktakes = $stocktakes->leftJoin('people', 'people.id', 'stocktakes.company_id')
            ->select('stocktakes.*', 'people.company_name');



        if ($search && $search['company_name']) {

            $company_name = $search['company_name'];
            $stocktakes = $stocktakes->whereHas('person', function ($q) use ($company_name) {
                $q->where('company_name', 'like', '%' . $company_name . '%');
            });
        };

        if ($search && $search['stocktake_reference'])
            $stocktakes = $stocktakes->where('stocktake_reference', 'like', '%' . $search['stocktake_reference'] . '%');



        if ($search && $search['status_id'])
            $stocktakes = $stocktakes->where('status_id', $search['status_id']);
        if ($search && $search['minimum'])
            $stocktakes = $stocktakes->where('total_amount', '>=', $search['minimum']);
        if ($search && $search['maximum'])
            $stocktakes = $stocktakes->where('total_amount', '<=', $search['maximum']);
        if ($search && $search['date_from'])
            $stocktakes = $stocktakes->where('issue_date', '>=', $search['date_from']);
        if ($search && $search['date_to'])
            $stocktakes = $stocktakes->where('issue_date', '<=', $search['date_to']);





        $paid_amount = 0;


        if ($request->has('itemsPerPage'))
            $stocktakes = $stocktakes->orderBy('id', 'DESC')->paginate($request->itemsPerPage != -1 ? $request->itemsPerPage : '');
        else
            $stocktakes = $stocktakes->orderBy('id', 'DESC')->paginate(10);



        //$stocktakes = $stocktakes->get();

        foreach ($stocktakes as &$stocktake) {

            $supp_bills = DB::table('supplemental_billings')
                ->where('bill_id', $stocktake->id)
                ->where('bill_type_id', 1)
                ->get();
            //return $supp_bills;
            $paid_amount += $stocktake->paid_amount;
            foreach ($supp_bills as $supp_bill) {
                $paid_amount += $supp_bill->amount;
            }
            $stocktake['remainder'] = $stocktake->total_amount  - $paid_amount;
            //---reset
            $paid_amount = 0;
        }
        return $stocktakes;
    }
    public function index($id)
    {
        $stocktake =  DB::table('stocktakes')->where('id', $id)->first();


        $methods = Transaction::where('bill_id', $id)
            ->where('bill_type_id', 1)
            ->where('debit', -1)
            ->get();

        $stocktake->payment_methods = $methods;






        $stocktake_details =  DB::table('stocktake_details')
            ->where('bill_id', $id)
            ->where('bill_type_id', 1)
            ->leftjoin('products', 'stocktake_details.product_id', '=', 'products.id')
            ->get();



        // return      $stocktake_details;


        $units = [];
        foreach ($stocktake_details as &$stocktake_detail) {
            $pivots = DB::table('prdct_units_products')->where('product_id', $stocktake_detail->id)->get();
            foreach ($pivots as &$pivot) {
                $unit = DB::table('prdct_units')->where('id', $pivot->prdct_unit_id)->get();
                //return $unit[0];
                $unit[0]->pivot = $pivot;
                $units[] = $unit[0];
            }


            $stocktake_detail->units = $units;
        }


        $stocktake->stocktake_details = $stocktake_details;

        return [
            'stocktake' => $stocktake,
            'suppliers' => Person::where('company_id', '1')->where('is_supplier', '1')->get(),
            'accounts' => $this->cashAndBanks()

        ];
    }

    public function index2(Request $request)
    {
        $stocktakes =  DB::table('stocktakes')->get();
        foreach ($stocktakes as &$stocktake) {

            $stocktake_details =  DB::table('stocktake_details')
                ->where('bill_id', 1)
                ->where('bill_type_id', 1)
                ->leftjoin('products', 'stocktake_details.product_id', '=', 'products.id')
                ->get();



            $units = [];
            foreach ($stocktake_details as &$stocktake_detail) {
                $pivots = DB::table('prdct_units_products')->where('product_id', $stocktake_detail->id)->get();
                foreach ($pivots as &$pivot) {
                    $unit = DB::table('prdct_units')->where('id', $pivot->prdct_unit_id)->get();
                    //return $unit[0];
                    $unit[0]->pivot = $pivot;
                    $units[] = $unit[0];
                }


                $stocktake_detail->units = $units;
            }


            $stocktake->stocktake_details = $stocktake_details;
        }
        return $stocktakes;
    }
    public function index1(Request $request)
    {


        $stocktakes = StockTake::where('ar_name', 'LIKE', '%' . $request->search . '%')
            ->with('stocktake_details')

            ->orderBy('id', 'DESC')
            // ->orWhere('en_name', 'LIKE', '%' . $request->search . '%')
            // ->orWhere('barcode', 'LIKE', '%' . $request->search . '%')
            ->paginate($request->itemsPerPage != -1 ? $request->itemsPerPage : '');

        return response()->json([
            'stocktakes' => $stocktakes,
        ]);

        //
        //return view('StockTakes::index');


    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {

        return [
            3 => $this->showAccounts(3),
            4 => $this->showAccounts(4),
            5 => $this->showAccounts(5),
            'inventories' => Inventory::all(),
        ];



        array_merge(



            [['id' => 'owners', 'type' => 3, 'ar_name' => 'حسابات حقوق الملاك']],
            [['id' => 'revenues', 'type' => 4, 'ar_name' => 'حسابات الإيرادات']],
            $this->showAccounts(3),
            $this->showAccounts(4),
            $this->showAccounts(5),
            [['id' => 'expenses', 'type' => 4, 'ar_name' => 'حسابات الإيرادات']],
        );



        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request['company_id'] = 1;
        //return app('settings')['EUR'];


        $stocktake = StockTake::create($request->all());

        $stock_take_details = $request->stock_take_details;
        //$settings = app('settings')['EUR'];
        //$settings = Valuestore::make(storage_path('app/settings.json'));
        // $settings = new 
        // if ($settings->grouped)
        foreach ($stock_take_details as $stock_take_detail) {
            if (app('settings')['products_grouped']) {
                $product = Product::find($stock_take_detail['id']);
                $product->quantity_in_minor_unit = $stock_take_detail['actual_quantity'];
                $product->save();
            }


            $difference_cost = ($stock_take_detail['actual_quantity'] - $stock_take_detail['current_quantity']) * $stock_take_detail['unit_price'];

            if ($difference_cost < 0) {
                $entry = [
                    "company_id" => 1,
                    "account_id" => $request->expense_account_id,
                    "debit" =>  abs($difference_cost),
                    "credit" => 0,
                    "bill_id" => $stocktake->id,
                    "bill_type_id" => 3,
                    "currency_code" => 1,
                    "currency_rate" => 1,
                    "description" => 'حساب مصروفات الكميات الناقصة',
                ];
                $this->addTransactionEntry($entry);


                $inventory_account_id = Inventory::find($stock_take_detail['inventory_id'])['account_id'];
                $entry = [
                    "company_id" => 1,
                    "account_id" => $inventory_account_id,
                    "debit" => 0,
                    "credit" => abs($difference_cost),
                    "bill_id" => $stocktake->id,
                    "bill_type_id" => 1,
                    "currency_code" => 1,
                    "currency_rate" => 1,
                    "description" => 'نقص في المخزون',
                ];
                $this->addTransactionEntry($entry);
            }
            if ($difference_cost > 0) {
                $entry = [
                    "company_id" => 1,
                    "account_id" => $request->revenue_account_id,
                    "debit" => 0,
                    "credit" => $difference_cost ,
                    "bill_id" => $stocktake->id,
                    "bill_type_id" => 3,
                    "currency_code" => 1,
                    "currency_rate" => 1,
                    "description" => 'حساب إيرادات الكميات الزائدة',
                ];
                $this->addTransactionEntry($entry);


                $inventory_account_id = Inventory::find($stock_take_detail['inventory_id'])['account_id'];
                $entry = [
                    "company_id" => 1,
                    "account_id" => $inventory_account_id,
                    "debit" => $difference_cost,
                    "credit" => 0,
                    "bill_id" => $stocktake->id,
                    "bill_type_id" => 1,
                    "currency_code" => 1,
                    "currency_rate" => 1,
                    "description" => 'زيادة في المخزون',
                ];
                $this->addTransactionEntry($entry);
            }
        }
        return $stock_take_details;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\StockTake  $stocktake
     * @return \Illuminate\Http\Response
     */
    public function show(StockTake $stocktake)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\StockTake  $stocktake
     * @return \Illuminate\Http\Response
     */
    public function edit(StockTake $stocktake)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\StockTake  $stocktake
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {

        // delete all transactions 

        Transaction::where('bill_type_id', 1)
            ->where('bill_id', $request->id)
            ->delete();

        //delete all stocktake details
        StockTakeDetail::where('bill_type_id', 1)
            ->where('bill_id', $request->id)
            ->delete();

        $stocktake = StockTake::find($request->id);
        $stocktake->update($request->all());


        //----

        $supplier_account_id = Person::find($request->supplier_id)['supplier_account_id'];

        $supplier_account = [
            "company_id" => 1,
            "account_id" => $supplier_account_id,
            "debit" =>  0,
            "credit" => $request['total_amount'] - $request['additional_expenses'],
            "bill_id" => $stocktake->id,
            "bill_type_id" => 1,
            "currency_code" => 1,
            "currency_rate" => 1,
            "description" => 'حساب المورد',
        ];
        $this->addTransactionEntry($supplier_account);

        $supplier_account = [
            "company_id" => 1,
            "account_id" => $supplier_account_id,
            "debit" =>  $request['paid_amount'],
            "credit" => 0,
            "bill_id" => $stocktake->id,
            "bill_type_id" => 1,
            "currency_code" => 1,
            "currency_rate" => 1,
            "description" => 'مدفوعة للمورد',
        ];
        $this->addTransactionEntry($supplier_account);





        $additional_expenses_from_account_id = $request['additional_expenses_from_account_id'];
        $additional_expenses = [
            "company_id" => 1,
            "account_id" => $additional_expenses_from_account_id, //5103
            "debit" =>  0,
            "credit" => $request['additional_expenses'],
            "bill_id" => $stocktake->id,
            "bill_type_id" => 1,
            "currency_code" => 1,
            "currency_rate" => 1,
            "description" => 'مصاريف إضافية',
        ];
        $this->addTransactionEntry($additional_expenses);
        $additional_expenses = [
            "company_id" => 1,
            "account_id" => 63, //5103
            "debit" =>  $request['additional_expenses'],
            "credit" => 0,
            "bill_id" => $stocktake->id,
            "bill_type_id" => 1,
            "currency_code" => 1,
            "currency_rate" => 1,
            "description" => 'مصاريف إضافية',
        ];
        $this->addTransactionEntry($additional_expenses);


        $payment_methods = $request->payment_methods;

        if (is_array($request['payment_methods'])) {


            foreach ($payment_methods as $payment_method) {
                $supplier_account = [
                    "company_id" => 1,
                    "account_id" => $payment_method['account_id'],
                    "debit" =>  -1,
                    "credit" => $payment_method['credit'],
                    "bill_id" => $stocktake->id,
                    "bill_type_id" => 1,
                    "currency_code" => 1,
                    "currency_rate" => 1,
                    "description" => 'مدفوعة للمورد',
                ];
                $this->addTransactionEntry($supplier_account);
            }
        }


        foreach ($request->stocktake_details as $stocktake_detail) {
            //transaction  inventory-


            //$account_id = (StockTakeDetail::where()->get())['account_id'];


            $inventory_account_id = Inventory::find($stocktake_detail['inventory_id'])['account_id'];




            $entry = [
                "company_id" => 1,
                "account_id" => $inventory_account_id,
                "debit" =>  $stocktake_detail['total'],
                "credit" => 0,
                "bill_id" => $stocktake->id,
                "bill_type_id" => 1,
                "currency_code" => 1,
                "currency_rate" => 1,
                "description" => 'some description',
            ];
            $this->addTransactionEntry($entry);
            $stocktake->stocktake_details()->create($stocktake_detail);
        }

        return $stocktake;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\StockTake  $stocktake
     * @return \Illuminate\Http\Response
     */
    public function destroy(StockTake $stocktake)
    {
        //
    }
    private function addTransactionEntry($entry)
    {


        $account_id = Transaction::create($entry);
        return true;
    }
}
