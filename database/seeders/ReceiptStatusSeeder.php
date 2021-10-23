<?php

namespace Database\Seeders;

use App\Modules\Admin\Statuses\Models\ReceiptStatus;
use Illuminate\Database\Seeder;

class ReceiptStatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $items = [
            ['ar_name' => 'غير مستعمل', 'en_name' => 'unused'],
            ['ar_name' => 'مستعمل', 'en_name' => 'used'],
            ['ar_name' => 'مستعمل جزئيا', 'en_name' => 'partially used'],
            
        ];
        //
        ReceiptStatus::insert($items);
    
        //
    }
}
