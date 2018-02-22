<?php

namespace App\Http\Controllers;

use App\Http\Requests\PostRequest;
use App\Http\Resources\PostsResource;
use App\Http\Resources\PostsResourceCollection;

use App\Post;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Storage;

class PostsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return new PostsResourceCollection(Post::paginate(), Response::HTTP_OK);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('posts.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'post_content' => 'required',
            'country' => 'required'
        ]);
        \Auth::user()->posts()->create($request->all());

//        return response(new PostsResource($post), 201);
        return redirect()->route('posts.create')->with('success', 'New post uploaded');
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return \Auth::user()->posts()->findOrFail($id)->load('user');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $post = \Auth::user()->posts()->findOrFail($id)->load('user');
        return view('posts.edit', compact('post'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function update(PostRequest $request, Post $post)
    {
        $post->update($request->all());
        return response(new PostsResource($post->load('user')), 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Post $post)
    {
        $post->delete();
        return response(null, 204);
    }

    /**
     * @param Request $request
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function search(Request $request)
    {
        return Post::search($request->get('search'))->get();
    }

    public function fileUpload(Request $request)
    {
        return Storage::disk('local')->put('pictures', $request->file('file'));
    }
}
