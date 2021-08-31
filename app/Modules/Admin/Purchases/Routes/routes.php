<?php

use Illuminate\Support\Facades\Route;

/**
 * Created by PhpStorm.
 * User: Viktor
 * Date: 29.09.2019
 * Time: 17:50
 */

Route::group(["prefix" => "purchases"], function () {

    Route::get('/', 'PurchaseController@index');


    Route::get('/create', 'PurchaseController@create');
    Route::post('/', 'PurchaseController@store');
    
    Route::delete('/', 'PurchaseController@destroy');
    Route::put('/', 'PurchaseController@update');

    
    
    
});
