<?php

namespace App\Modules\Admin\Accounts\Models;

use App\Models\AccountType;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes; //add this line


class Account extends Model
{
    protected $guarded = ['id'];
    use HasFactory;
    use SoftDeletes; //add this line
    protected $dates = [ 'deleted_at' ];

    public function type()
    {
        return $this->belongsTo(AccountType::class,'type_code','type_code');
    }
}
