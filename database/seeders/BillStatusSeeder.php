<?php

namespace Database\Seeders;

use App\Models\BillStatus;
use Illuminate\Database\Seeder;

class BillStatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $items = [
            ['ar_name' => 'موافق عليه', 'en_name' => 'approved'],
            ['ar_name' => 'بانتظار الموافقة ', 'en_name' => 'awaiting_approval'],
            ['ar_name' => 'ألغيت', 'en_name' => 'canceled'],
            ['ar_name' => 'مسودة', 'en_name' => 'draft'],
            ['ar_name' => 'دفعت', 'en_name' => 'Paid'],
            ['ar_name' => 'دفعت جزئيا', 'en_name' => 'partially_paid'],

        ];
        //
        BillStatus::insert($items);

        //
    }
}
