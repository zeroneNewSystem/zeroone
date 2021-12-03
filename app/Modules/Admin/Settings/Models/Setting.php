<?php

namespace App\Modules\Admin\Settings\Models;

use App\Models\SettingType;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes; //add this line


class Setting extends Model
{
    protected $guarded = ['id'];
    use HasFactory;
    use SoftDeletes; //add this line
    protected $dates = [ 'deleted_at' ];

    public function type()
    {
        return $this->belongsTo(SettingType::class,'type_code','type_code');
    }
}
