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
            ['company_id' => 1, 'ar_name' => 'منتج مجمع', 'en_name' => 'compounded product'],
            ['company_id' => 1, 'ar_name' => 'مادة أولية', 'en_name' => 'raw material'],
            
        ];

        PrdctType::insert($items);
    }
}
