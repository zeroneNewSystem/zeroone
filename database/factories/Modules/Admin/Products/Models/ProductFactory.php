<?php

namespace Database\Factories\Modules\Admin\Products\Models;


use App\Modules\Admin\Products\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProductFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Product::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'company_id'  => 1,
            'barcode'  => $this->faker->unique()->ean13(),
            'serial_number'  => $this->faker->unique()->ean13(),
            'ar_name'  => $this->faker->name(),
            'en_name'  => $this->faker->name(),
            'prdct_form_id'  => 1,
            'prdct_type_id'  => 1,
            'minor_unit'  => 1,
            'main_soldunit_id'  => 1,
            'main_bought_unit_id'  => 1,
            'cogs_account_id'  => 1,
            'soldaccount_id'  => 1,
            'soldreturn_account_id' => 1,
            'bought_return_account_id' => 1,
            'solddiscount'  => 5.0,
            'solddiscount_type_id'  => 1,
            'purchase_discount'  => 2.5,
            'purchase_discount_type_id'  => 1,
            'purchase_tax'  => 1,
            'soldtax'  => 1,
            'min_alert'  => 0,
            'max_alert'  => 100,
            'stagnation_period'  => 10,
            'opening_balance_quantity'  => 100,
            'opening_balance_cost'  => 1000,
            'profit_ratio'  => 20,
            'side_effect'  => $this->faker->paragraph(),
            'description'  => $this->faker->paragraph(),
            'inventory_id'  => 1,
            'image'  => $this->faker->text(),
            //'image' => $this->faker->image('public/images',640,480, null, false), generate images
            'distribution_policy_id'  => 1,
            'is_free'  => 0,

            //
        ];
    }
}
