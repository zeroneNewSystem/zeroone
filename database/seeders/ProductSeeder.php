<?php

namespace Database\Seeders;

use App\Modules\Admin\Products\Models\PrdctGroupsProduct;
use App\Modules\Admin\Products\Models\PrdctUnitsProduct;
use App\Modules\Admin\Products\Models\Product;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $items = [[

            'company_id'  => 1,
            'barcode'  => 1,
            'serial_number'  => 232323,
            'ar_name'=> 'salam',
            'en_name'  => 'kalam',
            'prdct_form_id'  => 1,
            'prdct_type_id'  => 1,
            'minor_unit'  => 1,
            'main_sold_unit_id'  => 1,
            'main_bought_unit_id'  => 1,
            'cogs_account_id'  => 1,
            'sold_account_id'  => 1,
            'sold_return_account_id' => 1,
            'bought_return_account_id' => 1,
            'sold_discount'  => 5.0,
            'sold_discount_type_id'  => 1,
            'discount'  => 2.5,
            'discount_type_id'  => 1,
            'bought_tax'  => 1,
            'sold_tax'  => 1,
            'min_alert'  => 0,
            'max_alert'  => 100,
            'stagnation_period'  => 10,
            'opening_balance_quantity'  => 100,
            'opening_balance_cost'  => 1000,
            'profit_ratio'  => 20,
            'side_effect'  =>'some effect',
            'description'  => 'some description',
            'inventory_id'  => 1,
            'image'  => 'no-image.png',
            //'image' => $this->faker->image('public/images',640,480, null, false), generate images
            'distribution_policy_id'  => 1,
            'is_free'  => 0,

            //

        ]];

        Product::insert($items);

        $items = [
            [
                'product_id'  => 1,

                'prdct_unit_id'  => 1,
                'contains'  => 1,

                'bought_price'  => 20,
                'sold_price'  => 33,
                'barcode'  => 67345,

                //
            ]
        ];

        PrdctUnitsProduct::insert($items);
        $items = [
            [
                'company_id'  => 1,
                'product_id'  => 1,
                'prdct_group_id'  => 1,
                //
            ]
        ];

        PrdctGroupsProduct::insert($items);



        //
    }
}
