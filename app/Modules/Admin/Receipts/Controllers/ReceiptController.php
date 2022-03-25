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


        $methods = Transaction::where('bill_id', $id)
            ->where('bill_type_id', 1)
            ->where('debit', -1)
            ->get();

        $receipt->payment_methods = $methods;






        $receipt_details =  DB::table('receipt_details')
            ->where('bill_id', $id)
            ->where('bill_type_id', 1)
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
                ->where('bill_id', 1)
                ->where('bill_type_id', 1)
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
    public function create()
    {

        return [
            'suppliers' => Person::where('company_id', '1')->where('is_supplier', '1')->get(),
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

        if ($request['amount'] > 0) {


            $request['company_id'] = 1;


            $receipt = Receipt::create($request->all());




            $supplier_account_id = Person::find($request->person_id)['supplier_account_id'];

            $supplier_account = [
                "company_id" => 1,
                "account_id" => $supplier_account_id,
                "debit" => $request['type_id'] == 1 ?  $request['amount'] : 0,
                "credit" => $request['type_id'] == 2 ?  $request['amount'] : 0,
                "bill_id" => $receipt->id,
                "bill_type_id" => 2,
                "currency_code" => 1,
                "currency_rate" => 1,
                "description" => $request['type_id'] == 1 ? 'صرف للمورد' : 'قبض من المورد'
            ];
            $this->addTransactionEntry($supplier_account);





            $payment_to_supplier = [
                "company_id" => 1,
                "account_id" => $request['account_id'], //5103
                "debit" =>  0,
                "credit" => $request['amount'],
                "bill_id" => $receipt->id,
                "bill_type_id" => 2,
                "currency_code" => 1,
                "currency_rate" => 1,
                "description" => 'دفعة للمورد',
            ];
            $this->addTransactionEntry($payment_to_supplier);
            $request['supplier_id'] = $request->person_id;
            $unpaid_bills = $this->allUnPaidBill($request);


            $remainder = $request['amount'];

            $used = false;

            foreach ($unpaid_bills as $unpaid_bill) {

                if ($remainder == 0) {

                    if ($used)
                        Receipt::find($receipt->id)->update(['status_id' => 2]);
                    break;
                }

                if ($remainder >= $unpaid_bill['remainder']) {
                    $used = true;
                    /* create sup-doc for unpaid_bills*/
                    $sup_doc_model = [
                        'company_id' => 1,
                        "bill_id" => $unpaid_bill['id'],
                        "bill_type_id" => 1,
                        'amount' => $unpaid_bill['remainder'],
                        "confirmation_bill_id" => $receipt->id,
                        "confirmation_bill_type_id" => 2,
                    ];
                    SupplementalBilling::create($sup_doc_model);
                    $remainder = $remainder - $unpaid_bill['remainder'];
                    /* make bill paid*/
                    Bill::find($unpaid_bill['id'])->update(['status_id' => 3]);
                    continue;
                }
                $sup_doc_model = [
                    'company_id' => 1,
                    "bill_id" => $unpaid_bill['id'],
                    "bill_type_id" => 1,
                    'amount' => $remainder,
                    "confirmation_bill_id" => $receipt->id,
                    "confirmation_bill_type_id" => 2,
                ];
                SupplementalBilling::create($sup_doc_model);
                Bill::find($unpaid_bill['id'])->update(['status_id' => 4]);
                Receipt::find($receipt->id)->update(['status_id' => 3]);
                break;
                /*---------------*/
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

        $sup_doc = SupplementalBilling::where('confirmation_bill_id', $id)->where('confirmation_bill_type_id', 2)
            ->leftJoin('bills', 'bills.id', 'bill_id')->select('supplemental_billings.*', 'supplemental_billings.id as sup_doc_id', 'bills.*');
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
            $receipts = $receipts->where('receipts.type_id', 'like', '%' . $search['type_id'] . '%');
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

            $receipt->spentAmount = SupplementalBilling::where('confirmation_bill_id', $receipt->id)->where('confirmation_bill_type_id', 2)->sum('amount');
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
        Receipt::where('id', $request->receipt_id)->delete();
        SupplementalBilling::where('confirmation_bill_id', $request->receipt_id)->where('confirmation_bill_type_id', 2)->delete();
        return $this->all($request);
    }
    public function destroySupDoc(Request $request)
    {
        SupplementalBilling::where('id', $request->id)->delete();

        // change status of receipt

        $sup_doc = SupplementalBilling::where('confirmation_bill_id', $request->receipt_id)->where('confirmation_bill_type_id', 2)->get();


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
