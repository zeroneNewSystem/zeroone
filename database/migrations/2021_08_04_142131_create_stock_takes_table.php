<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStockTakesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('stock_takes', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger ('company_id');
            $table->unsignedInteger ('inventory_id');
            $table->unsignedInteger ('revenue_account_id');
            $table->unsignedInteger ('expense_account_id');
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
        Schema::dropIfExists('stock_takes');
    }
}
