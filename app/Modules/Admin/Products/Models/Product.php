<?php

namespace App\Modules\Admin\Products\Models;

use App\Models\Tax;
use App\Modules\Admin\Purchases\Models\Purchase;
use App\Modules\Admin\Purchases\Models\PurchaseDetail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Product extends Model
{


    
    

    protected $guarded = ['id'];
    use HasFactory;

    function purchases(){
        return $this->hasMany(PurchaseDetail::class);
    }

    function sum(){
        
        return $this->purchases()
            ->selectRaw('
        sum(sum_quantity_in_minor_unit) as sum_quantity_in_minor_unit,
        
        product_id')
            ->groupBy(['product_id']);
    

    }




    public function groups()
    {
        return $this->belongsToMany(PrdctGroup::class, 'prdct_groups_products');
        //return $this->hasMany(PrdctGroupsProduct::class);
    }
    public function prdct_group_ids()
    {
        return $this->groups()->pluck('id');
    }

    // public function prdct_units(){
    //     
    // }
    public function units()
    {
        return $this->belongsToMany(PrdctUnit::class, 'prdct_units_products')
            ->withPivot(["contains", "bought_price", "soldprice", "barcode","id"]);
        //return $this->hasMany(PrdctUnitsProduct::class);
    }

    public function type(){
        return $this->BelongsTo(PrdctType::class,'prdct_type_id');
    }
    public function form(){
        return $this->BelongsTo(PrdctForm::class,'prdct_form_id');
    }
    public function tax(){
        return $this->BelongsTo(Tax::class,'soldtax');
    }
    public function select(){
        return PrdctForm::all();
    }


}
