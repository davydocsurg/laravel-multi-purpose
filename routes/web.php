<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/yyy',function(){
    return view('invoice');
});

Route::get('/slides',function(){
    return view('slides');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
Route::get('/authUser', 'ProfileController@authUserInfo');
// Route::get('/profileInfo', 'ProfileController@profileInfo');
Route::put('/updateInfo', 'ProfileController@updateProfile');

// Route::get('/{path}','HomeController@index')->where( 'path', '([A-z\d-/_.]+)?' );
Route::get('/{path}','HomeController@index')->where( 'path', '([A-z]+)?' );


