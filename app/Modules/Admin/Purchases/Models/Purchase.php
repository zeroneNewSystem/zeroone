<?php


namespace App\Modules\Admin\Purchases\Models;


use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Purchase extends Model
{
    protected $guarded = ['id'];
    use HasFactory;
    public function purchase_details(){
        return $this->hasMany(PurchaseDetail::class,'document_id'); 
    }
    
}
