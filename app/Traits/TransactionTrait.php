<?php

namespace App\Traits;

use App\Modules\Admin\Accounts\Models\Transaction;

trait TranstactionTrait
{
    /* amount = - debit + credit
         $account_id,
        $amount,
        $bill_id,
        $bill_type_id,
        $currency_code,
        $currency_rate
        */
    public function addTransactionEntry($request)
    {


        $account_id =Transaction::create([
                "company_id" => 1,
                "account_id" => "",
                "debit" => "",
                "credit" => "",
                "bill_id" => "",
                "bill_type_id" => "",
                "currency_code" => "",
                "currency_rate" => "",
                "description" => ""
            ]);
        return true;
    }
}
