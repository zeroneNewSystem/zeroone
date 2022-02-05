<?php


namespace App\Modules\Admin\PurchaseReturns\Controllers;

use App\Http\Controllers\Controller;
use App\Modules\Admin\Accounts\Models\Transaction;
use App\Modules\Admin\people\Models\Person;
use App\Modules\Admin\people\Models\Supplier;
use App\Modules\Admin\Products\Models\Inventory;
use App\Modules\Admin\Products\Models\Product;
use App\Modules\Admin\PurchaseReturns\Models\PurchaseReturn;
use App\Modules\Admin\PurchaseReturns\Models\PurchaseReturnDetail;
use App\Traits\AccountTrait;
use App\Traits\TranstactionTrait;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class PurchaseReturnController extends Controller
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


        $returns = PurchaseReturn::where('returns.company_id', 1);


        
        $returns = $returns->leftJoin('people', 'people.id', 'returns.company_id')
        ->select('returns.*', 'people.company_name');
        


        if ($search && $search['company_name']) {

            $company_name = $search['company_name'];
            $returns = $returns->whereHas('person', function ($q) use ($company_name) {
                $q->where('company_name', 'like', '%' . $company_name . '%');
            });
        };

        if ($search && $search['return_reference'])
            $returns = $returns->where('return_reference', 'like', '%' . $search['return_reference'] . '%');



        if ($search && $search['status_id'])
            $returns = $returns->where('status_id', $search['status_id']);
        if ($search && $search['minimum'])
            $returns = $returns->where('total_amount', '>=', $search['minimum']);
        if ($search && $search['maximum'])
            $returns = $returns->where('total_amount', '<=', $search['maximum']);
        if ($search && $search['date_from'])
            $returns = $returns->where('issue_date', '>=', $search['date_from']);
        if ($search && $search['date_to'])
            $returns = $returns->where('issue_date', '<=', $search['date_to']);





        $paid_amount = 0;


        if ($request->has('itemsPerPage'))
            $returns = $returns->orderBy('id', 'DESC')->paginate($request->itemsPerPage != -1 ? $request->itemsPerPage : '');
        else
            $returns = $returns->orderBy('id', 'DESC')->paginate(10);



        //$returns = $returns->get();

        foreach ($returns as &$purchasereturn) {

            $supp_documents = DB::table('supplemental_documentations')
                ->where('document_id', $purchasereturn->id)
                ->where('document_type_id', 1)
                ->get();
            //return $supp_documents;
            $paid_amount += $purchasereturn->paid_amount;
            foreach ($supp_documents as $supp_document) {
                $paid_amount += $supp_document->amount;
            }
            $purchasereturn['remainder'] = $purchasereturn->total_amount  - $paid_amount;
            //---reset
            $paid_amount = 0;
        }
        return $returns;
    }
    public function index($id)
    {
        $purchasereturn =  DB::table('returns')->where('id', $id)->get()[0];


        $methods = Transaction::where('document_id', $id)
            ->where('document_type_id', 1)
            ->where('debit', -1)
            ->get();

        $purchasereturn->payment_methods = $methods;






        $return_details =  DB::table('return_details')
            ->where('document_id', $id)
            ->where('document_type_id', 1)
            ->leftjoin('products', 'return_details.product_id', '=', 'products.id')
            ->get();



        // return      $return_details;


        $units = [];
        foreach ($return_details as &$return_detail) {
            $pivots = DB::table('prdct_units_products')->where('product_id', $return_detail->id)->get();
            foreach ($pivots as &$pivot) {
                $unit = DB::table('prdct_units')->where('id', $pivot->prdct_unit_id)->get();
                //return $unit[0];
                $unit[0]->pivot = $pivot;
                $units[] = $unit[0];
            }


            $return_detail->units = $units;
        }


        $purchasereturn->return_details = $return_details;

        return [
            'purchasereturn' => $purchasereturn,
            'suppliers' => Person::where('company_id', '1')->where('is_supplier', '1')->get(),
            'accounts' => $this->cashAndBanks()

        ];
    }

    public function index2(Request $request)
    {
        $returns =  DB::table('returns')->get();
        foreach ($returns as &$purchasereturn) {

            $return_details =  DB::table('return_details')
                ->where('document_id', 1)
                ->where('document_type_id', 1)
                ->leftjoin('products', 'return_details.product_id', '=', 'products.id')
                ->get();



            $units = [];
            foreach ($return_details as &$return_detail) {
                $pivots = DB::table('prdct_units_products')->where('product_id', $return_detail->id)->get();
                foreach ($pivots as &$pivot) {
                    $unit = DB::table('prdct_units')->where('id', $pivot->prdct_unit_id)->get();
                    //return $unit[0];
                    $unit[0]->pivot = $pivot;
                    $units[] = $unit[0];
                }


                $return_detail->units = $units;
            }


            $purchasereturn->return_details = $return_details;
        }
        return $returns;
    }
    public function index1(Request $request)
    {


        $returns = PurchaseReturn::where('ar_name', 'LIKE', '%' . $request->search . '%')
            ->with('return_details')

            ->orderBy('id', 'DESC')
            // ->orWhere('en_name', 'LIKE', '%' . $request->search . '%')
            // ->orWhere('barcode', 'LIKE', '%' . $request->search . '%')
            ->paginate($request->itemsPerPage != -1 ? $request->itemsPerPage : '');

        return response()->json([
            'returns' => $returns,
        ]);

        //
        //return view('Purchase_returns::index');


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
        $purchasereturn = PurchaseReturn::create($request->all());
        $this->storeLinkedData($request, $purchasereturn);
        return $purchasereturn;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\PurchaseReturn  $purchasereturn
     * @return \Illuminate\Http\Response
     */
    public function show(PurchaseReturn $purchasereturn)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\PurchaseReturn  $purchasereturn
     * @return \Illuminate\Http\Response
     */
    public function edit(PurchaseReturn $purchasereturn)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\PurchaseReturn  $purchasereturn
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {

        // delete all transactions 

        $this->deleteLinkedData($request);
        $purchasereturn = PurchaseReturn::find($request->id);
        $purchasereturn->update($request->all());

        $this->storeLinkedData($request, $purchasereturn);

        //----



        return $purchasereturn;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\PurchaseReturn  $purchasereturn
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {

        $this->deleteLinkedData($request);
        PurchaseReturn::find($request->id)->delete();



        // delete all transactions 


        //return $request->id;










        return $this->all($request);
    }
    private function addTransactionEntry($entry)
    {


        $account_id = Transaction::create($entry);
        return true;
    }
    private function storeLinkedData($request, $purchasereturn)
    {
        $supplier_account_id = Person::find($request->supplier_id)['supplier_account_id'];

        $supplier_account = [
            "company_id" => 1,
            "account_id" => $supplier_account_id,
            "debit" =>  0,
            "credit" => $request['total_amount'],
            "document_id" => $purchasereturn->id,
            "document_type_id" => 1,
            "currency_code" => 1,
            "currency_rate" => 1,
            "description" => 'حساب المورد',
        ];
        $this->addTransactionEntry($supplier_account);

        if ($request['paid_amount'] != 0) {
            if ($request['only_cash']) {
                $supplier_account = [
                    "company_id" => 1,
                    "account_id" => $supplier_account_id,
                    "debit" =>  $request['paid_amount'],
                    "credit" => 0,
                    "document_id" => $purchasereturn->id,
                    "document_type_id" => 1,
                    "currency_code" => 1,
                    "currency_rate" => 1,
                    "description" => 'مدفوعة للمورد',
                ];
                $this->addTransactionEntry($supplier_account);
                $cash = [
                    "company_id" => 1,
                    "account_id" => 4,
                    "debit" =>  0,
                    "credit" => $request['paid_amount'],
                    "document_id" => $purchasereturn->id,
                    "document_type_id" => 1,
                    "currency_code" => 1,
                    "currency_rate" => 1,
                    "description" => 'مدفوعة للمورد من الصندوق',
                ];
                $this->addTransactionEntry($cash);
            } else {
                $payment_methods = $request->payment_methods;
                foreach ($payment_methods as $payment_method) {
                    if ($payment_method['account_id'] && $payment_method['credit'] > 0) {

                        $supplier_account = [
                            "company_id" => 1,
                            "account_id" => $payment_method['account_id'],
                            "debit" =>  -1,
                            "credit" => $payment_method['credit'],
                            "document_id" => $purchasereturn->id,
                            "document_type_id" => 1,
                            "currency_code" => 1,
                            "currency_rate" => 1,
                            "description" => 'مدفوعة للمورد',
                        ];
                        $this->addTransactionEntry($supplier_account);
                    }
                }
            }
        }

        $additional_expenses_from_account_id = $request['additional_expenses_from_account_id'];
        $additional_expenses = [
            "company_id" => 1,
            "account_id" => $additional_expenses_from_account_id, //5103
            "debit" =>  0,
            "credit" => $request['additional_expenses'],
            "document_id" => $purchasereturn->id,
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
            "document_id" => $purchasereturn->id,
            "document_type_id" => 1,
            "currency_code" => 1,
            "currency_rate" => 1,
            "description" => 'مصاريف إضافية',
        ];
        $this->addTransactionEntry($additional_expenses);



        foreach ($request->return_details as $return_detail) {
            //transaction  inventory-
            Product::find($return_detail['id'])->increment('quantity_in_minor_unit', $return_detail['quantity_in_minor_unit']);





            //$account_id = (PurchaseReturnDetail::where()->get())['account_id'];


            $inventory_account_id = Inventory::find($return_detail['inventory_id'])['account_id'];

            $entry = [
                "company_id" => 1,
                "account_id" => $inventory_account_id,
                "debit" =>  $return_detail['total'],
                "credit" => 0,
                "document_id" => $purchasereturn->id,
                "document_type_id" => 1,
                "currency_code" => 1,
                "currency_rate" => 1,
                "description" => 'some description',
            ];
            $this->addTransactionEntry($entry);



            $old_return_detail = PurchaseReturnDetail::where([
                'product_id' => $return_detail['product_id'],
                'expires_at' => $return_detail['expires_at'],
            ])->where('sum_quantity_in_minor_unit', '!=', -1);

            if (!$old_return_detail->exists()) {
                $return_detail['sum_quantity_in_minor_unit'] = $return_detail['quantity_in_minor_unit'];
            } else {

                $old_return_detail->increment(
                    'sum_quantity_in_minor_unit',
                    $return_detail['quantity_in_minor_unit']
                );
            }

            $purchasereturn->return_details()->create($return_detail);
        }
    }
    private function deleteLinkedData($request)
    {
        Transaction::where('document_type_id', 1)
            ->where('document_id', $request->id)
            ->delete();

        // delete purchasereturn 

        $return_details = PurchaseReturnDetail::where('document_type_id', 1)
            ->where('document_id', $request->id)->get();
        foreach ($return_details as $return_detail) {
            if ($return_detail['sum_quantity_in_minor_unit'] == -1) {

                PurchaseReturnDetail::where('product_id', $return_detail['product_id'])
                    ->where('sum_quantity_in_minor_unit', '!=', -1)
                    ->where('expires_at', $return_detail['expires_at'])
                    ->decrement(
                        'sum_quantity_in_minor_unit',
                        $return_detail['quantity_in_minor_unit']
                    );

                //and decrement quantity from product..... and then continue      


            } else {
                $sum =  $return_detail['sum_quantity_in_minor_unit'] - $return_detail['quantity_in_minor_unit'];
                $products = PurchaseReturnDetail::where([
                    'product_id' => $return_detail['product_id'],
                    'expires_at' => $return_detail['expires_at'],
                    'sum_quantity_in_minor_unit' => -1,
                ]);
                if ($products->exists())
                    $products->first()->update(['sum_quantity_in_minor_unit' => $sum]);
            }

            $return_detail->delete();

            Product::find($return_detail['product_id'])->decrement('quantity_in_minor_unit', $return_detail['quantity_in_minor_unit']);
        }
    }
}
