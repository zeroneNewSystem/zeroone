<?php

namespace App\Modules\Admin\Accounts\Controllers;

use App\Exports\AccountsExport;
use App\Http\Controllers\Controller;
use App\Http\Resources\AccountResource;
use App\Modules\Admin\Accounts\Models\Account;
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
    public function index()
    {

        //$accounts = Account::orderBy('type_code')->get();
        $accounts = Account::with('type')->where('is_visable_in_COA',1)->orderBy('account_code')->orderBy('id')->get();

        //return response()->json(['accounts' => $accounts], 200);
        return response()->json(['accounts' => AccountResource::collection($accounts)], 200);
        //

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
