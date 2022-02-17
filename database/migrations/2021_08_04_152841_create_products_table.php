<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger ('company_id');
            $table->string('barcode')->nullable();
            $table->string('serial_number')->nullable();
            $table->string('ar_name');
            $table->string('en_name');


            $table->unsignedInteger ('prdct_form_id')->nullable();
            $table->unsignedInteger ('prdct_type_id');

            $table->unsignedInteger ('minor_unit');
            $table->integer('quantity_in_minor_unit',)->default(0);
            
            $table->unsignedInteger ('main_sold_unit_id');
            $table->unsignedInteger ('main_bought_unit_id');

            $table->double('average_cost')->default(0.0);


            $table->unsignedInteger ('cogs_account_id');
            $table->unsignedInteger ('sold_account_id');
            
            $table->unsignedInteger ('sold_return_account_id');
            $table->unsignedInteger ('bought_return_account_id');
            $table->double('sold_discount')->default(0.0);
            $table->unsignedInteger ('sold_discount_type_id')->default(0)->comment('0-percent, 1-amounr');

            $table->double('discount')->default(0.0);
            $table->unsignedInteger ('discount_type_id',)->default(0)->comment('0-percent, 1-amounr');

            $table->unsignedInteger ('bought_tax',);
            $table->unsignedInteger ('sold_tax',);

            $table->integer('min_alert',)->default(0);
            $table->integer('max_alert',)->default(0);
            $table->integer('stagnation_period',)->nullable();
            $table->integer('opening_balance_quantity',)->default(0);
            $table->integer('opening_balance_cost',)->default(0);

            $table->double('profit_ratio')->default(20.0);
            $table->text('side_effect')->nullable();
            $table->text('description')->nullable();
            $table->unsignedInteger ('inventory_id',)->default(0);

            $table->string('image')->default('no-image.png');

            $table->unsignedInteger ('distribution_policy_id',)->nullable();

            $table->boolean('is_free', 1)->default('0');
            $table->boolean('is_bonus', 1)->default('0');// add policy of bonus system
            
            $table->boolean('is_active', 1)->default('1');
            $table->boolean('is_avilable_in_POS', 1)->default('1');
            $table->boolean('is_sellable', 1)->default('1');
            $table->boolean('is_purchasable', 1)->default('1');
            $table->boolean('is_returnable', 1)->default('1');
            $table->boolean('is_storable', 1)->default('1');
            $table->boolean('has_expiration_date', 1)->default('1');


            $table->timestamps();
            $table->softDeletes();

            $table->index('company_id');
            $table->index('barcode');
            $table->unique(['company_id', 'barcode', 'deleted_at']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}
