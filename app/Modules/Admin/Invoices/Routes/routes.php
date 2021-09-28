<?php

use Illuminate\Support\Facades\Route;

/**
 * Created by PhpStorm.
 * User: Viktor
 * Date: 29.09.2019
 * Time: 17:50
 */

Route::group(["prefix" => "invoices"], function () {

    Route::get('/', 'InvoiceController@index');
    Route::get('/{id}', 'InvoiceController@index');


    Route::get('/create', 'InvoiceController@create');
    Route::post('/', 'InvoiceController@store');
    
    Route::delete('/', 'InvoiceController@destroy');
    Route::put('/', 'InvoiceController@update');

    
    
    
});
