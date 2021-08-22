<?php

use Illuminate\Support\Facades\Route;

/**
 * Created by PhpStorm.
 * User: Viktor
 * Date: 29.09.2019
 * Time: 17:50
 */

Route::group(["prefix" => "products"], function () {


    Route::get('/', 'ProductController@index')->name('products.index');
    Route::get('/create', 'ProductController@getCreate');
    Route::post('/create', 'ProductController@postCreate');
});

Route::group(["prefix" => "units"], function () {


    Route::get('/', 'PrdctUnitController@index');
    Route::post('/', 'PrdctUnitController@create');

    Route::get('/create', 'PrdctUnitController@getCreate');
});
