<?php

namespace Database\Seeders;

use App\Modules\Admin\Products\Models\PrdctUnit;
use Illuminate\Database\Seeder;

class PrdctUnitSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $items = [
            ['company_id' => 1, 'ar_name' => 'قطعة', 'en_name' => 'قطعة', 'ar_unit_representation' => 'قطعة', 'en_unit_representation' => 'قطعة'],
            ['company_id' => 1, 'ar_name' => 'كيلو جرام', 'en_name' => 'kilogram', 'ar_unit_representation' => 'كجم', 'en_unit_representation' => 'Kgs'],
            ['company_id' => 1, 'ar_name' => 'جرام', 'en_name' => 'gram', 'ar_unit_representation' => 'جم', 'en_unit_representation' => 'gm'],
            ['company_id' => 1, 'ar_name' => 'حبة', 'en_name' => 'tablet', 'ar_unit_representation' => 'حبة', 'en_unit_representation' => 'tblt'],
            ['company_id' => 1, 'ar_name' => 'لتر', 'en_name' => 'قطعة', 'ar_unit_representation' => 'لتر', 'en_unit_representation' => 'قطعة'],
            ['company_id' => 1, 'ar_name' => 'باكت', 'en_name' => 'packet', 'ar_unit_representation' => 'باكت', 'en_unit_representation' => 'pcs'],
            
        ];

        PrdctUnit::insert($items);
    }
}
