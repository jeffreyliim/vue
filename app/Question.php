<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * App\Question
 *
 * @property int $id
 * @property string $name
 * @property string|null $image
 * @property \Carbon\Carbon|null $created_at
 * @property \Carbon\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Answer[] $answers
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Answer[] $attempted_answers
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Quiz[] $attempted_quizzes
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\User[] $attempted_users
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Question whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Question whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Question whereImage($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Question whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Question whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class Question extends Model
{
    protected $fillable = [
        'name'
    ];

    protected $hidden = [
        'created_at', 'updated_at'
    ];

    public function attempted_quizzes()
    {
        return $this->belongsToMany(Quiz::class, 'users_quizzes_questions_answers', 'question_id', 'quiz_id')
            ->withPivot('user_id');
    }

    public function attempted_users()
    {
        return $this->belongsToMany(User::class, 'users_quizzes_questions_answers', 'question_id', 'user_id');
    }

    public function attempted_answers()
    {
        return $this->belongsToMany(Answer::class, 'users_quizzes_questions_answers', 'question_id', 'answer_id')
            ->withPivot('user_id');
    }

    public function quiz()
    {
        return $this->belongsTo(Quiz::class, 'quiz_id');
    }
    public function answers()
    {
        return $this->hasMany(Answer::class);
    }


}
