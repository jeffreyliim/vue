<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Passport\HasApiTokens;
use Laravel\Scout\Searchable;

/**
 * App\User
 *
 * @property \Carbon\Carbon|null $created_at
 * @property string $email
 * @property int $id
 * @property string $name
 * @property string $password
 * @property string|null $remember_token
 * @property \Carbon\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection|\Laravel\Passport\Client[] $clients
 * @property-read \Illuminate\Notifications\DatabaseNotificationCollection|\Illuminate\Notifications\DatabaseNotification[] $notifications
 * @property-read \Illuminate\Database\Eloquent\Collection|\Laravel\Passport\Token[] $tokens
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User wherePassword($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User whereRememberToken($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User whereUpdatedAt($value)
 * @mixin \Eloquent
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Post[] $posts
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Video[] $videos
 * @property-read \App\Role $roles
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\User[] $attempted_answers
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Question[] $attempted_questions
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Quiz[] $attempted_quizzes
 * @property-read \App\Role $role
 */
class User extends Authenticatable
{
    use Notifiable, HasApiTokens, Searchable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password', 'isAdmin'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function posts()
    {
        return $this->hasMany(Post::class);
    }

    public function role()
    {
        return $this->hasOne(Role::class);
    }

    public function isAdmin()
    {
        return $this->role()->first()->isAdmin;
    }

    public function attempted_quizzes()
    {
        return $this->belongsToMany(Quiz::class, 'users_quizzes_questions_answers', 'user_id', 'quiz_id');
    }

    public function attempted_questions()
    {
        return $this->belongsToMany(Question::class, 'users_quizzes_questions_answers', 'user_id', 'question_id')
            ->withPivot('quiz_id');
    }

    public function attempted_answers()
    {
        return $this->belongsToMany(Answer::class, 'users_quizzes_questions_answers', 'user_id', 'answer_id')
            ->withPivot('quiz_id', 'question_id');
    }

}
