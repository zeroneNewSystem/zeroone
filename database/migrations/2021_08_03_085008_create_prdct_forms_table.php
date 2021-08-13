<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePrdctFormsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('prdct_forms', function (Blueprint $table) {
            $table->id();
            $table->integer('company_id');
            
            $table->string('ar_name');
            $table->string('en_name');

            $table->timestamps();
            $table->softDeletes();

            $table->index('company_id');
            $table->index('ar_name');
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
        Schema::dropIfExists('prdct_forms');
    }
}
