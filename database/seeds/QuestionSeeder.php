<?php

use Illuminate\Database\Seeder;

class QuestionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\Quiz::first()->questions()->create([
            'name' => 'this is the first question for first quiz',
            'image' => 'images/css.png'
        ]);

        \App\Quiz::find(2)->questions()->createMany([
            ['name' => 'this is the first question for second quiz',
                'image' => 'images/css.png'],
            ['name' => 'this is the second question secondquiz',
                'image' => 'images/css.png'],
        ]);
    }
}
