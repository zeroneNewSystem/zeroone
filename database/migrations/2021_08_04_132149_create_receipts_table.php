<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateReceiptsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('receipts', function (Blueprint $table) {
            $table->id();
             
            $table->string('receipt_reference',30);
            
            $table->string('currency')->default('USD');
            $table->float('currency_rates')->default(1);;

            $table->unsignedinteger('person_id',);
            $table->unsignedinteger('account_id',);
            $table->unsignedinteger('type_id',);
            $table->unsignedinteger('payment_type_id',); // صرف أم استلام
            $table->unsignedinteger('status_id',)->default(1);
            $table->datetime('date');
            $table->double('amount',);
            $table->text('description');
            $table->unsignedinteger('company_id',);


            $table->timestamps();
        });
    }

    /**
     * Reverse the migjjp;/rations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('receipts');
    }
}
