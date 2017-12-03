@extends('layouts.app')
@section('css')
    <link href="https://cdn.jsdelivr.net/npm/animate.css@3.5.1" rel="stylesheet" type="text/css">
@endsection
@section('content')
    <div class="container">
        {{-- :post is passing the data to the ['post'] props --}}
        <update-post :post="{{ $post }}" :user="{{$post->user}}"></update-post>
    </div>
@endsection
