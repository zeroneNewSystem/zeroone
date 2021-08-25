<?php

use Illuminate\Support\Facades\Route;

/**
 * Created by PhpStorm.
 * User: Viktor
 * Date: 29.09.2019
 * Time: 17:50
 */

Route::group(["prefix" => "products"], function () {


    Route::delete('/', 'ProductController@destroy');
    Route::get('/', 'ProductController@index');
    Route::get('/create', 'ProductController@getCreate');
    Route::post('/create', 'ProductController@postCreate');
});

Route::group(["prefix" => "units"], function () {

    Route::get('/', 'PrdctUnitController@index');
    Route::post('/', 'PrdctUnitController@store');

    Route::put('/', 'PrdctUnitController@update');
    Route::delete('/{id}', 'PrdctUnitController@destroy');

    Route::get('/create', 'PrdctUnitController@getCreate');
});

Route::group(["prefix" => "types"], function () {

    Route::get('/', 'PrdctTypeController@index');
    Route::post('/', 'PrdctTypeController@store');

    Route::put('/', 'PrdctTypeController@update');
    Route::delete('/{id}', 'PrdctTypeController@destroy');

    Route::get('/create', 'PrdctTypeController@getCreate');
});

Route::group(["prefix" => "forms"], function () {

    Route::get('/', 'PrdctFormController@index');
    Route::post('/', 'PrdctFormController@store');

    Route::put('/', 'PrdctFormController@update');
    Route::delete('/{id}', 'PrdctFormController@destroy');

    Route::get('/create', 'PrdctFormController@getCreate');
});

Route::group(["prefix" => "groups"], function () {

    Route::get('/', 'PrdctGroupController@index');
    Route::post('/', 'PrdctGroupController@store');

    Route::put('/', 'PrdctGroupController@update');
    Route::delete('/{id}', 'PrdctGroupController@destroy');

    Route::get('/create', 'PrdctGroupController@getCreate');
});
