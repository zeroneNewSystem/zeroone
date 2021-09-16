<?php

namespace Database\Seeders;

use App\Modules\Admin\Accounts\Models\Account;
use App\Modules\Admin\Products\Models\Inventory;
use Illuminate\Database\Seeder;

class InventorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $items = [
            ['company_id' => 1, 'ar_name' => 'المخزن الرئيسي', 'en_name' => 'main inventory','account_id' => 92,'country_id' => '1','city_id' => '1','address' => 'yemen',],
            ['company_id' => 1, 'ar_name' => 'المخزن الفرعي', 'en_name' => 'branch inventory','account_id' => 93,'country_id' => '1','city_id' => '1','address' => 'yemen',],
            

            
        ];

        Inventory::insert($items);

        $account_items = [
            ['company_id' => '1', 'account_code' => '110601', 'type_id' => '9', 'level' => '4', 'parent_id' => '13', 'ar_name' => '', 'en_name' => '', 'description' => 'حساب مخزون', 'payable_receivable' => '1', 'editable' => '0',  'currency_id' => '1', 'is_active' => '1', 'is_visable_in_COA' => '0', 'accountable_id' => '1', 'accountable_type' => 'App\Modules\Admin\People\Models\Inventory', 'create_by_user_id' => '1'],
            ['company_id' => '1', 'account_code' => '110602', 'type_id' => '9', 'level' => '4', 'parent_id' => '13', 'ar_name' => '', 'en_name' => '', 'description' => 'حساب مخزون', 'payable_receivable' => '1', 'editable' => '0',  'currency_id' => '1', 'is_active' => '1', 'is_visable_in_COA' => '0', 'accountable_id' => '2', 'accountable_type' => 'App\Modules\Admin\People\Models\Inventory', 'create_by_user_id' => '1'],
            
        ];

        Account::insert($account_items);
    }
}
