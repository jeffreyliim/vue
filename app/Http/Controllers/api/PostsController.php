<?php

namespace App\Http\Controllers\api;

use App\Http\Resources\PostsResource;
use App\Http\Resources\PostsResourceCollection;
use App\Post;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Http\Response;

class PostsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param Post $post
     * @return Response
     */
    public function index(Post $post)
    {

        return new PostsResourceCollection($post->all(), Response::HTTP_OK);
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
     * @param Post $post
     * @return Response
     */
    public function store(Request $request, Post $post)
    {
        $post->create($request->all());

        return new PostsResourceCollection($post->all(), Response::HTTP_CREATED);
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
     * @param Post $post
     * @return Response
     * @internal param int $id
     */
    public function update(Request $request, Post $post)
    {
        $post->update($request->all());

        return new PostsResource($post, Response::HTTP_OK);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Post $post
     * @return Response
     * @internal param int $id
     */
    public function destroy(Post $post)
    {
        $post->delete();

        return response()->json(null);
    }
}
