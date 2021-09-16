<?php

namespace App\Modules\Admin\Accounts\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    protected $guarded = ['id'];
    use HasFactory;
    //use SoftDeletes; //add this line
    
}
