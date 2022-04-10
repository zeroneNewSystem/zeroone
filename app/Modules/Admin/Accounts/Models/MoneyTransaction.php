<?php

namespace App\Modules\Admin\Accounts\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MoneyTransaction extends Model
{
    protected $guarded = ['id'];
    use HasFactory;
}
