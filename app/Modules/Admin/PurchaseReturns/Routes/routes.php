<?php

use Illuminate\Support\Facades\Route;

/**
 * Created by PhpStorm.
 * User: Viktor
 * Date: 29.09.2019
 * Time: 17:50
 */

Route::group(["prefix" => "returns"], function () {

    Route::get('/', 'BillReturnController@index');
    Route::get('/all', 'BillReturnController@all');
    Route::get('/create', 'BillReturnController@create');
    Route::get('/{id}', 'BillReturnController@one');
    
    
    Route::post('/', 'BillReturnController@store');
    
    Route::delete('/', 'BillReturnController@destroy');
    Route::delete('/sup_doc', 'BillReturnController@destroySupDoc');
    Route::put('/', 'BillReturnController@update');

    
    
    
});
