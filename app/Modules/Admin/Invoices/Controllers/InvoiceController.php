<?php


namespace App\Modules\Admin\Invoices\Controllers;

use App\Http\Controllers\Controller;
use App\Modules\Admin\Accounts\Models\Transaction;
use App\Modules\Admin\people\Models\Person;
use App\Modules\Admin\people\Models\Customer;
use App\Modules\Admin\Products\Models\Inventory;
use App\Modules\Admin\Products\Models\Product;
use App\Modules\Admin\Invoices\Models\Invoice;
use App\Modules\Admin\Invoices\Models\InvoiceDetail;
use App\Traits\AccountTrait;
use App\Traits\TranstactionTrait;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class InvoiceController extends Controller
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


        $invoices = Invoice::where('invoices.company_id', 1);
        $invoices = $invoices->leftJoin('people', 'people.id', 'invoices.company_id')
            ->select('invoices.*', 'people.company_name');



        if ($search && $search['company_name']) {

            $company_name = $search['company_name'];
            $invoices = $invoices->whereHas('person', function ($q) use ($company_name) {
                $q->where('company_name', 'like', '%' . $company_name . '%');
            });
        };

        if ($search && $search['invoice_reference'])
            $invoices = $invoices->where('invoice_reference', 'like', '%' . $search['invoice_reference'] . '%');



        if ($search && $search['status_id'])
            $invoices = $invoices->where('status_id', $search['status_id']);
        if ($search && $search['minimum'])
            $invoices = $invoices->where('total_amount', '>=', $search['minimum']);
        if ($search && $search['maximum'])
            $invoices = $invoices->where('total_amount', '<=', $search['maximum']);
        if ($search && $search['date_from'])
            $invoices = $invoices->where('issue_date', '>=', $search['date_from']);
        if ($search && $search['date_to'])
            $invoices = $invoices->where('issue_date', '<=', $search['date_to']);





        $paid_amount = 0;


        if ($request->has('itemsPerPage'))
            $invoices = $invoices->orderBy('id', 'DESC')->paginate($request->itemsPerPage != -1 ? $request->itemsPerPage : '');
        else
            $invoices = $invoices->orderBy('id', 'DESC')->paginate(10);



        //$invoices = $invoices->get();

        foreach ($invoices as &$invoice) {

            $supp_documents = DB::table('supplemental_documentations')
                ->where('document_id', $invoice->id)
                ->where('document_type_id', 1)
                ->get();
            //return $supp_documents;
            $paid_amount += $invoice->paid_amount;
            foreach ($supp_documents as $supp_document) {
                $paid_amount += $supp_document->amount;
            }
            $invoice['remainder'] = $invoice->total_amount  - $paid_amount;
            //---reset
            $paid_amount = 0;
        }
        return $invoices;
    }
    public function index($id)
    {
        $invoice =  DB::table('invoices')->where('id', $id)->get()[0];


        $methods = Transaction::where('document_id', $id)
            ->where('document_type_id', 1)
            ->where('debit', -1)
            ->get();

        $invoice->payment_methods = $methods;






        $invoice_details =  DB::table('invoice_details')
            ->where('document_id', $id)
            ->where('document_type_id', 1)
            ->leftjoin('products', 'invoice_details.product_id', '=', 'products.id')
            ->get();



        // return      $invoice_details;


        $units = [];
        foreach ($invoice_details as &$invoice_detail) {
            $pivots = DB::table('prdct_units_products')->where('product_id', $invoice_detail->id)->get();
            foreach ($pivots as &$pivot) {
                $unit = DB::table('prdct_units')->where('id', $pivot->prdct_unit_id)->get();
                //return $unit[0];
                $unit[0]->pivot = $pivot;
                $units[] = $unit[0];
            }


            $invoice_detail->units = $units;
        }


        $invoice->invoice_details = $invoice_details;

        return [
            'invoice' => $invoice,
            'customers' => Person::where('company_id', '1')->where('is_customer', '1')->get(),
            'accounts' => $this->cashAndBanks()

        ];
    }

    public function index2(Request $request)
    {
        $invoices =  DB::table('invoices')->get();
        foreach ($invoices as &$invoice) {

            $invoice_details =  DB::table('invoice_details')
                ->where('document_id', 1)
                ->where('document_type_id', 1)
                ->leftjoin('products', 'invoice_details.product_id', '=', 'products.id')
                ->get();



            $units = [];
            foreach ($invoice_details as &$invoice_detail) {
                $pivots = DB::table('prdct_units_products')->where('product_id', $invoice_detail->id)->get();
                foreach ($pivots as &$pivot) {
                    $unit = DB::table('prdct_units')->where('id', $pivot->prdct_unit_id)->get();
                    //return $unit[0];
                    $unit[0]->pivot = $pivot;
                    $units[] = $unit[0];
                }


                $invoice_detail->units = $units;
            }


            $invoice->invoice_details = $invoice_details;
        }
        return $invoices;
    }
    public function index1(Request $request)
    {


        $invoices = Invoice::where('ar_name', 'LIKE', '%' . $request->search . '%')
            ->with('invoice_details')

            ->orderBy('id', 'DESC')
            // ->orWhere('en_name', 'LIKE', '%' . $request->search . '%')
            // ->orWhere('barcode', 'LIKE', '%' . $request->search . '%')
            ->paginate($request->itemsPerPage != -1 ? $request->itemsPerPage : '');

        return response()->json([
            'invoices' => $invoices,
        ]);

        //
        //return view('Invoices::index');


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



        $invoice = Invoice::create($request->all());

        $customer_account_id = Person::find($request->customer_id)['customer_account_id'];


        $customer_account = [
            "company_id" => 1,
            "account_id" => $customer_account_id,
            "debit" =>  0,
            "credit" => $request['total_amount'],
            "document_id" => $invoice->id,
            "document_type_id" => 1,
            "currency_code" => 1,
            "currency_rate" => 1,
            "description" => 'حساب العميل',
        ];
        $this->addTransactionEntry($customer_account);
        if ($request['paid_amount'] != 0) {
            $customer_account = [
                "company_id" => 1,
                "account_id" => $customer_account_id,
                "debit" =>  $request['paid_amount'],
                "credit" => 0,
                "document_id" => $invoice->id,
                "document_type_id" => 1,
                "currency_code" => 1,
                "currency_rate" => 1,
                "description" => 'مدفوعة للعميل',
            ];
            $this->addTransactionEntry($customer_account);
        }






        


        $payment_methods = $request->payment_methods;

        if (is_array($request['payment_methods'])) {


            foreach ($payment_methods as $payment_method) {
                if ($payment_method['account_id'] && $payment_method['credit'] > 0) {

                    $customer_account = [
                        "company_id" => 1,
                        "account_id" => $payment_method['account_id'],
                        "debit" =>  -1,
                        "credit" => $payment_method['credit'],
                        "document_id" => $invoice->id,
                        "document_type_id" => 1,
                        "currency_code" => 1,
                        "currency_rate" => 1,
                        "description" => 'مدفوعة للعميل',
                    ];
                    $this->addTransactionEntry($customer_account);
                }
            }
        }


        foreach ($request->invoice_details as $invoice_detail) {
            //transaction  inventory-
            Product::find($invoice_detail['id'])->increment('quantity_in_minor_unit',$invoice_detail['quantity_in_minor_unit']);
            
            
             
            

            //$account_id = (InvoiceDetail::where()->get())['account_id'];


            $inventory_account_id = Inventory::find($invoice_detail['inventory_id'])['account_id'];




            $entry = [
                "company_id" => 1,
                "account_id" => $inventory_account_id,
                "debit" =>  $invoice_detail['total'],
                "credit" => 0,
                "document_id" => $invoice->id,
                "document_type_id" => 1,
                "currency_code" => 1,
                "currency_rate" => 1,
                "description" => 'some description',
            ];
            $this->addTransactionEntry($entry);
            $invoice->invoice_details()->create($invoice_detail);
        }

        return $invoice;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Invoice  $invoice
     * @return \Illuminate\Http\Response
     */
    public function show(Invoice $invoice)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Invoice  $invoice
     * @return \Illuminate\Http\Response
     */
    public function edit(Invoice $invoice)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Invoice  $invoice
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {

        // delete all transactions 

        Transaction::where('document_type_id', 1)
            ->where('document_id', $request->id)
            ->delete();

        //delete all invoice details
        InvoiceDetail::where('document_type_id', 1)
            ->where('document_id', $request->id)
            ->delete();

        $invoice = Invoice::find($request->id);
        $invoice->update($request->all());


        //----

        $customer_account_id = Person::find($request->customer_id)['customer_account_id'];

        $customer_account = [
            "company_id" => 1,
            "account_id" => $customer_account_id,
            "debit" =>  0,
            "credit" => $request['total_amount'] - $request['additional_expenses'],
            "document_id" => $invoice->id,
            "document_type_id" => 1,
            "currency_code" => 1,
            "currency_rate" => 1,
            "description" => 'حساب العميل',
        ];
        $this->addTransactionEntry($customer_account);

        $customer_account = [
            "company_id" => 1,
            "account_id" => $customer_account_id,
            "debit" =>  $request['paid_amount'],
            "credit" => 0,
            "document_id" => $invoice->id,
            "document_type_id" => 1,
            "currency_code" => 1,
            "currency_rate" => 1,
            "description" => 'مدفوعة للعميل',
        ];
        $this->addTransactionEntry($customer_account);





        $additional_expenses_from_account_id = $request['additional_expenses_from_account_id'];
        $additional_expenses = [
            "company_id" => 1,
            "account_id" => $additional_expenses_from_account_id, //5103
            "debit" =>  0,
            "credit" => $request['additional_expenses'],
            "document_id" => $invoice->id,
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
            "document_id" => $invoice->id,
            "document_type_id" => 1,
            "currency_code" => 1,
            "currency_rate" => 1,
            "description" => 'مصاريف إضافية',
        ];
        $this->addTransactionEntry($additional_expenses);


        $payment_methods = $request->payment_methods;

        if (is_array($request['payment_methods'])) {


            foreach ($payment_methods as $payment_method) {
                $customer_account = [
                    "company_id" => 1,
                    "account_id" => $payment_method['account_id'],
                    "debit" =>  -1,
                    "credit" => $payment_method['credit'],
                    "document_id" => $invoice->id,
                    "document_type_id" => 1,
                    "currency_code" => 1,
                    "currency_rate" => 1,
                    "description" => 'مدفوعة للعميل',
                ];
                $this->addTransactionEntry($customer_account);
            }
        }


        foreach ($request->invoice_details as $invoice_detail) {
            //transaction  inventory-


            //$account_id = (InvoiceDetail::where()->get())['account_id'];


            $inventory_account_id = Inventory::find($invoice_detail['inventory_id'])['account_id'];




            $entry = [
                "company_id" => 1,
                "account_id" => $inventory_account_id,
                "debit" =>  $invoice_detail['total'],
                "credit" => 0,
                "document_id" => $invoice->id,
                "document_type_id" => 1,
                "currency_code" => 1,
                "currency_rate" => 1,
                "description" => 'some description',
            ];
            $this->addTransactionEntry($entry);
            $invoice->invoice_details()->create($invoice_detail);
        }

        return $invoice;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Invoice  $invoice
     * @return \Illuminate\Http\Response
     */
    public function destroy(Invoice $invoice)
    {
        //
    }
    private function addTransactionEntry($entry)
    {


        $account_id = Transaction::create($entry);
        return true;
    }
}
