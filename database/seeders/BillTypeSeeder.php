<?php

namespace Database\Seeders;

use App\Models\BillType;
use Illuminate\Database\Seeder;

class BillTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $items = [
            ['ar_name' => 'فاتورة مشتريات', 'en_name' => '', 'type' => 1],
            ['ar_name' => 'فاتورة مبيعات', 'en_name' => '', 'type' => 2],
            ['ar_name' => 'سند قبض', 'en_name' => '', 'type' => 3],
            ['ar_name' => 'سند صرف', 'en_name' => '', 'type' => 4],
            
            ['ar_name' => 'مرتجع مشتريات', 'en_name' => '', 'type' => 5],
            ['ar_name' => 'مرتجع مبيعات', 'en_name' => '', 'type' => 6],



        ];

        BillType::insert($items);

        
        //
    }
}
