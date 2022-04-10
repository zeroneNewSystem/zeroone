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
    Route::get('/getOne/', 'SupplierController@show'); 
    Route::get('/product/{id}', 'SupplierController@getByProductID'); 
    Route::post('/', 'SupplierController@store');
    Route::put('/', 'SupplierController@update');   
    Route::delete('/', 'SupplierController@destroy');


});
Route::group(["prefix" => "customers"], function () {
    Route::get('/', 'SupplierController@index'); 
    Route::get('/getOne/', 'SupplierController@show'); 
    Route::get('/product/{id}', 'SupplierController@getByProductID'); 
    Route::post('/', 'SupplierController@store');
    Route::put('/', 'SupplierController@update');   
    Route::delete('/', 'SupplierController@destroy');

});

Route::group(["prefix" => "people"], function () {
    Route::get('/', 'SupplierController@index'); 
    Route::get('/getOne/', 'SupplierController@show'); 
    Route::get('/product/{id}', 'SupplierController@getByProductID'); 
    Route::post('/', 'SupplierController@store');
    Route::put('/', 'SupplierController@update');   
    Route::delete('/', 'SupplierController@destroy');
});
