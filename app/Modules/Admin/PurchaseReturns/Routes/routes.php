<?php

use Illuminate\Support\Facades\Route;

/**
 * Created by PhpStorm.
 * User: Viktor
 * Date: 29.09.2019
 * Time: 17:50
 */

Route::group(["prefix" => "purchase_returns"], function () {

    Route::get('/', 'PurchaseReturnController@index');
    Route::get('/all', 'PurchaseReturnController@all');
    Route::get('/create', 'PurchaseReturnController@create');
    Route::get('/{id}', 'PurchaseReturnController@one');
    
    
    Route::post('/', 'PurchaseReturnController@store');
    
    Route::delete('/', 'PurchaseReturnController@destroy');
    Route::delete('/sup_doc', 'PurchaseReturnController@destroySupDoc');
    Route::put('/', 'PurchaseReturnController@update');

    
    
    
});
