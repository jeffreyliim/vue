@extends('layouts.app')
@section('css')
    <style>
        .fade-enter-active, .fade-leave-active {
            transition: opacity .5s
        }

        .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
        {
            opacity: 0
        }
    </style>
@endsection
@section('content')
    <div class="container">
        <update-post :post="{{ $post }}" :user="{{$post->user}}"></update-post>
    </div>
@endsection
