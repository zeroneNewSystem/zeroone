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
            
            $table->string('account_id',20);
            $table->string('ar_name');
            $table->string('en_name');
            



            $table->text('description')->nullable();
            
            $table->boolean('payable_receivable')->default(1);//ممكن تضع فيه فلوس وتاخذ منه فلوس ويعني انه غير قابل للتفريع مثل البنك والصندوق
            
            $table->boolean('editable')->default(1);
            $table->boolean('cashable')->default(1);//نقدية ومافي حكمها
            
            $table->unsignedInteger('parent_id');
            $table->unsignedInteger('type_id');

            $table->unsignedInteger('level',);
            
            $table->unsignedInteger('currency_id')->default(1);
            $table->boolean('is_active');

            
            $table->unsignedInteger('accountable_id')->nullable();
            $table->string('accountable_type')->nullable();


            $table->unsignedInteger('create_by_user_id');
            
            $table->timestamps();
            $table->softDeletes();

            $table->index('company_id');
        });
        Schema::create('account_types', function (Blueprint $table) {
            // تابعة للحسابات الاساسية الخمسة، لذا عند اختيار الحساب الرئيسي يندرج تحته النوع 
            // النوع يسهل في العمليات الحسابية عمل فلترة بحسب نوع الحساب

            $table->id();
            $table->unsignedInteger('company_id');
            $table->unsignedInteger('type_id');
            
            $table->string('ar_name');
            $table->string('en_name');
            $table->text('description')->nullable();
            
           

            
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
        Schema::dropIfExists('account_types');
    }
}
