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

        if ($search && $search['reference'])
            $purchases = $purchases->where('reference', 'like', '%' . $search['reference'] . '%');



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






        $details =  DB::table('details')
            ->where('document_id', $id)
            ->where('document_type_id', 1)
            ->leftjoin('products', 'details.product_id', '=', 'products.id')
            ->get();



        // return      $details;


        $units = [];
        foreach ($details as &$detail) {
            $pivots = DB::table('prdct_units_products')->where('product_id', $detail->id)->get();
            foreach ($pivots as &$pivot) {
                $unit = DB::table('prdct_units')->where('id', $pivot->prdct_unit_id)->get();
                //return $unit[0];
                $unit[0]->pivot = $pivot;
                $units[] = $unit[0];
            }


            $detail->units = $units;
        }


        $purchase->details = $details;

        return [
            'document' => $purchase,
            'people' => Person::where('company_id', '1')->where('is_supplier', '1')->get(),
            'accounts' => $this->cashAndBanks()

        ];
    }

    public function index2(Request $request)
    {
        $purchases =  DB::table('purchases')->get();
        foreach ($purchases as &$purchase) {

            $details =  DB::table('details')
                ->where('document_id', 1)
                ->where('document_type_id', 1)
                ->leftjoin('products', 'details.product_id', '=', 'products.id')
                ->get();



            $units = [];
            foreach ($details as &$detail) {
                $pivots = DB::table('prdct_units_products')->where('product_id', $detail->id)->get();
                foreach ($pivots as &$pivot) {
                    $unit = DB::table('prdct_units')->where('id', $pivot->prdct_unit_id)->get();
                    //return $unit[0];
                    $unit[0]->pivot = $pivot;
                    $units[] = $unit[0];
                }


                $detail->units = $units;
            }


            $purchase->details = $details;
        }
        return $purchases;
    }
    public function index1(Request $request)
    {


        $purchases = Purchase::where('ar_name', 'LIKE', '%' . $request->search . '%')
            ->with('details')

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
        $this->storeLinkedData($request, $purchase);
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

        $this->deleteLinkedData($request);
        $purchase = Purchase::find($request->id);
        $purchase->update($request->all());

        $this->storeLinkedData($request, $purchase);

        //----



        return $purchase;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Purchase  $purchase
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {

        $this->deleteLinkedData($request);
        Purchase::find($request->id)->delete();



        // delete all transactions 


        //return $request->id;










        return $this->all($request);
    }
    private function addTransactionEntry($entry)
    {


        $account_id = Transaction::create($entry);
        return true;
    }
    private function storeLinkedData($request, $purchase)
    {
        $supplier_account_id = Person::find($request->person_id)['supplier_account_id'];

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
            if ($request['only_cash']) {
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
                $cash = [
                    "company_id" => 1,
                    "account_id" => 4,
                    "debit" =>  0,
                    "credit" => $request['paid_amount'],
                    "document_id" => $purchase->id,
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



        foreach ($request->details as $detail) {
            //transaction  inventory-
            Product::find($detail['id'])->increment('quantity_in_minor_unit', $detail['quantity_in_minor_unit']);





            //$account_id = (PurchaseDetail::where()->get())['account_id'];


            $inventory_account_id = Inventory::find($detail['inventory_id'])['account_id'];

            $entry = [
                "company_id" => 1,
                "account_id" => $inventory_account_id,
                "debit" =>  $detail['total'],
                "credit" => 0,
                "document_id" => $purchase->id,
                "document_type_id" => 1,
                "currency_code" => 1,
                "currency_rate" => 1,
                "description" => 'some description',
            ];
            $this->addTransactionEntry($entry);



            $old_detail = PurchaseDetail::where([
                'product_id' => $detail['product_id'],
                'expires_at' => $detail['expires_at'],
            ])->where('sum_quantity_in_minor_unit', '!=', -1);

            if (!$old_detail->exists()) {
                $detail['sum_quantity_in_minor_unit'] = $detail['quantity_in_minor_unit'];
            } else {

                $old_detail->increment(
                    'sum_quantity_in_minor_unit',
                    $detail['quantity_in_minor_unit']
                );
            }

            $purchase->details()->create($detail);
        }
    }
    private function deleteLinkedData($request)
    {
        Transaction::where('document_type_id', 1)
            ->where('document_id', $request->id)
            ->delete();

        // delete purchase 

        $details = PurchaseDetail::where('document_type_id', 1)
            ->where('document_id', $request->id)->get();
        foreach ($details as $detail) {
            if ($detail['sum_quantity_in_minor_unit'] == -1) {

                PurchaseDetail::where('product_id', $detail['product_id'])
                    ->where('sum_quantity_in_minor_unit', '!=', -1)
                    ->where('expires_at', $detail['expires_at'])
                    ->decrement(
                        'sum_quantity_in_minor_unit',
                        $detail['quantity_in_minor_unit']
                    );

                //and decrement quantity from product..... and then continue      


            } else {
                $sum =  $detail['sum_quantity_in_minor_unit'] - $detail['quantity_in_minor_unit'];
                $products = PurchaseDetail::where([
                    'product_id' => $detail['product_id'],
                    'expires_at' => $detail['expires_at'],
                    'sum_quantity_in_minor_unit' => -1,
                ]);
                if ($products->exists())
                    $products->first()->update(['sum_quantity_in_minor_unit' => $sum]);
            }

            $detail->delete();

            Product::find($detail['product_id'])->decrement('quantity_in_minor_unit', $detail['quantity_in_minor_unit']);
        }
    }
}
