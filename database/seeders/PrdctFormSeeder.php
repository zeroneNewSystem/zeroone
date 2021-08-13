<?php

namespace Database\Seeders;

use App\Modules\Admin\Products\Models\PrdctForm;
use Illuminate\Database\Seeder;

class PrdctFormSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $items = [
            ['company_id' => 1, 'ar_name' => 'مشروب', 'en_name' => 'syrup'],
            ['company_id' => 1, 'ar_name' => 'صلب', 'en_name' => 'solid'],
            ['company_id' => 1, 'ar_name' => 'غاز', 'en_name' => 'gaz'],
        ];

        PrdctForm::insert($items);
    }
}
