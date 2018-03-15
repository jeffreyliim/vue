<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * App\Role
 *
 * @property \Carbon\Carbon|null $created_at
 * @property int $id
 * @property int $role
 * @property \Carbon\Carbon|null $updated_at
 * @property int $user_id
 * @property-read \App\User $user
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Role whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Role whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Role whereRole($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Role whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Role whereUserId($value)
 * @mixin \Eloquent
 * @property int $isAdmin
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Role whereIsAdmin($value)
 */
class Role extends Model
{
    /**
     * @var array
     */
    protected $fillable = [
        'isAdmin'
    ];

    /**
     * @var array
     */
    protected $hidden = [
        'created_at', 'updated_at'
    ];


    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function checkAdmin()
    {
        return $this->first()->isAdmin;
    }
}
