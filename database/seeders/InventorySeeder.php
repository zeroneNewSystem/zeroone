<?php

namespace Database\Seeders;

use App\Models\Inventory;
use Illuminate\Database\Seeder;

class InventorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $items = [
            ['company_id' => 1, 'ar_name' => 'المخزن الرئيسي', 'en_name' => 'main inventory','account_id' => '111101','country_id' => '1','city_id' => '1','address' => 'yemen',],
            ['company_id' => 1, 'ar_name' => 'المخزن الفرعي', 'en_name' => 'branch inventory','account_id' => '111102','country_id' => '1','city_id' => '1','address' => 'yemen',],

            
        ];

        Inventory::insert($items);
    }
}
