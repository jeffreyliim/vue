@extends('layouts.app')
@section('css')
    <link rel="stylesheet" href="{{ mix('css/quiz.css') }}">
@endsection
@section('content')
    <div class="container">
        <div class="col-sm-4 col-sm-offset-4">
            <div class="your-clock"></div>
        </div>
        <quiz :quiz_="{{ $quiz }}" :questions_answers="{{ $quiz->questions()->with('answers')->get() }}"></quiz>
    </div>
@endsection

