<?php

namespace App\Http\Controllers\api;

use App\Comment;
use App\Http\Resources\CommentsResource;
use App\Http\Resources\CommentsResourceCollection;
use App\Post;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Http\Response;

class ApiCommentsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param Post $post
     * @return Response
     */
    public function index(Post $post)
    {
        return new CommentsResourceCollection($post->comments()->paginate(), Response::HTTP_OK);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @param Post $post
     * @param Comment $comment
     * @return Response
     */
    public function create(Post $post, Comment $comment)
    {
        return view('posts.comments.show', compact('post', 'comment'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Post $post
     * @param  \Illuminate\Http\Request $request
     * @return Response
     */
    public function store(Post $post, Request $request)
    {
        $post->comments()->create($request->all());

        return response(new CommentsResource($post->load('comments')), 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show()
    {

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function edit()
    {

    }

    /**
     * Update the specified resource in storage.
     *
     * @param Post $post
     * @param Comment $comment
     * @param  \Illuminate\Http\Request $request
     * @return Response
     * @internal param int $id
     */
    public function update(Post $post, Comment $comment, Request $request)
    {
        $post->comments()->find($comment->id)->update($request->all());

        return new CommentsResourceCollection($post->comments()->paginate(), 201);
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
