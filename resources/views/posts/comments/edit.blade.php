@extends('layouts.app')
@section('content')
    <div class="container">
        <div class="panel panel-default">
            <div class="panel-heading">Edit Comment</div>
            <div class="panel-body">
                <form method="post" action="{{ route('posts.comments.update', [$post,$comment]) }}">
                    {{ method_field('patch') }}
                    {{csrf_field()}}
                    <div class="form-group">
                        <textarea class="form-control" name="content" id="content" cols="30" rows="10"></textarea>
                    </div>

                    <button type="submit" class="btn btn-primary">Update</button>
                </form>
            </div>
        </div>
    </div>
@endsection