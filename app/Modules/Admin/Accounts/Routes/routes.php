<?php

use Illuminate\Support\Facades\Route;

/**
 * Created by PhpStorm.
 * User: Viktor
 * Date: 29.09.2019
 * Time: 17:50
 */

Route::group(["prefix" => "accounts"], function () {



    Route::get('/', 'AccountController@index');
    Route::post('/', 'AccountController@store');
    Route::post('/archive/{id}', 'AccountController@archive');

    Route::get('/cashAndBanks', 'AccountController@cashAndBanks');

    Route::delete('/{id}', 'AccountController@destroy');
    Route::put('/', 'AccountController@update');

    Route::get('/types', 'AccountTypeController@index');
    Route::get('/export', 'AccountController@export');
    Route::get('/type/{type}', 'AccountController@showAccountsByType'); //accounts started with
    Route::post('/create', 'AccountController@postCreate');
});
