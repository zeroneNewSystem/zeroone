<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class SettingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $items = [
            ['company_id' => 1, 'ar_name' => 'حساب المبيعات', 'en_name' => 'product', 'value' => 53],
            ['company_id' => 1, 'ar_name' => 'حساب  مردودات المبيعات', 'en_name' => 'product', 'value' => 54],
            ['company_id' => 1, 'ar_name' => 'حساب تكلفة المبيعات', 'en_name' => 'product', 'value' => 60],
            ['company_id' => 1, 'ar_name' => 'حساب  مردودات المشتريات', 'en_name' => 'product', 'value' => 61],


        ];

        Tax::insert($items);
    }
}
