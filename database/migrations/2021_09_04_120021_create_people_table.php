<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePeopleTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('people', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('company_id');
            
            

            $table->string('name');
            //$table->string('en_name');
            $table->string('locale')->default('ar_SA');
            $table->string('phone01', 15)->nullable();
            $table->string('phone02', 15)->nullable();
            
            $table->string('email')->nullable();
            $table->string('website')->nullable();
            
            $table->string('company_name')->nullable();
            $table->string('tax_number')->nullable();
            $table->integer('country_id')->nullable();
            $table->integer('city_id',)->nullable();
            $table->text('address')->nullable();
            
            $table->boolean('is_customer')->default('0');
            $table->boolean('is_supplier')->default('1');
            $table->boolean('is_employee')->default('0');
            $table->unsignedInteger('customer_account_id')->nullable();
            $table->unsignedInteger('supplier_account_id')->nullable();
            $table->unsignedInteger('employee_account_id')->nullable();

            $table->boolean('is_user')->default('0');
            $table->text('notes')->nullable();
            
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
        Schema::dropIfExists('people');
    }
}
