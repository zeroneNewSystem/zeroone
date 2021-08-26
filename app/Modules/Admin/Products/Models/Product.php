<?php

namespace App\Modules\Admin\Products\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    
    use HasFactory;
    public function groups(){
        return $this->belongsToMany(PrdctGroup::class,'prdct_groups_products');
    }
    public function units(){
        return $this->belongsToMany(PrdctUnit::class,'prdct_units_products');
    }
}
