<?php

namespace App\Modules\Admin\Accounts\Models;

use App\Models\AccountType;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Account extends Model
{
    use HasFactory;

    public function type()
    {
        return $this->belongsTo(AccountType::class,'type_id','type_id');
    }
}
