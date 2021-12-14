<?php


namespace App\Modules\Admin\Purchases\Controllers;

use App\Http\Controllers\Controller;
use App\Modules\Admin\Accounts\Models\Transaction;
use App\Modules\Admin\people\Models\Person;
use App\Modules\Admin\people\Models\Supplier;
use App\Modules\Admin\Products\Models\Inventory;
use App\Modules\Admin\Products\Models\Product;
use App\Modules\Admin\Purchases\Models\Purchase;
use App\Modules\Admin\Purchases\Models\PurchaseDetail;
use App\Traits\AccountTrait;
use App\Traits\TranstactionTrait;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class PurchaseController extends Controller
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


        $purchases = Purchase::where('purchases.company_id', 1);
        $purchases = $purchases->leftJoin('people', 'people.id', 'purchases.company_id')
            ->select('purchases.*', 'people.company_name');



        if ($search && $search['company_name']) {

            $company_name = $search['company_name'];
            $purchases = $purchases->whereHas('person', function ($q) use ($company_name) {
                $q->where('company_name', 'like', '%' . $company_name . '%');
            });
        };

        if ($search && $search['purchase_reference'])
            $purchases = $purchases->where('purchase_reference', 'like', '%' . $search['purchase_reference'] . '%');



        if ($search && $search['status_id'])
            $purchases = $purchases->where('status_id', $search['status_id']);
        if ($search && $search['minimum'])
            $purchases = $purchases->where('total_amount', '>=', $search['minimum']);
        if ($search && $search['maximum'])
            $purchases = $purchases->where('total_amount', '<=', $search['maximum']);
        if ($search && $search['date_from'])
            $purchases = $purchases->where('issue_date', '>=', $search['date_from']);
        if ($search && $search['date_to'])
            $purchases = $purchases->where('issue_date', '<=', $search['date_to']);





        $paid_amount = 0;


        if ($request->has('itemsPerPage'))
            $purchases = $purchases->orderBy('id', 'DESC')->paginate($request->itemsPerPage != -1 ? $request->itemsPerPage : '');
        else
            $purchases = $purchases->orderBy('id', 'DESC')->paginate(10);



        //$purchases = $purchases->get();

        foreach ($purchases as &$purchase) {

            $supp_documents = DB::table('supplemental_documentations')
                ->where('document_id', $purchase->id)
                ->where('document_type_id', 1)
                ->get();
            //return $supp_documents;
            $paid_amount += $purchase->paid_amount;
            foreach ($supp_documents as $supp_document) {
                $paid_amount += $supp_document->amount;
            }
            $purchase['remainder'] = $purchase->total_amount  - $paid_amount;
            //---reset
            $paid_amount = 0;
        }
        return $purchases;
    }
    public function index($id)
    {
        $purchase =  DB::table('purchases')->where('id', $id)->get()[0];


        $methods = Transaction::where('document_id', $id)
            ->where('document_type_id', 1)
            ->where('debit', -1)
            ->get();

        $purchase->payment_methods = $methods;






        $purchase_details =  DB::table('purchase_details')
            ->where('document_id', $id)
            ->where('document_type_id', 1)
            ->leftjoin('products', 'purchase_details.product_id', '=', 'products.id')
            ->get();



        // return      $purchase_details;


        $units = [];
        foreach ($purchase_details as &$purchase_detail) {
            $pivots = DB::table('prdct_units_products')->where('product_id', $purchase_detail->id)->get();
            foreach ($pivots as &$pivot) {
                $unit = DB::table('prdct_units')->where('id', $pivot->prdct_unit_id)->get();
                //return $unit[0];
                $unit[0]->pivot = $pivot;
                $units[] = $unit[0];
            }


            $purchase_detail->units = $units;
        }


        $purchase->purchase_details = $purchase_details;

        return [
            'purchase' => $purchase,
            'suppliers' => Person::where('company_id', '1')->where('is_supplier', '1')->get(),
            'accounts' => $this->cashAndBanks()

        ];
    }

    public function index2(Request $request)
    {
        $purchases =  DB::table('purchases')->get();
        foreach ($purchases as &$purchase) {

            $purchase_details =  DB::table('purchase_details')
                ->where('document_id', 1)
                ->where('document_type_id', 1)
                ->leftjoin('products', 'purchase_details.product_id', '=', 'products.id')
                ->get();



            $units = [];
            foreach ($purchase_details as &$purchase_detail) {
                $pivots = DB::table('prdct_units_products')->where('product_id', $purchase_detail->id)->get();
                foreach ($pivots as &$pivot) {
                    $unit = DB::table('prdct_units')->where('id', $pivot->prdct_unit_id)->get();
                    //return $unit[0];
                    $unit[0]->pivot = $pivot;
                    $units[] = $unit[0];
                }


                $purchase_detail->units = $units;
            }


            $purchase->purchase_details = $purchase_details;
        }
        return $purchases;
    }
    public function index1(Request $request)
    {


        $purchases = Purchase::where('ar_name', 'LIKE', '%' . $request->search . '%')
            ->with('purchase_details')

            ->orderBy('id', 'DESC')
            // ->orWhere('en_name', 'LIKE', '%' . $request->search . '%')
            // ->orWhere('barcode', 'LIKE', '%' . $request->search . '%')
            ->paginate($request->itemsPerPage != -1 ? $request->itemsPerPage : '');

        return response()->json([
            'purchases' => $purchases,
        ]);

        //
        //return view('Purchases::index');


    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
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



        $purchase = Purchase::create($request->all());

        $supplier_account_id = Person::find($request->supplier_id)['supplier_account_id'];

        $supplier_account = [
            "company_id" => 1,
            "account_id" => $supplier_account_id,
            "debit" =>  0,
            "credit" => $request['total_amount'],
            "document_id" => $purchase->id,
            "document_type_id" => 1,
            "currency_code" => 1,
            "currency_rate" => 1,
            "description" => 'حساب المورد',
        ];
        $this->addTransactionEntry($supplier_account);
        if ($request['paid_amount'] != 0) {
            $supplier_account = [
                "company_id" => 1,
                "account_id" => $supplier_account_id,
                "debit" =>  $request['paid_amount'],
                "credit" => 0,
                "document_id" => $purchase->id,
                "document_type_id" => 1,
                "currency_code" => 1,
                "currency_rate" => 1,
                "description" => 'مدفوعة للمورد',
            ];
            $this->addTransactionEntry($supplier_account);
        }






        $additional_expenses_from_account_id = $request['additional_expenses_from_account_id'];
        $additional_expenses = [
            "company_id" => 1,
            "account_id" => $additional_expenses_from_account_id, //5103
            "debit" =>  0,
            "credit" => $request['additional_expenses'],
            "document_id" => $purchase->id,
            "document_type_id" => 1,
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
            "document_id" => $purchase->id,
            "document_type_id" => 1,
            "currency_code" => 1,
            "currency_rate" => 1,
            "description" => 'مصاريف إضافية',
        ];
        $this->addTransactionEntry($additional_expenses);


        $payment_methods = $request->payment_methods;

        if (is_array($request['payment_methods'])) {


            foreach ($payment_methods as $payment_method) {
                if ($payment_method['account_id'] && $payment_method['credit'] > 0) {

                    $supplier_account = [
                        "company_id" => 1,
                        "account_id" => $payment_method['account_id'],
                        "debit" =>  -1,
                        "credit" => $payment_method['credit'],
                        "document_id" => $purchase->id,
                        "document_type_id" => 1,
                        "currency_code" => 1,
                        "currency_rate" => 1,
                        "description" => 'مدفوعة للمورد',
                    ];
                    $this->addTransactionEntry($supplier_account);
                }
            }
        }


        foreach ($request->purchase_details as $purchase_detail) {
            //transaction  inventory-
            Product::find($purchase_detail['id'])->increment('quantity_in_minor_unit',$purchase_detail['quantity_in_minor_unit']);
            
            
             
            

            //$account_id = (PurchaseDetail::where()->get())['account_id'];


            $inventory_account_id = Inventory::find($purchase_detail['inventory_id'])['account_id'];




            $entry = [
                "company_id" => 1,
                "account_id" => $inventory_account_id,
                "debit" =>  $purchase_detail['total'],
                "credit" => 0,
                "document_id" => $purchase->id,
                "document_type_id" => 1,
                "currency_code" => 1,
                "currency_rate" => 1,
                "description" => 'some description',
            ];
            $this->addTransactionEntry($entry);
            $purchase->purchase_details()->create($purchase_detail);
        }

        return $purchase;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Purchase  $purchase
     * @return \Illuminate\Http\Response
     */
    public function show(Purchase $purchase)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Purchase  $purchase
     * @return \Illuminate\Http\Response
     */
    public function edit(Purchase $purchase)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Purchase  $purchase
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {

        // delete all transactions 

        Transaction::where('document_type_id', 1)
            ->where('document_id', $request->id)
            ->delete();

        //delete all purchase details
        PurchaseDetail::where('document_type_id', 1)
            ->where('document_id', $request->id)
            ->delete();

        $purchase = Purchase::find($request->id);
        $purchase->update($request->all());


        //----

        $supplier_account_id = Person::find($request->supplier_id)['supplier_account_id'];

        $supplier_account = [
            "company_id" => 1,
            "account_id" => $supplier_account_id,
            "debit" =>  0,
            "credit" => $request['total_amount'] - $request['additional_expenses'],
            "document_id" => $purchase->id,
            "document_type_id" => 1,
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
            "document_id" => $purchase->id,
            "document_type_id" => 1,
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
            "document_id" => $purchase->id,
            "document_type_id" => 1,
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
            "document_id" => $purchase->id,
            "document_type_id" => 1,
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
                    "document_id" => $purchase->id,
                    "document_type_id" => 1,
                    "currency_code" => 1,
                    "currency_rate" => 1,
                    "description" => 'مدفوعة للمورد',
                ];
                $this->addTransactionEntry($supplier_account);
            }
        }


        foreach ($request->purchase_details as $purchase_detail) {
            //transaction  inventory-


            //$account_id = (PurchaseDetail::where()->get())['account_id'];


            $inventory_account_id = Inventory::find($purchase_detail['inventory_id'])['account_id'];




            $entry = [
                "company_id" => 1,
                "account_id" => $inventory_account_id,
                "debit" =>  $purchase_detail['total'],
                "credit" => 0,
                "document_id" => $purchase->id,
                "document_type_id" => 1,
                "currency_code" => 1,
                "currency_rate" => 1,
                "description" => 'some description',
            ];
            $this->addTransactionEntry($entry);
            $purchase->purchase_details()->create($purchase_detail);
        }

        return $purchase;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Purchase  $purchase
     * @return \Illuminate\Http\Response
     */
    public function destroy(Purchase $purchase)
    {
        //
    }
    private function addTransactionEntry($entry)
    {


        $account_id = Transaction::create($entry);
        return true;
    }
}
