<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePrdctUnitsProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('prdct_units_products', function (Blueprint $table) {
            $table->id();

            $table->unsignedInteger('product_id',);

            $table->unsignedInteger('prdct_unit_id');
            $table->unsignedInteger('contains');
            
            $table->unsignedInteger('bought_price')->nullable();
            $table->unsignedInteger('sold_price')->nullable();
            $table->string('barcode')->nullable();

            $table->timestamps();

        });
        //
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('prdct_units_products');
    }
}
