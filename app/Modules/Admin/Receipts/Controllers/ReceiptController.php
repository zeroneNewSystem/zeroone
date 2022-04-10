<?php


namespace App\Modules\Admin\Receipts\Controllers;

use App\Http\Controllers\Controller;
use App\Models\SupplementalBilling;
use App\Modules\Admin\Accounts\Models\Transaction;
use App\Modules\Admin\people\Models\Person;
use App\Modules\Admin\people\Models\Supplier;
use App\Modules\Admin\Products\Models\Inventory;
use App\Modules\Admin\Bills\Models\Bill;
use App\Modules\Admin\Receipts\Models\Receipt;
use App\Modules\Admin\Receipts\Models\ReceiptDetail;
use App\Traits\AccountTrait;
use App\Traits\BillTrait;
use App\Traits\TranstactionTrait;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ReceiptController extends Controller
{

    use AccountTrait;
    use BillTrait;

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */


    public function index($id)
    {
        $receipt =  DB::table('receipts')->where('id', $id)->first();


        $methods = Transaction::where('document_id', $id)
            ->where('document_type_id', 1)
            ->where('debit', -1)
            ->get();

        $receipt->payment_methods = $methods;






        $receipt_details =  DB::table('receipt_details')
            ->where('document_id', $id)
            ->where('document_type_id', 1)
            ->leftjoin('products', 'receipt_details.product_id', '=', 'products.id')
            ->get();



        // return      $receipt_details;


        $units = [];
        foreach ($receipt_details as &$receipt_detail) {
            $pivots = DB::table('prdct_units_products')->where('product_id', $receipt_detail->id)->get();
            foreach ($pivots as &$pivot) {
                $unit = DB::table('prdct_units')->where('id', $pivot->prdct_unit_id)->get();
                //return $unit[0];
                $unit[0]->pivot = $pivot;
                $units[] = $unit[0];
            }


            $receipt_detail->units = $units;
        }


        $receipt->receipt_details = $receipt_details;

        return [
            'receipt' => $receipt,
            'suppliers' => Person::where('company_id', '1')->where('is_supplier', '1')->get(),


        ];
    }

    public function index2(Request $request)
    {
        $receipts =  DB::table('receipts')->get();
        foreach ($receipts as &$receipt) {

            $receipt_details =  DB::table('receipt_details')
                ->where('document_id', 1)
                ->where('document_type_id', 1)
                ->leftjoin('products', 'receipt_details.product_id', '=', 'products.id')
                ->get();



            $units = [];
            foreach ($receipt_details as &$receipt_detail) {
                $pivots = DB::table('prdct_units_products')->where('product_id', $receipt_detail->id)->get();
                foreach ($pivots as &$pivot) {
                    $unit = DB::table('prdct_units')->where('id', $pivot->prdct_unit_id)->get();
                    //return $unit[0];
                    $unit[0]->pivot = $pivot;
                    $units[] = $unit[0];
                }


                $receipt_detail->units = $units;
            }


            $receipt->receipt_details = $receipt_details;
        }
        return $receipts;
    }
    public function index1(Request $request)
    {


        $receipts = Receipt::where('ar_name', 'LIKE', '%' . $request->search . '%')
            ->with('receipt_details')

            ->orderBy('id', 'DESC')
            // ->orWhere('en_name', 'LIKE', '%' . $request->search . '%')
            // ->orWhere('barcode', 'LIKE', '%' . $request->search . '%')
            ->paginate($request->itemsPerPage != -1 ? $request->itemsPerPage : '');

        return response()->json([
            'receipts' => $receipts,
        ]);

        //
        //return view('Receipts::index');


    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {

        if ($request->type_id == 1) {
            $people = Person::where('company_id', '1')->where('is_supplier', '1')->get();
        }
        if ($request->type_id == 2) {
            $people = Person::where('company_id', '1')->where('is_supplier', '1')->get();
        }
        return [
            'people' => $people,
            'accounts' => $this->cashAndBanks()
        ];
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        //confirmation_document_id = هذا السند 

        if ($request['amount'] > 0) {









            $request['company_id'] = 1;


            $receipt = Receipt::create($request->all());




            $supplier_account_id = Person::find($request->person_id)['supplier_account_id'];

            $supplier_account = [
                "company_id" => 1,
                "account_id" => $supplier_account_id,
                "debit" => $request['payment_type_id'] == 1 ?  $request['amount'] : 0,
                "credit" => $request['payment_type_id'] == 2 ?  $request['amount'] : 0,
                "document_id" => $receipt->id,
                "document_type_id" => 5,
                "currency_code" => 1,
                "currency_rate" => 1,
                "description" => $request['payment_type_id'] == 1 ? 'صرف ' : 'قبض '
            ];
            $this->addTransactionEntry($supplier_account);





            $payment_to_supplier = [
                "company_id" => 1,
                "account_id" => $request['account_id'], //5103
                "debit" => $request['payment_type_id'] == 2 ?  $request['amount'] : 0,
                "credit" => $request['payment_type_id'] == 1 ?  $request['amount'] : 0,
                "document_id" => $receipt->id,
                "document_type_id" => 5,
                "currency_code" => 1,
                "currency_rate" => 1,
                "description" => $request['payment_type_id'] == 1 ? 'صرف ' : 'قبض '
            ];
            $this->addTransactionEntry($payment_to_supplier);
            $request['person_id'] = $request->person_id;
            $unpaid_bills = $this->allUnPaidBill($request);


            $remainder = $request['amount'];
            if ($request['payment_type_id'] == 1) {
                if ($request['allocate_dynamically']) {
                    foreach ($unpaid_bills as $unpaid_bill) {
                        if ($remainder >= $unpaid_bill['remainder']) {
                            /* create sup-doc for unpaid_bills*/
                            $sup_doc_model = [
                                'company_id' => 1,
                                "document_id" => $unpaid_bill['id'],
                                "document_type_id" => 1,
                                'amount' => $unpaid_bill['remainder'],
                                "confirmation_document_id" => $receipt->id,
                                "confirmation_document_type_id" => 5,
                            ];
                            SupplementalBilling::create($sup_doc_model);
                            $remainder = $remainder - $unpaid_bill['remainder'];
                            /* make bill paid*/
                            Bill::find($unpaid_bill['id'])->update(['status_id' => 3]); //مدفوعة كاملة
                            if ($remainder == 0) {
                                Receipt::find($receipt->id)->update(['status_id' => 2]); // السند انصرف كاملا
                                break;
                            }

                            continue;
                        }
                        $sup_doc_model = [
                            'company_id' => 1,
                            "document_id" => $unpaid_bill['id'],
                            "document_type_id" => 1,
                            'amount' => $remainder,
                            "confirmation_document_id" => $receipt->id,
                            "confirmation_document_type_id" => 5,
                        ];
                        SupplementalBilling::create($sup_doc_model);
                        Bill::find($unpaid_bill['id'])->update(['status_id' => 2]); // مدفوعة الفاتورة جزئيا
                        Receipt::find($receipt->id)->update(['status_id' => 3]); // السند انصرف جزئيا
                        break;
                        /*---------------*/
                    }
                }
            }








            return $receipt;
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Receipt  $receipt
     * @return \Illuminate\Http\Response
     */
    public function one($id)
    {
        $receipt = Receipt::select('receipts.*', 'people.company_name', 'accounts.account_code', 'accounts.ar_name')->where('receipts.company_id', '1')->where('receipts.id', $id);




        $receipt = $receipt->leftJoin('people', 'people.id', 'receipts.person_id');
        $receipt = $receipt->leftJoin('accounts', 'accounts.id', 'receipts.account_id');

        $receipt = $receipt->get();
        if (!count($receipt))
            return [
                'code' => 20,
                'status' => 'error',
                'message' => 'No Receipt '
            ];

        $receipt = $receipt[0];

        $sup_doc = SupplementalBilling::where('confirmation_document_id', $id)->where('confirmation_document_type_id', 5)
            ->leftJoin('bills', 'bills.id', 'document_id')->select('supplemental_billings.*', 'supplemental_billings.id as sup_doc_id', 'bills.*');
        $receipt['spentAmount'] = $sup_doc->sum('amount');
        $receipt['uses_of_receipt'] = $sup_doc->get();
        return $receipt;
    }
    public function all(Request $request)
    {


        $search  = json_decode($request->search, true);
        $receipts = Receipt::select('receipts.*', 'people.company_name', 'accounts.account_code', 'accounts.ar_name')->where('receipts.company_id', '1');



        if ($search && $search['company_name']) {

            $company_name = $search['company_name'];
            $receipts = $receipts->whereHas('person', function ($q) use ($company_name) {
                $q->where('company_name', 'like', '%' . $company_name . '%');
            });
        };



        if ($search && $search['receipt_reference'])
            $receipts = $receipts->where('receipt_reference', 'like', '%' . $search['receipt_reference'] . '%');
        if ($search && $search['type_id'])
            $receipts = $receipts->where('receipts.type_id', $search['type_id']);
        if ($search && $search['payment_type_id'])
            $receipts = $receipts->where('receipts.payment_type_id', 'like', '%' . $search['payment_type_id'] . '%');
        if ($search && $search['date_from'])
            $receipts = $receipts->where('date', '>', $search['date_from']);
        if ($search && $search['date_to'])
            $receipts = $receipts->where('date', '<', $search['date_to']);
        if ($search && $search['status_id'])
            $receipts = $receipts->where('status_id', $search['status_id']);
        $receipts = $receipts->leftJoin('people', 'people.id', 'receipts.person_id');
        $receipts = $receipts->leftJoin('accounts', 'accounts.id', 'receipts.account_id');

        if ($request->has('itemsPerPage'))
            $receipts = $receipts->orderBy('id', 'DESC')->paginate($request->itemsPerPage != -1 ? $request->itemsPerPage : '');
        else
            $receipts = $receipts->orderBy('id', 'DESC')->paginate(10);


        foreach ($receipts as &$receipt) {
            $receipt->spentAmount = SupplementalBilling::where('confirmation_document_id', $receipt->id)->where('confirmation_document_type_id', 5)->sum('amount');
        }

        return $receipts;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Receipt  $receipt
     * @return \Illuminate\Http\Response
     */
    public function edit(Receipt $receipt)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Receipt  $receipt
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Receipt  $receipt
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        Receipt::where('id', $request->id)->delete();



        //delete transactions for receipt

        Transaction::where('document_type_id', 5)
            ->where('document_id', $request->id)
            ->delete();



        $sup_docs = SupplementalBilling::where('confirmation_document_id', $request->id)->where('confirmation_document_type_id', 5)->get();


        foreach ($sup_docs as $sup_doc) {
            /*
            نمر عى لفواتير إذا كان السند غطى الباقي معناته حف السند يخلي الفاتورة غير مدفوعة
            وفي الحالات الاخرى يخليها مدفوعة جزئيا
            
            
            */
            $bill = Bill::find($sup_doc->document_id);
            if ($bill->remainder ==  $sup_doc->amount) {
                $bill->status_id = 1;
                continue;
            }
            $bill->status_id = 2;
        }






        SupplementalBilling::where('confirmation_document_id', $request->id)->where('confirmation_document_type_id', 5)->delete();
        return $this->all($request);
    }
    public function destroyo(Request $request)
    {
        Receipt::where('id', $request->receipt_id)->delete();
        SupplementalBilling::where('confirmation_document_id', $request->receipt_id)->where('confirmation_document_type_id', 5)->delete();
        return $this->all($request);
    }
    public function destroySupDoc(Request $request)
    {


        Transaction::where('document_type_id', 5)
            ->where('document_id', $request->id)
            ->delete();

        SupplementalBilling::where('id', $request->id)->delete();

        // change status of receipt

        $sup_doc = SupplementalBilling::where('confirmation_document_id', $request->receipt_id)->where('confirmation_document_type_id', 5)->get();



        if (count($sup_doc))
            Receipt::find($request->receipt_id)->update(['status_id' => 2]);
        else
            Receipt::find($request->receipt_id)->update(['status_id' => 1]);






        return $this->one($request->receipt_id);
    }
    private function addTransactionEntry($entry)
    {


        $account_id = Transaction::create($entry);
        return true;
    }
}
