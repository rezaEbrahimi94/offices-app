<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Office;
use Faker\Factory as Faker;

class OfficeFactory extends Factory
{
    protected $model = Office::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $faker = Faker::create();

        return [
            'name' => $faker->company(),
            'price' => $faker->numberBetween(500, 2000),
            'offices' => $faker->numberBetween(1, 5),
            'tables' => $faker->numberBetween(2, 10),
            'sqm' => $faker->numberBetween(70, 500),
        ];
    }
}
