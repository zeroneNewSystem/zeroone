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

            $table->string('barcode');
            $table->integer('product_id',);
            $table->integer('prdct_unit_id',);
            $table->integer('contains',);
            $table->integer('from_unit_id',);
            $table->float('purchase_price');
            $table->float('sale_price');
            
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
        Schema::dropIfExists('prdct_units_products');
    }
}
