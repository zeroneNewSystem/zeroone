<?php


namespace App\Modules\Admin\Bonds\Models;

use App\Modules\Admin\people\Models\Person;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bond extends Model
{
    protected $guarded = ['id'];
    use HasFactory;
    public function person()
    {
        return $this->belongsTo(Person::class,'person_id', 'id');
    }
    
    

    
}
