<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDistributionPoliciesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('distribution_policies', function (Blueprint $table) {

            $table->id();
            $table->unsignedInteger ('company_id');

            $table->string('ar_name');
            $table->string('en_name');
            $table->boolean('with_whom')->comment('0-amant, 1-mandub');
            $table->boolean('return_deducted')->comment('0-no, 1-yes');
            $table->boolean('active');
            $table->unsignedInteger ('account_method_id')->comment('1-percentage 2-amount');
            $table->unsignedInteger ('account_code')->comment('حساب التحصيل');
            $table->text('discription');

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
        Schema::dropIfExists('distribution_policies');
    }
}
