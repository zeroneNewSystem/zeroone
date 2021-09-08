<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSuppliersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('suppliers', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('company_id');
            
            $table->integer('person_id');
            
            $table->string('owner')->nullable();
            $table->string('company_name')->nullable();
            $table->string('tax_number')->nullable();
            $table->boolean('is_active')->default('1');
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
        Schema::dropIfExists('suppliers');
    }
}
