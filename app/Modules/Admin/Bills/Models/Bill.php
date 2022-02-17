<?php


namespace App\Modules\Admin\Bills\Models;

use App\Modules\Admin\people\Models\Person;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bill extends Model
{
    protected $table = "bills";
    protected $guarded = ['id'];
    use HasFactory;
    public function details(){
        
        return $this->hasMany(BillDetail::class,'bill_id'); 
    }   
    public function person()
    {
        return $this->belongsTo(Person::class,'supplier_id', 'id');
    }
    
    
}
