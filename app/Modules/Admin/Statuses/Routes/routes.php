<?php

use Illuminate\Support\Facades\Route;

/**
 * Created by PhpStorm.
 * User: Viktor
 * Date: 29.09.2019
 * Time: 17:50
 */

Route::group(["prefix" => "receipt_statuses"], function () {

    Route::get('/', 'ReceiptController@index');
    Route::get('/all', 'ReceiptController@all');
    Route::get('/create', 'ReceiptController@create');
    Route::get('/{id}', 'ReceiptController@index');


    Route::post('/', 'ReceiptController@store');
    
    Route::delete('/', 'ReceiptController@destroy');
    Route::put('/', 'ReceiptController@update');

    
    
    
});
