<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePurchaseReturnDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('purchase_return_details', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('company_id');

            $table->integer('document_id',);
            $table->integer('document_type_id',);
            $table->integer('product_id',);
            $table->datetime('expires_at')->nullable();
            $table->integer('purchase_return_detail_unit_id');
            $table->integer('purchase_return_detail_quantity',)->default(0);
            $table->double('unit_price')->default(0.0);
            $table->double('profit_ratio')->default(0.0);
            $table->double('soldprice')->default(0.0);
            $table->boolean('bonus', 1)->default(0);
            $table->integer('quantity_in_minor_unit')->default(0);
            $table->integer('sum_quantity_in_minor_unit',)->default(-1);
            $table->integer('inventory_id',);
            $table->double('vat')->default(0.0);
            $table->double('purchase_return_detail_discount')->default(0.0);
            $table->double('solddiscount')->default(0.0);
            
            $table->double('total')->default(0.0);
            $table->boolean('purchase_return_detail_drugs_is_with_bonous')->default(0);

            $table->index('company_id');
            $table->index('product_id');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('purchase_return_details');
    }
}
