<?php

namespace App\Http\Controllers;

use App\Mail\EmailSent;


class EmailController extends Controller
{
    public function send()
    {
        $user = \Auth::user();
        return \Mail::to('jeffrey_lim95@hotmail.com')->send(new EmailSent($user));
    }
}
