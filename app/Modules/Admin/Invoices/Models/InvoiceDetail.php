<?php
namespace App\Modules\Admin\Invoices\Models;


use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class InvoiceDetail extends Model
{
    use HasFactory;
    protected $guarded = ['id'];
    public $timestamps = false;

}
