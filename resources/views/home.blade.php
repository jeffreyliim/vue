@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <passport-clients></passport-clients>
                <passport-authorized-clients></passport-authorized-clients>
                <passport-personal-access-tokens></passport-personal-access-tokens>
                <axios></axios>
                <posts></posts>
            </div>
        </div>
    </div>
@endsection

@section('scripts')
    <script>

    </script>
@endsection