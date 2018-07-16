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
use Illuminate\Support\Facades\Redis;

Auth::routes();

Route::get('/react/logout', function () {
    Auth::logout();
    return redirect()->to('/react/login');
});

Route::get('test', function () {
    return \App\Quiz::all();
});
Route::get('/', function () {
    Redis::incr('laravel:pageview');
    return view('welcome');
//    return app()->make('redis');
});

Route::get('user', function (Request $request) {
    return $request->user();
});

Route::get('redis', '\App\Http\Controllers\RedisController@redis');


Route::get('/home', 'HomeController@index')->name('home');
Route::resource('posts', PostsController::class);



Route::group(['middleware' => 'auth'], function () {
    Route::get('checkAdmin', function () {
        return Auth::user()->isAdmin();
    });

    Route::resource('quiz.question', QuizController::class);
    /*
     * this route is used as GET just for testing but the event should be fired in a POST request
     * in order for the data to be pushed to pusher, which laravel echo takes the data
     * and updates it on the front end in real time.
     * */
    Route::get('post-user', function () {
        event(new \App\Events\UsersWasChanged(\App\User::all()));
    });
    Route::get('user', function () {
        return \App\User::all();
    });

    Route::post('mail', 'EmailController@send')->name('mail.send');

    Route::resource('posts.comments', CommentsController::class);

    Route::get('posts/create/search', 'PostsController@search')->name('posts.search');

    Route::post('posts/file', 'PostsController@fileUpload')->name('posts.file.upload');
});





/* * * * * * * * * * * * * * * * REACT ROUTES * * * * * * * * * * * * * * * * * * * *
 * this route allows the react dom to render its own routes instead of listening
 * to laravel's web routes
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

Route::get('/react/{path?}', function () {
    return view('react.create');
})->where('path', '.*');

Route::resource('react', ReactController::class);

