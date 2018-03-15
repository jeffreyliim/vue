<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * App\Answer
 *
 * @property int $id
 * @property int $question_id
 * @property string $name
 * @property int $correctness
 * @property \Carbon\Carbon|null $created_at
 * @property \Carbon\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Question[] $attempted_questions
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Quiz[] $attempted_quizzes
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\User[] $attempted_users
 * @property-read \App\Question $question
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Answer whereCorrectness($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Answer whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Answer whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Answer whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Answer whereQuestionId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Answer whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class Answer extends Model
{
    protected $fillable = [
        'name', 'correctness'
    ];

    protected $hidden = [
        'created_at', 'updated_at'
    ];

    public function attempted_quizzes()
    {
        return $this->belongsToMany(Quiz::class, 'users_quizzes_questions_answers', 'answer_id', 'quiz_id')
            ->withPivot('user_id', 'question_id');
    }

    public function attempted_questions()
    {
        return $this->belongsToMany(Question::class, 'users_quizzes_questions_answers', 'answer_id', 'question_id')
            ->withPivot('user_id', 'quiz_id');
    }

    public function attempted_users()
    {
        return $this->belongsToMany(User::class, 'users_quizzes_questions_answers', 'answer_id', 'user_id')
            ->withPivot('quiz_id', 'question_id');
    }

    public function question()
    {
        return $this->belongsTo(Question::class, 'question_id');
    }
}
