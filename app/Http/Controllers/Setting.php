<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class Setting extends Controller
{
    //
    public function store(){
        app('valuestore')->put('EUR', 20);
    }
    
}
