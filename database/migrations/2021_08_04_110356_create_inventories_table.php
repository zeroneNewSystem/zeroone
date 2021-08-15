<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInventoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('inventories', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger ('company_id');

            $table->string('ar_name');
            $table->string('en_name');

            $table->unsignedInteger ('account_id');
           
            $table->unsignedInteger ('country_id');
            $table->unsignedInteger ('city_id');
            $table->string('address');

            $table->timestamps();
            $table->softDeletes();

            
            $table->index('company_id');
            $table->unique(['company_id', 'ar_name', 'deleted_at']);

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('inventories');
    }
}
