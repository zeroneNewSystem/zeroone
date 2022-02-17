<?php


namespace App\Modules\Admin\BillReturns\Models;

use App\Modules\Admin\people\Models\Person;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BillReturn extends Model
{
    protected $guarded = ['id'];
    use HasFactory;
    public function person()
    {
        return $this->belongsTo(Person::class,'person_id', 'id');
    }
    
    

    
}
