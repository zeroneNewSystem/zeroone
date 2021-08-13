<?php

namespace Database\Seeders;

use App\Modules\Admin\Products\Models\PrdctType;
use Illuminate\Database\Seeder;

class PrdctTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $items = [
            ['company_id' => 1, 'ar_name' => 'منتج', 'en_name' => 'product'],
            ['company_id' => 1, 'ar_name' => 'خدمة', 'en_name' => 'service'],
            
        ];

        PrdctType::insert($items);
    }
}
