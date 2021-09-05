<?php

namespace Database\Seeders;

use App\Modules\Admin\people\Models\Supplier;
use Illuminate\Database\Seeder;


class SupplierSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $items = [
            ['company_id' => '1', 'person_id' => 1,  'owner' => 'العزعزي', 'tax_number' => '', 'is_active' => '1', 'notes' => '',],
            ['company_id' => '1', 'person_id' => 2,  'owner' => 'العزعزي', 'tax_number' => '', 'is_active' => '1', 'notes' => '',],
            ['company_id' => '1', 'person_id' => 3,  'owner' => 'العزعزي', 'tax_number' => '', 'is_active' => '1', 'notes' => '',],

        ];
        Supplier::insert($items);
    }
}
