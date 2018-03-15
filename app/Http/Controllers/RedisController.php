<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redis;

class RedisController extends Controller
{
    public function __construct()
    {
        $this->storage = Redis::connection();
    }

    public function redis()
    {
        \DB::connection()->enableQueryLog();
        $result = \Cache::remember('user', 10, function () {
            return User::all();
        });
        $log = \DB::getQueryLog();
        print_r($log);
        return $result;

    }
}
