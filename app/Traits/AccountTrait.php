<?php

namespace App\Traits;

use App\Http\Controllers\Controller;
use App\Modules\Admin\Accounts\Models\Account;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


trait AccountTrait
{


    public function showAccounts($type)
    {
        // $accounts = DB::select("
        //     SELECT * FROM accounts as acc
        //     WHERE acc.type_code LIKE '$type%' 
        //     AND LENGTH(acc.account_code) >2 
        //     AND NOT EXISTS (
        //         SELECT 1
        //         FROM
        //             accounts
        //         WHERE type_code LIKE 'acc.type%'
        //         AND LENGTH(account_code) > LENGTH(acc.account_code)
        //     ) 
        // ");
        // return  $accounts;
    }

    
}
