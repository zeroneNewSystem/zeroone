<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class PrdctUnitProductTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('prdct_unit_products', function (Blueprint $table) {
            $table->id();

            $table->unsignedInteger('product_id',);

            $table->unsignedInteger('prdct_unit_id');
            $table->unsignedInteger('contains');
            
            $table->unsignedInteger('purchase_price');
            $table->unsignedInteger('sales_price');
            $table->unsignedInteger('barcode');

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
        Schema::dropIfExists('prdct_unit_products');
    }
}
