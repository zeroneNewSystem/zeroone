<?php

namespace App\Modules\Admin\people\Models;


use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes; //add this line


class Supplier extends Model
{
    protected $guarded = ['id'];
    use HasFactory;
    
    protected $dates = [ 'deleted_at' ];

    public function person()
    {
        return $this->belongsTo(Person::class);
    }

    

}
