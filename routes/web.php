<?php

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


Route::get('post/create', 'PostController@create');
Route::get('posts', 'PostController@getAllPosts');
Route::post('post/store', 'PostController@store');

Route::get('skills', function () {
   return ['Laravel ', 'Vue', 'Php', 'JavaScript', 'html', 'css'];
});