<?php

namespace Database\Factories\Modules\Admin\Products\Models;

use App\Modules\Admin\Products\Models\PrdctGroupsProduct;
use Illuminate\Database\Eloquent\Factories\Factory;

class PrdctGroupsProductFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = PrdctGroupsProduct::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'company_id'  => 1,
            'product_id'  => $this->faker->randomNumber(1,10),
            'prdct_group_id'  => $this->faker->randomNumber(1,2),
            //
        ];
    }
}
