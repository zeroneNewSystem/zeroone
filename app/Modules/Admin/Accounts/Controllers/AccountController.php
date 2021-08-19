<?php

namespace App\Modules\Admin\Accounts\Controllers;


use App\Http\Controllers\Controller;
use App\Http\Resources\AccountResource;
use App\Modules\Admin\Accounts\Models\Account;
use App\Traits\AccountTrait;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

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

        $accounts = Account::with('type')->get();


        //return response()->json(['accounts' => $accounts], 200);
        return response()->json(['accounts' => AccountResource::collection($accounts)], 200);
        //

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
        //
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
    public function update(Request $request, Account $account)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Account  $account
     * @return \Illuminate\Http\Response
     */
    public function destroy(Account $account)
    {
        //
    }
}
