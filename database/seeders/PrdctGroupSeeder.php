<?php

namespace Database\Seeders;

use App\Modules\Admin\Products\Models\PrdctGroup;
use Illuminate\Database\Seeder;

class PrdctGroupSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $items = [
            ['company_id' => 1, 'ar_name' => 'مضادات حيوية', 'en_name' => 'antibiotic'],
            ['company_id' => 1, 'ar_name' => 'مهدئات', 'en_name' => 'relax'],
            
        ];

        PrdctGroup::insert($items);
    }
}
