<?php

namespace App\Traits;

use App\Http\Controllers\Controller;
use App\Modules\Admin\Accounts\Models\Account;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


trait AccountTrait
{
    public function cashAndBanks()
    {
        $accounts = DB::select(
            "select ac.* from `accounts` " .
                "as `ac` where LENGTH(account_code) > 2 and ac.account_code LIKE '1101%' " .
                "and NOT EXISTS (SELECT 1 FROM accounts WHERE account_code LIKE CONCAT(ac.account_code,'%') AND LENGTH(account_code) > LENGTH(ac.account_code))" .
                "or (" .
                " ac.account_code LIKE '1102%' " .
                "and NOT EXISTS (SELECT 1 FROM accounts WHERE account_code LIKE CONCAT(ac.account_code,'%') AND LENGTH(account_code) > LENGTH(ac.account_code)))"
        );


        return ['accounts' => $accounts];
    }


    public function showAccounts($type_code)
    {



        $accounts = DB::select("select ac.* from 
            `accounts` as `ac` left join `account_types` 
            as `at` on `at`.`id` = `ac`.`type_id` 
            where LENGTH(account_code) > 2 and LENGTH(type_code) > 2 
            and is_visable_in_COA = 1 
            and at.type_code LIKE '$type_code%' 
            and NOT EXISTS (SELECT 1 FROM accounts WHERE account_code LIKE CONCAT(ac.account_code,'%') 
            AND LENGTH(account_code) > LENGTH(ac.account_code))");




        //$accounts =  DB::table('accounts')->where('LENGTH(name) > 50')
        // $accounts =  DB::table('accounts')
        //     ->whereRaw('LENGTH(account_code) > 2')
        //     ->rightJoin('account_types as at', 'at.id', '=', 'accounts.type_id')
        //     ->whereRaw('LENGTH(type_code) > 2')
        //     ->whereRaw("at.type_code LIKE '$type_code%'")
        //     ->whereRaw("NOT EXISTS (SELECT 1 FROM account_types WHERE type_code LIKE 'at.type_code%' AND LENGTH(type_code) > LENGTH(at.type_code)")->get();


        // DB::table('users')
        // ->leftJoin('posts', 'users.id', '=', 'posts.user_id')
        // ->get();





        return  $accounts;
    }
}
