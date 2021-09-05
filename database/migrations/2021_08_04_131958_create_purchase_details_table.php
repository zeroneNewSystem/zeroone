<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePurchaseDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('purchase_details', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('company_id');

            $table->integer('source_document_id',);
            $table->integer('document_id',);
            $table->integer('product_id',);
            $table->datetime('expires_at');
            $table->integer('product_unit_id');
            $table->integer('purchased_quantity',)->default(0);
            $table->double('unit_price')->default(0.0);
            $table->double('profit_ratio')->default(0.0);
            $table->double('sales_price')->default(0.0);
            $table->boolean('bonus', 1)->default(0);
            $table->integer('quan_in_mininmal_unit',);
            $table->integer('inventory_id',);
            $table->double('vat')->default(0.0);
            $table->double('purchase_discount')->default(0.0);
            $table->double('sales_discount')->default(0.0);
            $table->integer('patch_number',);
            $table->double('total')->default(0.0);
            $table->boolean('purchased_drugs_is_with_bonous')->default(0);

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
        Schema::dropIfExists('purchase_details');
    }
}