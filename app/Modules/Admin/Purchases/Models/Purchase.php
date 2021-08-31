<?php


namespace App\Modules\Admin\Purchases\Models;

use App\Models\PurchaseDetail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Purchase extends Model
{
    use HasFactory;
    public function purchase_details(){
        return $this->hasMany(PurchaseDetail::class); 
    }
    
}
