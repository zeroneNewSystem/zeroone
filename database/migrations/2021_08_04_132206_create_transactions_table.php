<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTransactionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('transactions', function (Blueprint $table) {

            $table->id();
            $table->unsignedInteger('company_id');

            $table->unsignedInteger('account_id',);
            $table->double('debit')->default(0);
            $table->double('credit')->default(0);
            
            $table->integer('document_id',);
            $table->integer('document_type_id',);
            $table->unsignedInteger('currency_code')->default(1);
            $table->unsignedInteger('currency_rate')->default(1);
            
            $table->text('description');
            


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
        Schema::dropIfExists('transactions');
    }
}
