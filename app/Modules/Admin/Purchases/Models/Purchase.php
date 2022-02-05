<?php


namespace App\Modules\Admin\Purchases\Models;

use App\Modules\Admin\people\Models\Person;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Purchase extends Model
{
    protected $guarded = ['id'];
    use HasFactory;
    public function details(){
        
        return $this->hasMany(PurchaseDetail::class,'document_id'); 
    }   
    public function person()
    {
        return $this->belongsTo(Person::class,'supplier_id', 'id');
    }
    
    
}
