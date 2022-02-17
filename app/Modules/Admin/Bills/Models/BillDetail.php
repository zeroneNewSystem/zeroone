<?php
namespace App\Modules\Admin\Bills\Models;


use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BillDetail extends Model
{
    protected $table = "bill_details";
    use HasFactory;
    protected $guarded = ['id'];
    public $timestamps = false;


    

}
