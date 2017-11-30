<?php

use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\User::create([
            'name'=>'Jeffrey Lim',
            'email'=>'jlportfolio28858@gmail.com',
            'password'=>'$2y$10$B85APd2fh1jdimMxFGxR/eMoobNJRFLvPvp7rzZmCqxqBgf/nus8.',
        ]);
    }
}
