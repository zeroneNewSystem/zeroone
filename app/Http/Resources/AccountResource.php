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
    public function hasChildreen($account_id)

    {
        $lengthOfAccountID  = ceil(log10($account_id));
        $accounts = DB::select("
            SELECT * FROM accounts as acc
            WHERE acc.account_id LIKE '$account_id%' 
            AND LENGTH(acc.account_id) > $lengthOfAccountID
        ");
        if ($accounts) return true;
        return false;
    }
    public function hasTransaction($account_id)

    {
        $lengthOfAccountID  = ceil(log10($account_id));
        $accounts = DB::select("
            SELECT * FROM accounts as acc
            WHERE acc.account_id LIKE '$account_id%' 
            AND LENGTH(acc.account_id) > $lengthOfAccountID
        ");
        if ($accounts) return true;
        return false;
    }
    public function toArray($request)
    {
        return array_merge(
            parent::toArray($request),
            ['nib' =>  $this->hasChildreen($this->account_id)]
        );
        // return [
        //     'id' => $this->id,
        //     'description' =>  $this->description,
        //     'type' =>  $this->type,
        //     'nib' =>  $this->hasChildreen($this->account_id),

        // ];
    }
}
