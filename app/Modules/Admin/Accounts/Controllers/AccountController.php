<?php

namespace App\Modules\Admin\Accounts\Controllers;

use App\Exports\AccountsExport;
use App\Http\Controllers\Controller;
use App\Http\Resources\AccountResource;
use App\Modules\Admin\Accounts\Models\Account;
use App\Modules\Admin\Accounts\Models\MoneyTransaction;
use App\Modules\Admin\Accounts\Models\Transaction;
use App\Modules\Admin\people\Models\Person;
use App\Traits\AccountTrait;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Maatwebsite\Excel\Facades\Excel;

class AccountController extends Controller
{
    use AccountTrait;



    public function showAccountsByType(Request $request, $type)
    {
        return response()->json(['accounts' => $this->showAccounts($type)], 200);
    }


    /**
     * showAccountsByType
     *
     * @param  mixed $request
     * @return void
     */










    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function money_moves_create(Request $request)
    {

        $keys =  array_keys($request->all());

        $array = [];
        foreach ($keys as $key) {
            $array[$key] = $this->showAccounts($key);
        }

        return  $array;


        /*
        $type_id 

        1- money_moves
        2- add_capital
        3- fixed_asset_depreciation
        4- owner_withdraw
        5- distribute_profits
        6-

        
        */

        $from_accounts = $this->showAccounts($request->from_account_type);
        $to_accounts = $from_accounts;
        if ($request->from_account_type != $request->to_account_type)
            $to_accounts = $this->showAccounts($request->to_account_type);

        return [
            'from_accounts' => $from_accounts,
            'to_accounts' => $to_accounts,
        ];
    }
    public function journal_entries_index()
    {


        $journal_entries =

            DB::table('transactions')
            ->select(
                'transactions.*',
                'accounts.ar_name',
                'accounts.account_code',
            )

            ->leftjoin('accounts', 'transactions.account_id', '=', 'accounts.id')
            ->get();

        $documents = [];


        foreach ($journal_entries as $journal_entry) {


            if (substr($journal_entry->account_code, 0, 4) == '2101') {
                $journal_entry->ar_name = 'الدائنون';
                $journal_entry->account_code = '2101';
                $journal_entry->detail =  Person::where('supplier_account_id', $journal_entry->account_id)->first()->name;
            }
            if (substr($journal_entry->account_code, 0, 4) == '1103') {
                $journal_entry->detail =  Person::where('customer_account_id', $journal_entry->account_id)->first()->name;
                $journal_entry->ar_name = 'المدينون';
                $journal_entry->account_code = '1103';
            }

            if ($journal_entry->document_type_id == 1)
                $name = 'فاتورة مشتريات';
            if ($journal_entry->document_type_id == 2)
                $name = 'فاتورة مبيعات';

            $documents[$journal_entry->document_type_id . '.' . $journal_entry->document_id]['name'] = $name;
            $documents[$journal_entry->document_type_id . '.' . $journal_entry->document_id]['id'] = $journal_entry->id;
            $documents[$journal_entry->document_type_id . '.' . $journal_entry->document_id]['date'] = date("Y-m-d", strtotime($journal_entry->created_at));

            $documents[$journal_entry->document_type_id . '.' . $journal_entry->document_id]['accounts'][] =  $journal_entry;
        }



        return (array) $documents;
    }

    public function money_moves_index()
    {
        $money_moves =



            DB::table('transactions')
            ->select(
                'transactions.*',
                'accounts.ar_name',
                'accounts.account_code',
            )
            ->where('document_type_id', '<', 0)
            ->leftjoin('accounts', 'transactions.account_id', '=', 'accounts.id')
            ->get();



        foreach ($money_moves as &$money_move) {
            $money_move->amount = $money_move->debit == 0 ? $money_move->credit : $money_move->debit;

            if ($money_move->credit != 0) {
                $money_move->from_account_id = $money_move->account_id;
                $money_move->from_account_ar_name = $money_move->ar_name;
                $money_move->from_account_code = $money_move->account_code;
            }
            if ($money_move->debit != 0) {
                $money_move->to_account_id = $money_move->account_id;
                $money_move->to_account_ar_name = $money_move->ar_name;
                $money_move->to_account_code = $money_move->account_code;
            }
        }
        return $money_moves;
    }
    public function money_moves_store(Request $money_move)
    {

        if ($money_move['amount'] <= 0)
            return 'amount <= 0';

        $money_transaction = MoneyTransaction::create();


        $money_move = $money_move->all();

        $money_move['company_id'] = 1;
        $money_move['document_id'] = $money_transaction->id;
        $money_move['account_id'] = $money_move['from_account_id'];
        $money_move['credit'] = $money_move['amount'];
        Transaction::create($money_move);
        //--------------------------------------
        $money_move['account_id'] = $money_move['to_account_id'];
        $money_move['debit'] = $money_move['amount'];
        $money_move['credit'] = 0;
        Transaction::create($money_move);
    }
    public function index()
    {

        //$accounts = Account::orderBy('type_code')->get();

        $accounts = Account::with('type')->where('is_visable_in_COA', 1)->orderBy('account_code')->orderBy('id')->get();

        //return response()->json(['accounts' => $accounts], 200);
        return response()->json(['accounts' => AccountResource::collection($accounts)], 200);
        //

    }
    public function income_statements_index(Request $request)
    {
        $accounts = DB::table('transactions')
            ->select(
                'transactions.*',
                'accounts.ar_name',
                'accounts.account_code',
            );
        $accounts = $accounts->where('accounts.account_code', 'like', '5%');
        $accounts = $accounts->orwhere('accounts.account_code', 'like', '4%');

        if ($request->date_from)
            $accounts = $accounts->where('transactions.created_at', '>=', $request->date_from);
        if ($request->date_to)
            $accounts = $accounts->where('transactions.created_at', '<=', $request->date_to);

        $accounts = $accounts->leftjoin('accounts', 'transactions.account_id', '=', 'accounts.id')
            ->get();
        $summed_accounts = [];

        foreach ($accounts as &$account) {

            if (!array_key_exists($account->account_id, $summed_accounts)) {
                $summed_accounts[$account->account_id] = (array) $account;
                continue;
            }
            $summed_accounts[$account->account_id]['credit'] += $account->credit;
            $summed_accounts[$account->account_id]['debit']  += $account->debit;
        }
        $result=[];
        foreach ($summed_accounts as $summed_account) {
            $result[]= $summed_account;

        }

        return $result;
    }
    public function general_ledgers_index(Request $request)
    {





        $accounts = DB::table('transactions')
            ->select(
                'transactions.*',
                'accounts.ar_name',
                'accounts.account_code',
            );
        if ($request->date_from)
            $accounts = $accounts->where('transactions.created_at', '>=', $request->date_from);
        if ($request->date_to)
            $accounts = $accounts->where('transactions.created_at', '<=', $request->date_to);

        $accounts = $accounts->leftjoin('accounts', 'transactions.account_id', '=', 'accounts.id')
            ->get();

        $summed_accounts = [];



        foreach ($accounts as &$account) {
            if (substr($account->account_code, 0, 4) == '2101') {
                $account->ar_name = 'الدائنون';
                $account->account_code = '2101';
            }
            if (substr($account->account_code, 0, 4) == '1103') {
                $account->ar_name = 'المدينون';
                $account->account_code = '1103';
            }

            if (!array_key_exists($account->account_id, $summed_accounts)) {
                $summed_accounts[$account->account_id] = (array) $account;
                continue;
            }
            $summed_accounts[$account->account_id]['credit'] += $account->credit;
            $summed_accounts[$account->account_id]['debit']  += $account->debit;
        }

        $fathers = $summed_accounts;

        foreach ($summed_accounts as $summed_account) {

            $string = $summed_account['account_code'];
            $string = substr($string, 0, -2);

            while ($string != "") {

                $father =  DB::select("SELECT * from accounts WHERE account_code = " . $string);
                if (count($father) > 0) {
                    $father = (array) $father[0];
                    $father_index = $this->father_index($fathers, $father);
                    if ($father_index < 0) {
                        $father['debit'] = $summed_account['debit'];
                        $father['credit'] = $summed_account['credit'];
                        $fathers[] =  $father;
                    } else {
                        $fathers[$father_index]['debit']  += $summed_account['debit'];
                        $fathers[$father_index]['credit'] += $summed_account['credit'];
                    }
                }
                if (strlen($string) > 2)
                    $string = substr($string, 0, -2);
                if (strlen($string) == 1)
                    $string = "";
                if (strlen($string) == 2)
                    $string = substr($string, 0, -1);
            }

            //;
        }
        array_multisort(array_column($fathers, 'account_code'), SORT_ASC, $fathers);


        $buildTree = [];
        foreach ($fathers as $father) {

            if (strlen($father['account_code']) == 1) {
                $buildTree[] = $father;
                $this->buildTree($fathers, $buildTree, $father['account_code']);
            }
        }

        return  $buildTree;
    }
    function father_index(array $fathers, array $father)
    {

        foreach ($fathers as $key => $item) {
            if ($item['account_code'] == $father['account_code'])
                return $key;
        }

        return -1;
    }
    function buildTree(array &$elements, array &$new_array, $parent_account_code)
    {

        foreach ($elements as $element) {
            $account_code = $element['account_code'];
            $len  = 2;
            if (strlen($parent_account_code) == 1) $len  = 1;
            if ((strlen($account_code) == strlen($parent_account_code) + $len) &&   str_starts_with($account_code, $parent_account_code)) {
                $new_array[] = $element;

                $index = array_search($element, $elements);
                unset($elements[$index]);
                //dd($elements);
                $this->buildTree($elements, $new_array, $account_code);
            }
        }
    }


    public function export()
    {


        return Excel::download(new AccountsExport, 'accounts.xlsx');
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


        $request = $request->all();
        $request['company_id'] = 1;

        $request['create_by_user_id'] = 1;
        Account::create($request);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Account  $account
     * @return \Illuminate\Http\Response
     */
    public function show(Account $account)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Account  $account
     * @return \Illuminate\Http\Response
     */
    public function edit(Account $account)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Account  $account
     * @return \Illuminate\Http\Response
     */
    public function money_moves_update(Request $money_move)
    {
        if ($money_move['amount'] <= 0)
            return 'amount <= 0';


        $money_move = $money_move->all();



        $amount = $money_move['amount'];
        $from_account_id = $money_move['from_account_id'];
        $to_account_id = $money_move['to_account_id'];

        unset($money_move['amount']); //<---
        unset($money_move['ar_name']);
        unset($money_move['id']);
        unset($money_move['account_code']);
        unset($money_move['from_account_code']);
        unset($money_move['from_account_ar_name']);
        unset($money_move['from_account_id']); //<---
        unset($money_move['to_account_code']);
        unset($money_move['to_account_ar_name']);
        unset($money_move['to_account_id']); //<---


        $money_move['account_id']   = $from_account_id;
        $money_move['credit']       = $amount;
        $money_move['debit']        = 0;

        Transaction::where('document_id', $money_move['document_id'])
            ->where('document_type_id', '<', 0)
            ->where('credit', '>', 0)
            ->update($money_move);
        //--------------------------------------
        $money_move['account_id']   = $to_account_id;
        $money_move['debit']        = $amount;
        $money_move['credit']       = 0;
        Transaction::where('document_id', $money_move['document_id'])
            ->where('document_type_id', '<', 0)
            ->where('debit', '>', 0)
            ->update($money_move);
    }
    public function update(Request $request)
    {

        return Account::find($request->id)->update($request->all());
        //$request;
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Account  $account
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //


        $res = Account::where('id', $id)->forceDelete();


        return $res;
    }
    public function money_moves_destroy($id)
    {
        //


        MoneyTransaction::where('id', $id)->delete();
        $res = Transaction::where('document_id', $id)->where('document_type_id', '<', 0)->delete();



        return $res;
    }
    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Account  $account
     * @return \Illuminate\Http\Response
     */
    public function archive($id)
    {
        //


        $res = Account::where('id', $id)->delete();

        return $res;
    }
}
