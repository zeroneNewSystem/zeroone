<?php

namespace Database\Seeders;

use App\Models\DocumentType;
use Illuminate\Database\Seeder;

class DocumentTypeSeeder extends Seeder
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
            



        ];

        DocumentType::insert($items);

        
        //
    }
}
