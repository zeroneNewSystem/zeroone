<?php


namespace App\Modules\Admin\StockTakes\Models;

use App\Modules\Admin\people\Models\Person;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StockTake extends Model
{
    public $timestamps = false;
    protected $guarded = ['id'];
    use HasFactory;
    public function stock_details(){
        return $this->hasMany(StockDetail::class,'document_id'); 
    }
    public function person()
    {
        return $this->belongsTo(Person::class,'supplier_id', 'id');
    }
    
    
}
