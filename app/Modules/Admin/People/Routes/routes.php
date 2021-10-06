<?php

use Illuminate\Support\Facades\Route;

/**
 * Created by PhpStorm.
 * User: Viktor
 * Date: 29.09.2019
 * Time: 17:50
 */

Route::group(["prefix" => "suppliers"], function () {
    Route::get('/', 'SupplierController@index'); 
    Route::get('/{id}', 'SupplierController@show'); 
    Route::post('/', 'SupplierController@store');
    Route::put('/', 'SupplierController@update');   
    Route::delete('/', 'SupplierController@destroy');


});
Route::group(["prefix" => "customers"], function () {
    Route::get('/', 'CustomerController@index'); 
    Route::post('/', 'CustomerController@store');
    Route::put('/', 'CustomerController@update');   
    Route::delete('/', 'CustomerController@destroy');

});

Route::group(["prefix" => "people"], function () {
    Route::get('/', 'PersonController@index');
    Route::post('/', 'PersonController@store');
    Route::post('/archive/{id}', 'PersonController@archive');

    Route::delete('/{id}', 'PersonController@destroy');
    Route::put('/', 'PersonController@update');

    Route::get('/types', 'PersonTypeController@index');
    
    Route::get('/export', 'PersonController@export');
    Route::get('/type/{type}', 'PersonController@showpeopleByType'); //people started with
    Route::post('/create', 'PersonController@postCreate');
});
