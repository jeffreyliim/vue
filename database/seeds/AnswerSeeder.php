<?php

use Illuminate\Database\Seeder;

class AnswerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\Question::first()->answers()->create([
            'name' => 'answer 1_1',
            'correctness' => 0
        ]);

        \App\Question::first()->answers()->create([
            'name' => 'answer 1_2',
            'correctness' => 0
        ]);

        \App\Question::first()->answers()->create([
            'name' => 'answer 1_3',
            'correctness' => 1
        ]);

        \App\Question::first()->answers()->create([
            'name' => 'answer 1_4',
            'correctness' => 0
        ]);

        \App\Question::find(2)->answers()->create([
            'name' => 'answer 2_1',
            'correctness' => 1
        ]);

        \App\Question::find(2)->answers()->create([
            'name' => 'answer 2_2',
            'correctness' => 0
        ]);

        \App\Question::find(2)->answers()->create([
            'name' => 'answer 2_3',
            'correctness' => 0
        ]);

        \App\Question::find(2)->answers()->create([
            'name' => 'answer 2_4',
            'correctness' => 0
        ]);

        \App\Question::find(3)->answers()->create([
            'name' => 'answer 3_1',
            'correctness' => 1
        ]);

        \App\Question::find(3)->answers()->create([
            'name' => 'answer 3_2',
            'correctness' => 0
        ]);

        \App\Question::find(3)->answers()->create([
            'name' => 'answer 3_3',
            'correctness' => 0
        ]);

        \App\Question::find(3)->answers()->create([
            'name' => 'answer 3_4',
            'correctness' => 0
        ]);
    }
}
