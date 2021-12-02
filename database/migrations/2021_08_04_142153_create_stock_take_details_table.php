<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStockTakeDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('stock_take_details', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger ('company_id');
            $table->unsignedInteger ('stock_take_id');
            
            $table->unsignedInteger ('product_id');
            $table->unsignedInteger ('patch_number');
            $table->timestamp('expiration')->nullable();
            
            $table->unsignedInteger ('current_quantity');
            $table->unsignedInteger ('actual_quantity');
            $table->unsignedInteger ('product_unit_id');
            $table->unsignedInteger ('quan_in_mininmal_unit')->nullable();
            $table->double('unit_price')->default('1');

            $table->text('description')->nullable();


            $table->timestamp('date')->useCurrent = true;
            
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
        Schema::dropIfExists('stock_take_details');
    }
}
