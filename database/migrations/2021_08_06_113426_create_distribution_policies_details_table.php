<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDistributionPoliciesDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('distribution_policies_details', function (Blueprint $table) {

            $table->id();
            $table->unsignedInteger ('company_id');

            $table->unsignedInteger ('distribution_policy_id',);
            $table->double('from')->default(0.0);
            $table->double('to')->default(0.0);
            $table->unsignedInteger ('account_method_id')->comment('0-percentage 1-amount');
            $table->float('amount');

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
        Schema::dropIfExists('distribution_policies_details');
    }
}
