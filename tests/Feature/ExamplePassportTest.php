<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\DatabaseTransactions;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;


class ExamplePassportTest extends PassportTestCase
{
    use DatabaseTransactions;

    public function testRestrictedRoute()
    {
        $this->get('/api/user')
            ->assertStatus(200);
    }
}
