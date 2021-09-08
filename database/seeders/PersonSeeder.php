<?php

namespace Database\Seeders;

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
            ['company_id' => '1', 'company_name'=>'الحياة', 'tax_number' => '','ar_name' => 'أحمد', 'en_name' => 'ahmed', 'phone01' => '967775521104', 'email' => $faker->email, 'website' => 'www.webzeron.com', 'country_id' => '1', 'city_id' => '1', 'address' => '',  'notes' => ''],
            ['company_id' => '1', 'company_name'=>'الحياة', 'tax_number' => '','ar_name' => 'محمد', 'en_name' => 'mohammed', 'phone01' => '967775521105', 'email' => $faker->email, 'website' => 'www.webzeron.com', 'country_id' => '1', 'city_id' => '1', 'address' => '',  'notes' => ''],
            ['company_id' => '1', 'company_name'=>'الحياة', 'tax_number' => '', 'ar_name' => 'كريم', 'en_name' => 'karim', 'phone01' => '967775521179', 'email' => $faker->email, 'website' => 'www.webzeron.com', 'country_id' => '1', 'city_id' => '1', 'address' => '',  'notes' => ''],
        ];
        Person::insert($items);
        //
    }
}
