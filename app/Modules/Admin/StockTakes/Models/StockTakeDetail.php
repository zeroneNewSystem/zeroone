<?php
namespace App\Modules\Admin\StockTakes\Models;
    

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StockTakeDetail extends Model
{
    use HasFactory;
    protected $guarded = ['id'];
    public $timestamps = false;

}
