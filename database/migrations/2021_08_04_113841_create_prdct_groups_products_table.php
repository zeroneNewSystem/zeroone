<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePrdctGroupsProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('prdct_groups_products', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger ('company_id');

            $table->unsignedInteger ('product_id',);
            $table->unsignedInteger ('prdct_group_id',);

            $table->timestamps();
            $table->softDeletes();

            
            $table->index('company_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('prdct_groups_products');
    }
}
