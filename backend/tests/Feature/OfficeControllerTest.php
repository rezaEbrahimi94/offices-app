<?php

namespace Tests\Feature;

use App\Models\Office;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

uses(RefreshDatabase::class);

it('returns a list of offices', function () {
    $office = Office::factory()->create();
    $response = $this->get('/api/offices');
    $response->assertStatus(200);
    $response->assertJsonCount(1);
    $response->assertJsonFragment(['name' => $office->name]);
});

it('returns a list of offices filtered by name', function () {
    $office1 = Office::factory()->create(['name' => 'Office A']);
    $office2 = Office::factory()->create(['name' => 'Office B']);
    $response = $this->get('/api/offices?name=Office A');
    $response->assertStatus(200);
    $response->assertJsonCount(1);
    $response->assertJsonFragment(['name' => 'Office A']);
});

it('returns a list of offices filtered by number of offices', function () {
    $office1 = Office::factory()->create(['offices' => 5]);
    $office2 = Office::factory()->create(['offices' => 10]);
    $response = $this->get('/api/offices?offices=5');
    $response->assertStatus(200);
    $response->assertJsonCount(1);
    $response->assertJsonFragment(['offices' => "5"]);
});

it('returns a list of offices filtered by number of tables', function () {
    $office1 = Office::factory()->create(['tables' => 20]);
    $office2 = Office::factory()->create(['tables' => 30]);
    $response = $this->get('/api/offices?tables=20');
    $response->assertStatus(200);
    $response->assertJsonCount(1);
    $response->assertJsonFragment(['tables' => "20"]);
});

it('returns a list of offices filtered by square metres range', function () {
    $office1 = Office::factory()->create(['sqm' => 50]);
    $office2 = Office::factory()->create(['sqm' => 100]);
    $office3 = Office::factory()->create(['sqm' => 150]);
    $response = $this->get('/api/offices?sqm_from=100&sqm_to=150');
    $response->assertStatus(200);
    $response->assertJsonCount(2);
    $response->assertJsonFragment(['sqm' => "100"]);
    $response->assertJsonFragment(['sqm' => "150"]);
});

it('returns a list of offices filtered by price range', function () {
    $office1 = Office::factory()->create(['price' => 500]);
    $office2 = Office::factory()->create(['price' => 1000]);
    $office3 = Office::factory()->create(['price' => 1500]);
    $response = $this->get('/api/offices?price_from=1000&price_to=1500');
    $response->assertStatus(200);
    $response->assertJsonCount(2);
    $response->assertJsonFragment(['price' => "1000"]);
    $response->assertJsonFragment(['price' => "1500"]);
});
