<?php

namespace Database\Factories\Modules\Admin\Products\Models;

use App\Models\PrdctUnitsProduct;
use Illuminate\Database\Eloquent\Factories\Factory;

class PrdctUnitsProductFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = PrdctUnitsProduct::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'product_id'  => $this->faker->randomNumber(1, 10),
            'prdct_unit_id'  => $this->faker->randomNumber(1, 6),
            //
        ];
    }
}
