<?php

use Illuminate\Database\Seeder;

class QuizSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\Quiz::create([
            'category' => 'cat1',
            'name' => 'test1'
        ]);
        \App\Quiz::create([
            'category' => 'cat2',
            'name' => 'test2'
        ]);
    }
}
