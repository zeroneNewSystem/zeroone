<?php

namespace App\Modules\Admin\people\Models;

use App\Modules\Admin\people\Models\Supplier;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes; //add this line


class Person extends Model
{

    protected $guarded = ['id'];
    
    use HasFactory;
    
    protected $dates = [ 'deleted_at' ];

    public function supplier()
    {
        return $this->hasOne(Supplier::class,'type_code','type_code');
    }
}
