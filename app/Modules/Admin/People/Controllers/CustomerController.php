<?php

namespace App\Modules\Admin\people\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Receipt;
use App\Modules\Admin\Accounts\Models\Account;
use App\Modules\Admin\people\Models\Person;
use App\Modules\Admin\people\Models\Customer;
use App\Modules\Admin\Invoices\Models\Invoice;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use PhpOffice\PhpSpreadsheet\Calculation\TextData\Search;

class CustomerController extends Controller
{



    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function indexa(Request $request)
    {
        $customers = DB::table('tab01')
            ->select(
                'tab01.id',
                'tab01.name',
                'tab02.name as tab02_name',
                'tab03.name as tab03_name',

            );
        $customers = $customers->leftJoin('tab02', 'tab02.tab01_id', '=', 'tab01.id');
        $customers = $customers->leftJoin('tab03', 'tab03.tab02_id', '=', 'tab01.id');
        //$customers = $customers->leftJoin('transactions as trans', 'acc.id', '=', 'trans.account_id');
        //$customers = $customers->leftJoin('invoices as pur', 'people.id', '=', 'pur.supplier_id');

        //return $customers->toSql();
        $customers = $customers->get();

        return $customers;
    }
    public function index0(Request $request)
    {
        $customers = DB::table('tab01')
            ->select(
                'people.id',
                'people.name',
                'people.company_name',
                'people.is_customer_active',
                //DB::raw('SUM(acc.parent_id) As revenue'),
                //DB::raw('count(trans.debit) As reva'),
                //DB::raw('SUM(pur.id - pur.total_amount) As rev')
                DB::raw('(select SUM(debit - credit) from transactions where acc.id = account_id)')
                //DB::raw('SUM(acc.parent_idAY6Y) As revenue')

            )->groupByRaw('people.name,people.id,people.company_name,people.is_customer_active,acc.id ');

        $customers = $customers->leftJoin('accounts as acc', 'people.id', '=', 'acc.accountable_id');
        //$customers = $customers->leftJoin('transactions as trans', 'acc.id', '=', 'trans.account_id');
        //$customers = $customers->leftJoin('invoices as pur', 'people.id', '=', 'pur.supplier_id');

        return $customers->toSql();
        $customers = $customers->get();

        return $customers;
    }
    public function index(Request $request)
    {
        /*$List = Schema::getColumnListing('people');
        
        foreach ($List as &$item)
            $item = 'people.' . $item;

        return $List;*/



        $search  = json_decode($request->search, true);

        if (!$search)
            return Person::where('company_id', '1')->where('is_customer', '1')->get();

        $customers = DB::table('people')
            ->select(
                'people.*',
                'acc.id as acc_id',
                'trans.id as trans_id',
                'pur.id as pur_id',
                'supdoc.id as supdoc_id',

                'trans.debit',
                'trans.credit',
                'pur.maturity_date',
                'supdoc.amount',
            )


            ->where('people.company_id', '1')->where('is_customer', '1');

        if ($search['company_name'])
            $customers = $customers->where('company_name', 'like', '%' . $search['company_name'] . '%');

        if ($search['name'])
            $customers = $customers->where('name', 'like', '%' . $search['name'] . '%');

        if ($search['is_customer_active'] !== "")
            $customers = $customers->where('is_customer_active', $search['is_customer_active']);



        if ($search['phone']) {

            $customers = $customers->where('phone01', $search['phone'])->orWhere('phone02', $search['phone']);
        }


        //$customers = $customers->leftJoin('accounts as acc', 'people.id', '=', 'acc.accountable_id');
        $customers = $customers->leftJoin(
            'accounts as acc',
            function ($leftJoin) {
                $leftJoin
                    ->on('people.id', '=', 'acc.accountable_id')
                    ->where('acc.accountable_type', 'customer');
            }

        );
        // all transactions 
        $customers = $customers->leftJoin('transactions as trans', 'acc.id', '=', 'trans.account_id');

        // all maturity invoice
        $customers = $customers->leftJoin(
            'invoices as pur',
            function ($leftJoin) {
                $leftJoin
                    ->on('trans.bill_id', '=', 'pur.id')
                    ->where('trans.bill_type_id', 1)
                    ->where('pur.maturity_date', '<', date('Y-m-d'))
                    ->where('pur.payment_status_id', '!=', 5)
                    ->where('pur.payment_status_id', '!=', 5);
            }

        );
        $customers = $customers->leftJoin(
            'supplemental_billings as supdoc',
            function ($leftJoin) {
                $leftJoin
                    ->on('supdoc.bill_id', '=', 'pur.id')
                    ->where('supdoc.bill_type_id', 1);
            }

        );

        $customers = $customers->orderBy('people.id', 'DESC')->paginate($request->itemsPerPage != -1 ? $request->itemsPerPage : '');

        // $name = 'محمد';

        // $customers = Person::with('person')->whereHas('person', function (Builder $query) use ($name) {
        //     $query->where('ar_name', $name);
        // })->get();

        // return $customers;





        return response()->json(['customers' => $customers], 200);

        //return Person::where('company_id','1')->where('is_customer','1')->get();    


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
        $request['person_id'] = 1;
        $request['is_customer'] = 1;

        $account_line = Account::where('account_code', 'like', '%1103%')->orderBy('account_code', 'DESC')->get();

        if ($account_line[0]['account_code'] == '1103')
            $account_code = '110300001';
        else
            $account_code = $account_line[0]['account_code'] + 1;

        $customer = Person::create($request->all());
        $request['customer_account_id'] = $account_code;

        $account_items =
            [
                'company_id' => '1',
                'account_code' => $account_code,
                'type_id' => '16',
                'level' => '4',
                'parent_id' => '24',
                'ar_name' => '',
                'en_name' => '',
                'description' => 'حساب عميل',
                'payable_receivable' => '1',
                'editable' => '0',
                'currency_id' => '1',
                'is_active' => '1',
                'is_visable_in_COA' => '0',
                'accountable_id' => $customer->id,
                'accountable_type' => 'customer',
                'create_by_user_id' => '1'
            ];

        $account = Account::create($account_items);
        $customer = Person::find($customer->id)->update(['customer_account_id' => $account->id]);


        return 1;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request)

    {

        if ($request->has('pur_itemsPerPage')) {
            $invoices  =  Invoice::where('customer_id', $request->id)->orderBy('id', 'DESC')->paginate($request->pur_itemsPerPage != -1 ? $request->pur_itemsPerPage : '', ['*'], 'pur_page');
            return ['invoices' => $invoices];
        }

        if ($request->has('receipt_itemsPerPage')) {

            $receipts  =  Receipt::where('person_id', $request->id)->orderBy('id', 'DESC')->paginate($request->receipt_itemsPerPage != -1 ? $request->receipt_itemsPerPage : '', ['*'], 'receipt_page');
            return ['receipts' => $receipts];
        }


        $customer = DB::table('people')->find($request->id);
        //return $customer;


        $balance = 0;
        $account = DB::table('accounts')->where('accountable_id', $request->id)->where('accountable_type', 'customer')->get();

        $transactions = DB::table('transactions')->where('account_id', $account[0]->id)->get();

        foreach ($transactions as $transaction) {
            $balance += $transaction->credit - $transaction->debit;
        }

        $invoices  =  Invoice::where('customer_id', $request->id)->get();
        $invoices_count = $invoices->count();
        $total_amount = 0;
        $total_amount_with_maturity_date = 0;
        $paid_amount = 0;
        $paid_amount_with_maturity_date = 0;

        foreach ($invoices as $invoice) {
            $total_amount += $invoice->total_amount;
            $supp_bills = DB::table('supplemental_billings')->where('bill_id', $invoice->id)->where('bill_type_id', 1)->get();
            if ($invoice->maturity_date <  date('Y-m-d') && $invoice->maturity_date != 5) {
                $total_amount_with_maturity_date +=  $invoice->total_amount;
                $paid_amount_with_maturity_date +=  $invoice->paid_amount;
                foreach ($supp_bills as $supp_bill) {
                    $paid_amount_with_maturity_date += $supp_bill->amount;
                }
            }
            $paid_amount += $invoice->paid_amount;
            foreach ($supp_bills as $supp_bill) {
                $paid_amount += $supp_bill->amount;
            }
        }




        $remain_amount = $total_amount - $paid_amount;
        $arrears = $total_amount_with_maturity_date - $paid_amount_with_maturity_date;


        return
            [
                'remain_amount' => $remain_amount,
                'total_amount' => $total_amount,
                'arrears' => $arrears,
                'customer' => $customer,
                'invoices_count' => $invoices_count,
                'balance' => $balance,

            ];
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $request->id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        Person::find($request->id)->update($request->all());
        return response()->json(['types' => Person::all()], 200);
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)

    {


        Person::where('id', $request->person_id)->delete();
        return $this->index($request);
    }
}
