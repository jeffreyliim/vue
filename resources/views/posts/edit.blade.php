@extends('layouts.app')
@section('css')
    <link href="https://cdn.jsdelivr.net/npm/animate.css@3.5.1" rel="stylesheet" type="text/css">
@endsection
@section('content')
    <div class="container">
        {{-- :p is passing the data to the ['p'] props --}}
        <update-post :p="{{ $post }}"></update-post>
        <test-vue></test-vue>

    </div>

@endsection
