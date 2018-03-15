<?php

namespace App\Http\Controllers\api;

use App\Answer;
use App\Http\Resources\AnswerResource;
use App\Http\Resources\AnswerResourceCollection;
use App\Question;
use App\Quiz;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Http\Response;

class AnswerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Quiz $quiz, Question $question)
    {
        return new AnswerResourceCollection($quiz->questions()->find($question->id)->answers()->paginate(), Response::HTTP_OK);
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
    public function store(Request $request, Quiz $quiz, Question $question)
    {
        $quiz->questions()->find($question->id)->answers()->create($request->all());

        return new AnswerResourceCollection($quiz->questions()->find($question->id)->answers()->paginate(), Response::HTTP_CREATED);
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
    public function update(Request $request, Quiz $quiz, Question $question, Answer $answer)
    {
        $quiz->questions()->find($question->id)->answers()->find($answer->id)->update($request->all());

        return new AnswerResource($quiz->questions()->find($question->id)->answers()->paginate(), Response::HTTP_CREATED);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Quiz $quiz, Question $question, Answer $answer)
    {
        $quiz->questions()->find($question->id)->answers()->find($answer->id)->delete();

        return \response('', Response::HTTP_NO_CONTENT);
    }

}
