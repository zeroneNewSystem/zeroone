<?php
use Illuminate\Support\Facades\Route;
/**
 * Created by PhpStorm.
 * User: Viktor
 * Date: 29.09.2019
 * Time: 17:50
 */

Route::group(["prefix" => "accounts"], function() {

    
    Route::get('/','AccountController@index');
    Route::get('/types','AccountTypeController@index');
    Route::get('/type/{type}','AccountController@showAccountsByType');//accounts started with
    Route::post('/create','AccountController@postCreate');
});
