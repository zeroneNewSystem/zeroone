<?php

namespace Database\Seeders;

use App\Models\User;
use App\Modules\Admin\Products\Models\PrdctForm;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();


        \App\Modules\Admin\Products\Models\Product::factory(10)->create();
        User::factory(1)->create();

        $this->call(
            [
                PrdctUnitSeeder::class,
                PrdctFormSeeder::class,
                PrdctGroupSeeder::class,

                InventorySeeder::class,
                DistributionPolicySeeder::class,
                TaxSeeder::class,
                PrdctTypeSeeder::class,

            ]
        );
    }
}
