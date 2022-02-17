<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bill extends Model
{
    
    protected $guarded = ['id'];
    use HasFactory;
    public function details(){
        
        return $this->hasMany(PurchaseDetail::class,'bill_id'); 
    }   
    public function person()
    {
        return $this->belongsTo(Person::class,'supplier_id', 'id');
    }
    
    
}
