<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePurchasesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('purchases', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger ('company_id');

            $table->string('reference')->nullable();
            $table->unsignedInteger('type_id')->default('1');
            $table->unsignedInteger('currency_id')->default('1');
            $table->double('currency_rates')->default('1');
            $table->text('description')->nullable();
            $table->unsignedInteger('supplier_id',)->default('1');
            
            $table->boolean('only_cash')->default('1');
            
            
            $table->timestamp('issue_date')->useCurrent = true;
            $table->timestamp('maturity_date')->useCurrent = true;
            
            $table->unsignedInteger('payment_condition_id',)->default(1);
            $table->double('total_without_products_discounts')->default(0.0);
            $table->double('total_without_products_vat')->default(0.0);
            $table->double('total_discunt')->default(0.0);
            $table->double('total_vat')->default(0.0);
            $table->double('additional_expenses')->default(0.0);
            $table->double('total_amount')->default(0.0);
            $table->double('remaining_amount')->default(0.0);
            $table->double('paid_amount')->default(0.0);
            $table->tinyInteger('status_id',)->default(1);
            $table->tinyInteger('payment_status_id',)->default(1);
            
            $table->text('notes')->nullable();
            $table->unsignedInteger('additional_expenses_from_account_id')->nullable();

            

            $table->timestamps();
            $table->softDeletes();

            $table->index('company_id');
            $table->index('reference');
            
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('purchases');
    }
}
