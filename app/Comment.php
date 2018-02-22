<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * App\Comment
 *
 * @property string $content
 * @property \Carbon\Carbon|null $created_at
 * @property int $id
 * @property int $post_id
 * @property \Carbon\Carbon|null $updated_at
 * @property-read \App\Post $post
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Comment whereContent($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Comment whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Comment whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Comment wherePostId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Comment whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class Comment extends Model
{
    protected $table = 'comments';

    protected $fillable = [
        'content'
    ];

    protected $hidden = [
        'created_at', 'updated_at'
    ];

    public function post()
    {
        return $this->belongsTo(Post::class, 'post_id');
    }
}
