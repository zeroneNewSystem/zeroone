<?php


namespace App\Modules\Admin\Invoices\Models;


use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Invoice extends Model
{
    protected $table = "bills";
    protected $guarded = ['id'];
    use HasFactory;
    public function invoice_details(){
        return $this->hasMany(InvoiceDetail::class,'bill_id'); 
    }
    
}
