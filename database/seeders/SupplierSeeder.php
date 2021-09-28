<?php

namespace Database\Seeders;

use App\Modules\Admin\Accounts\Models\Account;
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
            ['company_id' => '1', 'person_id' => 1,  'company_name'=>'الحياة', 'owner' => 'العزعزي', 'tax_number' => '', 'is_active' => '1', 'notes' => '',],
            ['company_id' => '1', 'person_id' => 2,  'company_name'=>'الشرق', 'owner' => 'العزعزي', 'tax_number' => '', 'is_active' => '1', 'notes' => '',],
            ['company_id' => '1', 'person_id' => 3,  'company_name'=>'الزين', 'owner' => 'العزعزي', 'tax_number' => '', 'is_active' => '1', 'notes' => '',],

        ];
        Supplier::insert($items);



        // ceate accounts for suppliers
        $account_items = [
            ['company_id' => '1', 'account_code' => '210100001', 'type_id' => '16', 'level' => '4', 'parent_id' => '24', 'ar_name' => '', 'en_name' => '', 'description' => 'حساب مورد', 'payable_receivable' => '1', 'editable' => '0',  'currency_id' => '1', 'is_active' => '1', 'is_visable_in_COA' => '0', 'accountable_id' => '1', 'accountable_type' => 'supplier', 'create_by_user_id' => '1'],
            ['company_id' => '1', 'account_code' => '210100002', 'type_id' => '16', 'level' => '4', 'parent_id' => '24', 'ar_name' => '', 'en_name' => '', 'description' => 'حساب مورد', 'payable_receivable' => '1', 'editable' => '0',  'currency_id' => '1', 'is_active' => '1', 'is_visable_in_COA' => '0', 'accountable_id' => '2', 'accountable_type' => 'supplier', 'create_by_user_id' => '1'],
            ['company_id' => '1', 'account_code' => '210100003', 'type_id' => '16', 'level' => '4', 'parent_id' => '24', 'ar_name' => '', 'en_name' => '', 'description' => 'حساب مورد', 'payable_receivable' => '1', 'editable' => '0',  'currency_id' => '1', 'is_active' => '1', 'is_visable_in_COA' => '0', 'accountable_id' => '3', 'accountable_type' => 'supplier', 'create_by_user_id' => '1']
        ];

        Account::insert($account_items);
    }
}
