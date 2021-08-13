<?php

namespace Database\Seeders;

use App\Models\Tax;
use Illuminate\Database\Seeder;

class TaxSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $items = [
            ['company_id' => 1, 'ar_name' => 'ضريبة صفرية', 'en_name' => 'product', 'percentage' => 0],
            ['company_id' => 1, 'ar_name' => 'معفاة من الضريبة', 'en_name' => 'product', 'percentage' => 0],
            ['company_id' => 1, 'ar_name' => 'ضريبة القيمة المضافة', 'en_name' => 'product', 'percentage' => 15],


        ];

        Tax::insert($items);
    }
}
