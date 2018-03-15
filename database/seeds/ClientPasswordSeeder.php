<?php

use Illuminate\Database\Seeder;

class ClientPasswordSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('oauth_clients')->insert([
            'name' => 'VueLaravel Password Grant Client',
            'secret' => 'jHnXBdlUbWB6CnVwijqL8A4YnAjkHPVQAxY9RUsj',
            'redirect' => 'http://localhost',
            'personal_access_client' => 0,
            'password_client' => 1,
            'revoked' => 0,
            'created_at' => '2018-03-11 22:45:36',
            'updated_at' => '2018-03-11 22:45:36'
        ]);
    }
}
