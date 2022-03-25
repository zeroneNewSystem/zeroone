<?php


namespace App\Modules\Admin\Bills\Controllers;

use App\Http\Controllers\Controller;


use App\Modules\Admin\Accounts\Models\Transaction;
use App\Modules\Admin\people\Models\Person;
use App\Modules\Admin\people\Models\Supplier;
use App\Modules\Admin\Products\Models\Inventory;
use App\Modules\Admin\Products\Models\Product;
use App\Modules\Admin\Bills\Models\Bill;
use App\Modules\Admin\Bills\Models\BillDetail;
use App\Traits\AccountTrait;
use App\Traits\TranstactionTrait;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\Mime\Message;

class BillController extends Controller
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


        $bills = Bill::where('bills.company_id', 1)->where('bills.type_id', $search['type_id']);
        $bills = $bills->leftJoin('people', 'people.id', 'bills.company_id')
            ->select('bills.*', 'people.company_name');



        if ($search && $search['company_name']) {

            $company_name = $search['company_name'];
            $bills = $bills->whereHas('person', function ($q) use ($company_name) {
                $q->where('company_name', 'like', '%' . $company_name . '%');
            });
        };

        if ($search && $search['reference'])
            $bills = $bills->where('reference', 'like', '%' . $search['reference'] . '%');



        if ($search && $search['status_id'])
            $bills = $bills->where('status_id', $search['status_id']);
        if ($search && $search['minimum'])
            $bills = $bills->where('total_amount', '>=', $search['minimum']);
        if ($search && $search['maximum'])
            $bills = $bills->where('total_amount', '<=', $search['maximum']);
        if ($search && $search['date_from'])
            $bills = $bills->where('issue_date', '>=', $search['date_from']);
        if ($search && $search['date_to'])
            $bills = $bills->where('issue_date', '<=', $search['date_to']);





        $paid_amount = 0;


        if ($request->has('itemsPerPage'))
            $bills = $bills->orderBy('id', 'DESC')->paginate($request->itemsPerPage != -1 ? $request->itemsPerPage : '');
        else
            $bills = $bills->orderBy('id', 'DESC')->paginate(10);



        //$bills = $bills->get();

        foreach ($bills as &$bill) {

            $supp_bills = DB::table('supplemental_billings')
                ->where('document_id', $bill->id)
                ->where('document_type_id', 1)
                ->get();
            //return $supp_bills;
            $paid_amount += $bill->paid_amount;
            foreach ($supp_bills as $supp_bill) {
                $paid_amount += $supp_bill->amount;
            }
            $bill['remainder'] = $bill->total_amount  - $paid_amount;
            //---reset
            $paid_amount = 0;
        }
        return $bills;
    }
    public function index(Request $request, $id)
    {
        $document_type_id = $request->document_type_id;

        $bill =  DB::table('bills')->where('id', $id)->where('type_id', $document_type_id)->first();

        if (!$bill) return [];
        $methods = Transaction::where('document_id', $id)
            ->where('document_type_id', $document_type_id)
            ->where('debit', -1)
            ->get();

        foreach ($methods as &$method) {
            $method['amount'] = $method['credit'] + $method['debit'] + 1;
        }

        $bill->payment_methods = $methods;
        $bill_details =  DB::table('bill_details')
            ->where('document_id', $id)
            ->where('document_type_id', $document_type_id)
            ->leftjoin('products', 'bill_details.product_id', '=', 'products.id')
            ->get();

        $units = [];
        foreach ($bill_details as &$bill_detail) {
            $pivots = DB::table('prdct_units_products')->where('product_id', $bill_detail->id)->get();
            foreach ($pivots as &$pivot) {
                $unit = DB::table('prdct_units')->where('id', $pivot->prdct_unit_id)->get();
                $unit[0]->pivot = $pivot;
                $units[] = $unit[0];
            }
            $bill_detail->units = $units;
        }

        $bill->bill_details = $bill_details;

        return [
            'bill' => $bill,
            'people' => Person::where('company_id', '1')->where('is_supplier', '1')->get(),
            'accounts' => $this->cashAndBanks()

        ];
    }

    public function new(Request $request)
    {
    }
    public function index2(Request $request)
    {
        $bills =  DB::table('bills')->get();
        foreach ($bills as &$bill) {

            $bill_details =  DB::table('bill_details')
                ->where('document_id', 1)
                ->where('document_type_id', 1)
                ->leftjoin('products', 'bill_details.product_id', '=', 'products.id')
                ->get();



            $units = [];
            foreach ($bill_details as &$bill_detail) {
                $pivots = DB::table('prdct_units_products')->where('product_id', $bill_detail->id)->get();
                foreach ($pivots as &$pivot) {
                    $unit = DB::table('prdct_units')->where('id', $pivot->prdct_unit_id)->get();
                    //return $unit[0];
                    $unit[0]->pivot = $pivot;
                    $units[] = $unit[0];
                }


                $bill_detail->units = $units;
            }


            $bill->bill_details = $bill_details;
        }
        return $bills;
    }
    public function index1(Request $request)
    {


        $bills = Bill::where('ar_name', 'LIKE', '%' . $request->search . '%')
            ->with('bill_details')

            ->orderBy('id', 'DESC')
            // ->orWhere('en_name', 'LIKE', '%' . $request->search . '%')
            // ->orWhere('barcode', 'LIKE', '%' . $request->search . '%')
            ->paginate($request->itemsPerPage != -1 ? $request->itemsPerPage : '');

        return response()->json([
            'bills' => $bills,
        ]);

        //
        //return view('Bills::index');


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
    public function validation($document)
    {
        $message = [];
        $valid = true;
        $counter = 0;
        foreach ($document->bill_details as $bill_detail) {
            // check detail in database
            $old_detail = BillDetail::where([
                'product_id' => $bill_detail['product_id'],
                'expires_at' => $bill_detail['expires_at'],
            ])->where('sum_quantity_in_minor_unit', '>=', $bill_detail['quantity_in_minor_unit']);

            if (!$old_detail->exists()) {
                $message[] = $counter;
                $valid = false;
            }
            $counter++;
        }

        return ['valid' => $valid, 'message' => $message];
    }
    public function store(Request $request)
    {
        $message = $this->validation($request);
        if (!$message['valid'])

            return $message;

        /* validation */
        /* $rules = [
            "description" => "required",
            "paid_amount" => "min:6"

        ];

        $validator =  Validator::make(
            $request->all(),
            $rules
        );
        if ($validator->fails()){
            return $validator->errors();
        }
*/




        $request['company_id'] = 1;
        $bill = Bill::create($request->all());
        $this->storeLinkedData($request, $bill);
        return ['valid' => true];
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Bill  $bill
     * @return \Illuminate\Http\Response
     */
    public function show(Bill $bill)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Bill  $bill
     * @return \Illuminate\Http\Response
     */
    public function edit(Bill $bill)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Bill  $bill
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {

        // delete all transactions 

        $this->deleteLinkedData($request);
        $bill = Bill::find($request->id);
        $bill->update($request->all());

        $this->storeLinkedData($request, $bill);

        //----



        return $bill;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Bill  $bill
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {

        $this->deleteLinkedData($request);
        Bill::find($request->id)->delete();



        // delete all transactions 


        //return $request->id;










        return $this->all($request);
    }
    private function addTransactionEntry($entry)
    {


        $account_id = Transaction::create($entry);
        return true;
    }
    private function storeLinkedData($document, $bill)
    {

        /*
        1 - purchase
        2 - invoice
        3 - purchase return 
        4 - invoice  return 
        */



        $debit = $credit = 0;
        $inventory_increase = true;

        if ($bill['type_id'] == 1 || $bill['type_id'] == 4) {
            $credit = $document['total_amount'];
            $person_account_id = Person::find($document->person_id)['supplier_account_id'];
        } else if ($bill['type_id'] == 2 || $bill['type_id'] == 3) {
            $debit = $document['total_amount'];
            $inventory_increase = false;
            $person_account_id = Person::find($document->person_id)['customer_account_id'];
        }

        $person_account = [
            "company_id" => 1,
            "account_id" => $person_account_id,
            "debit" =>  $debit,
            "credit" => $credit,
            "document_id" => $bill->id,
            "document_type_id" => $bill->type_id,
            "currency_code" => 1,
            "currency_rate" => 1,
            "description" => 'حساب المورد',
        ];
        $this->addTransactionEntry($person_account);

        if ($document['paid_amount'] != 0) {
            if ($document['only_cash']) {
                $person_account = [
                    "company_id" => 1,
                    "account_id" => $person_account_id,
                    "debit" =>  $inventory_increase ? $document['paid_amount'] : 0,
                    "credit" => !$inventory_increase ? $document['paid_amount'] : 0,
                    "document_id" => $bill->id,
                    "document_type_id" => $bill->type_id,
                    "currency_code" => 1,
                    "currency_rate" => 1,
                    "description" => $inventory_increase ? 'مدفوعة من العميل' : 'مدفوعة للمورد',
                ];
                $this->addTransactionEntry($person_account);
                $cash = [
                    "company_id" => 1,
                    "account_id" => 4,
                    "debit" =>  $inventory_increase ? 0 : $document['paid_amount'],
                    "credit" => !$inventory_increase ? 0 : $document['paid_amount'],
                    "document_id" => $bill->id,
                    "document_type_id" => $bill->type_id,
                    "currency_code" => 1,
                    "currency_rate" => 1,
                    "description" => $inventory_increase ? 'مدفوع من العميل للصندوق' : 'مدفوعة للمورد من الصندوق',
                ];
                $this->addTransactionEntry($cash);
            } else {
                $payment_methods = $document->payment_methods;
                $sum = 0;
                foreach ($payment_methods as $payment_method) {

                    if ($payment_method['account_id'] && $payment_method['amount'] > 0) {

                        $person_account = [
                            "company_id" => 1,
                            "account_id" => $payment_method['account_id'],
                            "debit" => $inventory_increase ? -1 : $payment_method['amount'],
                            "credit" => !$inventory_increase ? -1 : $payment_method['amount'],
                            "document_id" => $bill->id,
                            "document_type_id" => $bill->type_id,
                            "currency_code" => 1,
                            "currency_rate" => 1,
                            "description" => $inventory_increase ? 'مدفوعة للمورد ' : 'مدفوعة من العميل',
                        ];
                        $this->addTransactionEntry($person_account);
                        $person_account = [
                            "company_id" => 1,
                            "account_id" => $person_account_id,
                            "debit" => !$inventory_increase ? -1 : $payment_method['amount'],
                            "credit" => $inventory_increase ? -1 : $payment_method['amount'],
                            "document_id" => $bill->id,
                            "document_type_id" => $bill->type_id,
                            "currency_code" => 1,
                            "currency_rate" => 1,
                            "description" => $inventory_increase ? 'مدفوعة للمورد ' : 'مدفوعة من العميل',
                        ];
                        $this->addTransactionEntry($person_account);
                    }
                }
            }
        }


        if ($document['additional_expenses'] > 0) {
            $additional_expenses_from_account_id = $document['additional_expenses_from_account_id'];
            $additional_expenses = [
                "company_id" => 1,
                "account_id" => $additional_expenses_from_account_id, //5103
                "debit" =>  $inventory_increase ? 0 : $document['additional_expenses'],
                "credit" => !$inventory_increase ? 0 : $document['additional_expenses'],
                "document_id" => $bill->id,
                "document_type_id" => $bill->type_id,
                "currency_code" => 1,
                "currency_rate" => 1,
                "description" => 'مصاريف إضافية',
            ];
            $this->addTransactionEntry($additional_expenses);
            $additional_expenses = [
                "company_id" => 1,
                "account_id" => 63, //5103
                "debit" =>  $inventory_increase ? 0 : $document['additional_expenses'],
                "credit" => !$inventory_increase ? 0 : $document['additional_expenses'],
                "document_id" => $bill->id,
                "document_type_id" => $bill->type_id,
                "currency_code" => 1,
                "currency_rate" => 1,
                "description" => 'مصاريف إضافية',
            ];
            $this->addTransactionEntry($additional_expenses);
        }



        foreach ($document->bill_details as $bill_detail) {

            $bill_detail['document_type_id'] = $document->type_id;


            //transaction  inventory-
            $inventory_increase ?
                Product::find($bill_detail['id'])->increment('quantity_in_minor_unit', $bill_detail['quantity_in_minor_unit']) :
                Product::find($bill_detail['id'])->decrement('quantity_in_minor_unit', $bill_detail['quantity_in_minor_unit']);





            //$account_id = (BillDetail::where()->get())['account_id'];


            $inventory_account_id = Inventory::find($bill_detail['inventory_id'])['account_id'];

            $entry = [
                "company_id" => 1,
                "account_id" => $inventory_account_id,
                "debit" =>  $inventory_increase ? $bill_detail['total'] : 0,
                "credit" => !$inventory_increase ? $bill_detail['total'] : 0,
                "document_id" => $bill->id,
                "document_type_id" => $bill->type_id,
                "currency_code" => 1,
                "currency_rate" => 1,
                "description" => 'some description',
            ];
            $this->addTransactionEntry($entry);



            $old_detail = BillDetail::where([
                'product_id' => $bill_detail['product_id'],
                'expires_at' => $bill_detail['expires_at'],
            ])->where('sum_quantity_in_minor_unit', '!=', -1);

            if (!$old_detail->exists()) {
                $bill_detail['sum_quantity_in_minor_unit'] = $bill_detail['quantity_in_minor_unit'];
            } else {
                $inventory_increase ?
                    $old_detail->increment(
                        'sum_quantity_in_minor_unit',
                        $bill_detail['quantity_in_minor_unit']
                    ) :
                    $old_detail->decrement(
                        'sum_quantity_in_minor_unit',
                        $bill_detail['quantity_in_minor_unit']
                    );
            }

            $bill->bill_details()->create($bill_detail);
        }
    }
    private function deleteLinkedData($document)
    {




        Transaction::where('document_type_id', 1)
            ->where('document_id', $document->id)
            ->delete();

        // delete bill 

        $bill_details = BillDetail::where('document_type_id', $document->type_id)
            ->where('document_id', $document->id)->get();
        foreach ($bill_details as $bill_detail) {
            if ($bill_detail['sum_quantity_in_minor_unit'] == -1) {

                BillDetail::where('product_id', $bill_detail['product_id'])
                    ->where('sum_quantity_in_minor_unit', '!=', -1)
                    ->where('expires_at', $bill_detail['expires_at'])
                    ->decrement(
                        'sum_quantity_in_minor_unit',
                        $bill_detail['quantity_in_minor_unit']
                    );

                //and decrement quantity from product..... and then continue      


            } else {
                $sum =  $bill_detail['sum_quantity_in_minor_unit'] - $bill_detail['quantity_in_minor_unit'];
                $products = BillDetail::where([
                    'product_id' => $bill_detail['product_id'],
                    'expires_at' => $bill_detail['expires_at'],
                    'sum_quantity_in_minor_unit' => -1,
                ]);
                if ($products->exists())
                    $products->first()->update(['sum_quantity_in_minor_unit' => $sum]);
            }

            $bill_detail->delete();

            Product::find($bill_detail['product_id'])->decrement('quantity_in_minor_unit', $bill_detail['quantity_in_minor_unit']);
        }
    }
}
