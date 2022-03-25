<?php

use Illuminate\Support\Facades\Route;

/**
 * Created by PhpStorm.
 * User: Viktor
 * Date: 29.09.2019
 * Time: 17:50
 */





 
Route::group(["prefix" => "bills"], function () {

    Route::get('/', 'BillController@index');
    Route::get('/all', 'BillController@all');
    Route::get('/new', 'BillController@new');


    Route::get('/{id}', 'BillController@index');


    Route::get('/create', 'BillController@create');
    Route::post('/', 'BillController@store');
    
    Route::delete('/', 'BillController@destroy');
    Route::put('/', 'BillController@update');

    
    
    
});

Route::group(["prefix" => "purchase_returns"], function () {

    Route::get('/', 'BillController@index');
    Route::get('/all', 'BillController@all');
    Route::get('/{id}', 'BillController@index');


    Route::get('/create', 'BillController@create');
    Route::post('/', 'BillController@store');
    
    Route::delete('/', 'BillController@destroy');
    Route::put('/', 'BillController@update');

    
    
    
});

Route::group(["prefix" => "purchase_returns"], function () {

    Route::get('/', 'BillController@index');
    Route::get('/all', 'BillController@all');
    Route::get('/{id}', 'BillController@index');


    Route::get('/create', 'BillController@create');
    Route::post('/', 'BillController@store');
    
    Route::delete('/', 'BillController@destroy');
    Route::put('/', 'BillController@update');

    
    
    
});


