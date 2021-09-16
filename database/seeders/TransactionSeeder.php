<?php

namespace Database\Seeders;

use App\Modules\Admin\Accounts\Models\Transaction;
use Illuminate\Database\Seeder;

class TransactionSeeder extends Seeder
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
            


        ];

        Transaction::insert($items);
    }
}
