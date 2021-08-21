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
            'prdct_type_code'  => 1,
            'main_sales_unit_id'  => 1,
            'main_purchase_unit_id'  => 1,
            'product_cogs_account_code'  => 1,
            'product_sales_account_code'  => 1,
            'sales_discount'  => 5.0,
            'sales_discount_type_code'  => 1,
            'purchase_discount'  => 2.5,
            'purchase_discount_type_code'  => 1,
            'purchase_tax_id'  => 1,
            'sales_tax_id'  => 1,
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
            'distribution_policy_id'  => 1,
            'is_free'  => 0,

            //
        ];
    }
}
