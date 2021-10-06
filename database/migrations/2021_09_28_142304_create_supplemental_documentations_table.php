<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSupplementalDocumentationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('supplemental_documentations', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('company_id');
           
            $table->unsignedInteger('document_id',);
            $table->unsignedInteger('document_type_id',);
            $table->double('amount')->default(0);
            $table->unsignedInteger('confirmation_document_id',);
            $table->unsignedInteger('confirmation_document_type_id',);

            $table->timestamps();
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
        Schema::dropIfExists('supplemental_documentations');
    }
}
