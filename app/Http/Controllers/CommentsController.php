<?php

namespace App\Http\Controllers;

use App\Comment;
use App\Http\Controllers\api\ApiCommentsController;
use App\Http\Resources\CommentsResource;
use App\Http\Resources\CommentsResourceCollection;
use App\Post;
use Illuminate\Http\Request;
use Mockery\Exception;

class CommentsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param Post $post
     * @return \Illuminate\Http\Response
     */
    public function index(Post $post)
    {
        $apiCommentsController = new ApiCommentsController();

        return $apiCommentsController->index($post);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @param Post $post
     * @param Comment $comment
     * @return \Illuminate\Http\Response
     */
    public function create(Post $post)
    {
        return view('posts.comments.create', compact('post'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Post $post
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Post $post, Request $request)
    {
        $apiCommentsController = new ApiCommentsController();

        return $apiCommentsController->store($post, $request);
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param Post $post
     * @param Comment $comment
     * @return \Illuminate\Http\Response
     */
    public function edit(Post $post, Comment $comment)
    {
        //check if comment belongs to post
        if (!$post->comments()->find($comment->id)) {
            return abort(404, "Comment doesn't exist");
        }

        return view('posts.comments.edit', compact('post', 'comment'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param Post $post
     * @param Comment $comment
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Post $post, Comment $comment)
    {
        $apiCommentsController = new ApiCommentsController();

        return $apiCommentsController->update($post, $comment, $request);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
