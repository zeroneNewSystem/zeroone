<?php

namespace Database\Seeders;

use App\Modules\Admin\Accounts\Models\Account;
use Illuminate\Database\Seeder;
use App\Modules\Admin\People\Models\Person;

use Faker\Factory as Faker;

class PersonSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */

    public function run()
    {
        $faker = Faker::create();
        $items = [
            ['company_id' => '1', 'company_name' => 'الحياة', 'tax_number' => '', 'name' => 'أحمد',  'phone01' => '967775521104', 'supplier_account_id' => 94, 'email' => $faker->email, 'website' => 'www.webzeron.com', 'country_id' => '1', 'city_id' => '1', 'address' => '',  'notes' => ''],
            ['company_id' => '1', 'company_name' => 'الحياة', 'tax_number' => '', 'name' => 'محمد', 'phone01' => '967775521105', 'supplier_account_id' => 95, 'email' => $faker->email, 'website' => 'www.webzeron.com', 'country_id' => '1', 'city_id' => '1', 'address' => '',  'notes' => ''],
            ['company_id' => '1', 'company_name' => 'الحياة', 'tax_number' => '', 'name' => 'كريم',  'phone01' => '967775521179', 'supplier_account_id' => 96, 'email' => $faker->email, 'website' => 'www.webzeron.com', 'country_id' => '1', 'city_id' => '1', 'address' => '',  'notes' => ''],
        ];
        Person::insert($items);
        //


        $account_items = [
            ['company_id' => '1', 'account_code' => '210100001', 'type_id' => '16', 'level' => '4', 'parent_id' => '24', 'ar_name' => '', 'en_name' => '', 'description' => 'حساب مورد', 'payable_receivable' => '1', 'editable' => '0',  'currency_id' => '1', 'is_active' => '1', 'is_visable_in_COA' => '0', 'accountable_id' => '1', 'accountable_type' => 'App\Modules\Admin\People\Models\Person', 'create_by_user_id' => '1'],
            ['company_id' => '1', 'account_code' => '210100002', 'type_id' => '16', 'level' => '4', 'parent_id' => '24', 'ar_name' => '', 'en_name' => '', 'description' => 'حساب مورد', 'payable_receivable' => '1', 'editable' => '0',  'currency_id' => '1', 'is_active' => '1', 'is_visable_in_COA' => '0', 'accountable_id' => '2', 'accountable_type' => 'App\Modules\Admin\People\Models\Person', 'create_by_user_id' => '1'],
            ['company_id' => '1', 'account_code' => '210100003', 'type_id' => '16', 'level' => '4', 'parent_id' => '24', 'ar_name' => '', 'en_name' => '', 'description' => 'حساب مورد', 'payable_receivable' => '1', 'editable' => '0',  'currency_id' => '1', 'is_active' => '1', 'is_visable_in_COA' => '0', 'accountable_id' => '3', 'accountable_type' => 'App\Modules\Admin\People\Models\Person', 'create_by_user_id' => '1']
        ];



        Account::insert($account_items);
    }
}
