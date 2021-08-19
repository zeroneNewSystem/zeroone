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
        $accounts = DB::select("
            SELECT * FROM accounts as acc
            WHERE acc.type_id LIKE '$type%' 
            AND LENGTH(acc.account_id) >2 
            AND NOT EXISTS (
                SELECT 1
                FROM
                    accounts
                WHERE type_id LIKE 'acc.type%'
                AND LENGTH(account_id) > LENGTH(acc.account_id)
            ) 
        ");
        return  $accounts;
    }

    
}
