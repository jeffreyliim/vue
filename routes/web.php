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

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
Route::resource('posts', PostsController::class);

Route::group(['middleware' => 'auth'], function () {

    /*
     * this route is used as GET just for testing but the event should be fired in a POST request
     * in order for the data to be pushed to pusher, which laravel echo takes the data
     * and updates it on the front end in real time.
     * */
    Route::get('post-user',function(){
        event(new \App\Events\UsersWasChanged(\App\User::all()));
    });
    Route::get('user',function(){
        return \App\User::all();
    });

    Route::resource('posts.comments',CommentsController::class);

    Route::get('posts/create/search', 'PostsController@search')->name('posts.search');

    Route::post('posts/file', 'PostsController@fileUpload')->name('posts.file.upload');
});