<?php

use Illuminate\Support\Facades\Route;

/**
 * Created by PhpStorm.
 * User: Viktor
 * Date: 29.09.2019
 * Time: 17:50
 */

Route::group(["prefix" => "bonds"], function () {

    Route::get('/', 'BondController@index');
    Route::get('/all', 'BondController@all');
    Route::get('/create', 'BondController@create');
    Route::get('/{id}', 'BondController@one');
    
    
    Route::post('/', 'BondController@store');
    
    Route::delete('/', 'BondController@destroy');
    Route::delete('/sup_doc', 'BondController@destroySupDoc');
    Route::put('/', 'BondController@update');

    
    
    
});
