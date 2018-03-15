<?php

namespace App\Http\Controllers\api;

use App\Http\Resources\QuestionResource;
use App\Http\Resources\QuestionResourceCollection;
use App\Question;
use App\Quiz;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Http\Response;
use Psy\Exception\ErrorException;
use Illuminate\Support\Facades\Redis;

class QuestionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Quiz $quiz)
    {
        return new QuestionResourceCollection($quiz->questions()->paginate(), Response::HTTP_OK);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, Quiz $quiz)
    {
        $quiz->questions()->create($request->all());

        return new QuestionResourceCollection($quiz->questions()->paginate(), Response::HTTP_CREATED);
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Quiz $quiz, Question $question)
    {
        $quiz->questions()->find($question->id)->update($request->all());

        return new QuestionResource($quiz->questions()->find($question->id)->paginate(), Response::HTTP_CREATED);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Quiz $quiz, Question $question)
    {
        $quiz->questions()->find($question->id)->delete();

        return response('', Response::HTTP_NO_CONTENT);
    }


    /**
     * @param Request $request
     * @param Quiz $quiz
     * @param Question $question
     * @return QuestionResourceCollection
     */
    public function attempt(Request $request, Quiz $quiz, Question $question)
    {
        $attempts = \DB::table('users_quizzes_questions_answers')->where('user_id', \Auth::user()->id)
            ->where('quiz_id', $quiz->id)->where('question_id', $question->id)->get();

        if (count($attempts) > 0
        ) {
            return response('attempt already recorded', Response::HTTP_BAD_REQUEST);
        }

        \Auth::user()->attempted_quizzes()->attach($quiz->id, ['question_id' => $question->id, 'answer_id' => $request->get('answer_id')]);

        return new QuestionResourceCollection(\Auth::user()->attempted_answers()
            ->wherePivot('quiz_id', $quiz->id)->wherePivot('question_id', $question->id)->get(), Response::HTTP_CREATED);
    }


}
