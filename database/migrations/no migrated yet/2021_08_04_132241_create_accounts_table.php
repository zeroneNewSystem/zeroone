<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAccountsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('accounts', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('company_id');
            
            $table->string('account_code',20);
            $table->string('ar_name');
            $table->string('en_name');
            



            $table->text('description')->nullable();
            
            $table->boolean('payable_receivable')->default(1);//ممكن تضع فيه فلوس وتاخذ منه فلوس ويعني انه غير قابل للتفريع مثل البنك والصندوق
            
            $table->boolean('editable')->default(1);
            $table->boolean('cashable')->default(1);//نقدية ومافي حكمها
            
            $table->unsignedInteger('parent_id');
            $table->unsignedInteger('type_code', 100);

            $table->unsignedInteger('level',);
            
            $table->unsignedInteger('currency_id');
            $table->boolean('is_active');

            $table->boolean('is_transaction');
            $table->boolean('is_gl');
            $table->boolean('is_budget');
            $table->boolean('is_depreciation');
            

            $table->unsignedInteger('accountable_id')->nullable();
            $table->string('accountable_ type')->nullable();


            $table->unsignedInteger('create_by_user_id');

            
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
        Schema::dropIfExists('accounts');
    }
}
