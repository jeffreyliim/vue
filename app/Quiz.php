<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * App\Quiz
 *
 * @property int $id
 * @property string $category
 * @property string $name
 * @property \Carbon\Carbon|null $created_at
 * @property \Carbon\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Answer[] $attempted_answers
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Question[] $attempted_questions
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\User[] $attempted_users
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Quiz whereCategory($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Quiz whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Quiz whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Quiz whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Quiz whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class Quiz extends Model
{
    protected $fillable = [
        'category', 'name'
    ];

    protected $hidden = [
        'created_at', 'updated_at'
    ];

    public function attempted_answers()
    {
        return $this->belongsToMany(Answer::class, 'users_quizzes_questions_answers',
            'quiz_id', 'answer_id')
            ->withPivot('user_id', 'question_id');
    }

    public function attempted_questions()
    {
        return $this->belongsToMany(Question::class, 'users_quizzes_questions_answers',
            'quiz_id', 'question_id')
            ->withPivot('user_id');
    }

    public function attempted_users()
    {
        return $this->belongsToMany(User::class, 'users_quizzes_questions_answers',
            'quiz_id', 'user_id');
    }

    public function questions()
    {
        return $this->hasMany(Question::class);
    }
}
