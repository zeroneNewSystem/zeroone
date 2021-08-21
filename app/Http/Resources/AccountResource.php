<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\DB;

class AccountResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function hasChildreen($account_code)

    {
        //$lengthOfAccountID  = ceil(log10($account_code)); if id is number
        $lengthOfAccountID  = strlen($account_code); //if id is number
        $accounts = DB::select("
            SELECT * FROM accounts as acc
            WHERE acc.account_code LIKE '$account_code%' 
            AND LENGTH(acc.account_code) > $lengthOfAccountID
        ");
        if ($accounts) return true;
        return false;
    }
    public function hasTransaction($account_code)

    {
        $lengthOfAccountID  = ceil(log10($account_code));
        $accounts = DB::select("
            SELECT * FROM accounts as acc
            WHERE acc.account_code LIKE '$account_code%' 
            AND LENGTH(acc.account_code) > $lengthOfAccountID
        ");
        if ($accounts) return true;
        return false;
    }
    public function toArray($request)
    {
        return array_merge(
            parent::toArray($request),


            //check if this account was engaged in transaction!

            // test ['nib' =>  $this->hasChildreen($this->account_code)]
        );
        // return [
        //     'id' => $this->id,
        //     'description' =>  $this->description,
        //     'type' =>  $this->type,
        //     'nib' =>  $this->hasChildreen($this->account_code),

        // ];
    }
}
