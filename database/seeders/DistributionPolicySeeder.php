<?php

namespace Database\Seeders;

use App\Models\DistributionPolicy;
use Illuminate\Database\Seeder;

class DistributionPolicySeeder extends Seeder
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
                'ar_name' => 'سياسة البيع والتحصيل',
                'en_name' => 'سياسة البيع والتحصيل',
                'with_whom' => 0,
                'return_deducted' => 0,
                'active' => 1,
                'account_method_id' => 1,
                'account_code' => '211101',
                'discription' => 'some policy'
            ],
            [
                'company_id' => 1,
                'ar_name' => 'سياسة التحصيل حسب الكمية',
                'en_name' => 'سياسة الكمية والتحصيل',
                'with_whom' => 0,
                'return_deducted' => 0,
                'active' => 1,
                'account_method_id' => 1,
                'account_code' => '211101',
                'discription' => 'some policy'
            ],


        ];

        DistributionPolicy::insert($items);
    }
}
