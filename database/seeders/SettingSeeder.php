<?php

namespace Database\Seeders;

use App\Modules\Admin\Settings\Models\Setting;
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
            [

                'company_id' => 1,
                'ar_key' => 'ar_key',
                'en_key' => 'en_key',
                'value' => 'value',
                'type' => 'string',

            ],
            [

                'company_id' => 1,
                'ar_key' => 'nib',
                'en_key' => 'ras',
                'value' => 'ali',
                'type' => 'string',

            ],



        ];

        Setting::insert($items);
    }
}
