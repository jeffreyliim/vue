<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['middleware'=>'auth:api'],function(){
    Route::resource('quiz', '\App\Http\Controllers\api\QuizController');
    Route::resource('quiz.questions', '\App\Http\Controllers\api\QuestionController');
    Route::resource('quiz.questions.answers', '\App\Http\Controllers\api\AnswerController');

    Route::post('quiz/{quiz}/questions/{question}/attempt','\App\Http\Controllers\api\QuestionController@attempt')
    ->name('quiz.questions.attempt');

});