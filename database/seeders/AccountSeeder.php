<?php

namespace Database\Seeders;


use App\Modules\Admin\Accounts\Models\Account ;
use Illuminate\Database\Seeder;

class AccountSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $items = [
            ['company_id' => '1', 'account_code' => '1', 'type_code' => '1', 'level' => '1', 'parent_id' => '0', 'ar_name' => 'الأصول', 'en_name' => 'assets', 'description' => '', 'payable_receivable' => 0, 'editable' => '1',  'currency_id' => '1', 'is_active' => '1', 'accountable_id' => '1', 'accountable_type' => '1', 'create_by_user_id' => '1'],
            ['company_id' => '1', 'account_code' => '11', 'type_code' => '11', 'level' => '2', 'parent_id' => '1', 'ar_name' => 'أصول متداولة', 'en_name' => 'Current assets', 'description' => '', 'payable_receivable' => 0, 'editable' => '1',  'currency_id' => '1', 'is_active' => '1', 'accountable_id' => '1', 'accountable_type' => '1', 'create_by_user_id' => '1'],
            ['company_id' => '1', 'account_code' => '1101', 'type_code' => '1101', 'level' => '3', 'parent_id' => '2', 'ar_name' => 'النقد ومايعادله', 'en_name' => 'Cash and its equivalent', 'description' => 'النقدية وما في حكمها (في الخزينة والعهد]', 'payable_receivable' => 0, 'editable' => '1',  'currency_id' => '1', 'is_active' => '1', 'accountable_id' => '1', 'accountable_type' => '1', 'create_by_user_id' => '1'],
            ['company_id' => '1', 'account_code' => '110101', 'type_code' => '1101', 'level' => '4', 'parent_id' => '3', 'ar_name' => 'النقدية في الخزينة', 'en_name' => 'cash in the safe', 'description' => 'النقدية في الخزينة', 'payable_receivable' => '1', 'editable' => '1',  'currency_id' => '1', 'is_active' => '1', 'accountable_id' => '1', 'accountable_type' => '1', 'create_by_user_id' => '1'],
            ['company_id' => '1', 'account_code' => '110102', 'type_code' => '1101', 'level' => '4', 'parent_id' => '3', 'ar_name' => 'العهد النقدية', 'en_name' => 'cash covenant', 'description' => 'العهد النقدية للموظفين بشكل مؤقت أو دائم لدفع مصروفات المنشأة', 'payable_receivable' => '1', 'editable' => '1',  'currency_id' => '1', 'is_active' => '1', 'accountable_id' => '1', 'accountable_type' => '1', 'create_by_user_id' => '1'],
            ['company_id' => '1', 'account_code' => '1102', 'type_code' => '1102', 'level' => '3', 'parent_id' => '2', 'ar_name' => 'النقدية في البنك', 'en_name' => 'cash in the bank', 'description' => 'النقدية في البنوك', 'payable_receivable' => 0, 'editable' => '1',  'currency_id' => '1', 'is_active' => '1', 'accountable_id' => '1', 'accountable_type' => '1', 'create_by_user_id' => '1'],
            ['company_id' => '1', 'account_code' => '110201', 'type_code' => '1102', 'level' => '4', 'parent_id' => '6', 'ar_name' => 'حساب البنك الجاري - اسم البنك', 'en_name' => 'Current Bank Account - Bank Name', 'description' => 'حساب البنك الجاري - اسم البنك', 'payable_receivable' => '1', 'editable' => '1',  'currency_id' => '1', 'is_active' => '1', 'accountable_id' => '1', 'accountable_type' => '1', 'create_by_user_id' => '1'],
            ['company_id' => '1', 'account_code' => '1103', 'type_code' => '1103', 'level' => '3', 'parent_id' => '2', 'ar_name' => 'المدينون', 'en_name' => 'debtors', 'description' => 'مبالغ مستحقة على حساب العملاء (بالأجل]', 'payable_receivable' => 0, 'editable' => '1',  'currency_id' => '1', 'is_active' => '1', 'accountable_id' => '1', 'accountable_type' => '1', 'create_by_user_id' => '1'],
            ['company_id' => '1', 'account_code' => '1104', 'type_code' => '1104', 'level' => '3', 'parent_id' => '2', 'ar_name' => 'مصروفات مقدمة', 'en_name' => 'Advanced expenses', 'description' => 'مصروف مدفوع مقدماً مثل التأمين وسلف الموظفين وإيجار المكتب', 'payable_receivable' => 0, 'editable' => '1',  'currency_id' => '1', 'is_active' => '1', 'accountable_id' => '1', 'accountable_type' => '1', 'create_by_user_id' => '1'],
            ['company_id' => '1', 'account_code' => '110401', 'type_code' => '1104', 'level' => '4', 'parent_id' => '9', 'ar_name' => 'تأمين طبي مقدم', 'en_name' => 'Provided medical insurance', 'description' => 'تأمين طبي مدفوع مقدماً يتم إطفاء مايخص السنة المالية إلى مصروف', 'payable_receivable' => 0, 'editable' => '1',  'currency_id' => '1', 'is_active' => '1', 'accountable_id' => '1', 'accountable_type' => '1', 'create_by_user_id' => '1'],
            ['company_id' => '1', 'account_code' => '110402', 'type_code' => '1104', 'level' => '4', 'parent_id' => '9', 'ar_name' => 'إيجار مقدم', 'en_name' => 'advance rent', 'description' => 'إيجار مدفوع مقدماً يتم إطفاء مايخص السنة المالية إلى مصروف', 'payable_receivable' => 0, 'editable' => '1',  'currency_id' => '1', 'is_active' => '1', 'accountable_id' => '1', 'accountable_type' => '1', 'create_by_user_id' => '1'],
            ['company_id' => '1', 'account_code' => '1105', 'type_code' => '1105', 'level' => '3', 'parent_id' => '2', 'ar_name' => 'مدفوعات مقدمة للموظفين', 'en_name' => 'Payments made to employees', 'description' => 'سلف الموظفين يلتزم الموظف بسدادها حسب المتفق عليه', 'payable_receivable' => 0, 'editable' => '1',  'currency_id' => '1', 'is_active' => '1', 'accountable_id' => '1', 'accountable_type' => '1', 'create_by_user_id' => '1'],
            ['company_id' => '1', 'account_code' => '1106', 'type_code' => '1106', 'level' => '3', 'parent_id' => '2', 'ar_name' => 'المخزون', 'en_name' => 'Inventory', 'description' => 'المخزون ويشمل المواد أولية وتامة الصنع', 'payable_receivable' => 0, 'editable' => '1',  'currency_id' => '1', 'is_active' => '1', 'accountable_id' => '1', 'accountable_type' => '1', 'create_by_user_id' => '1'],
            ['company_id' => '1', 'account_code' => '12', 'type_code' => '12', 'level' => '2', 'parent_id' => '1', 'ar_name' => 'أصول غير متداولة', 'en_name' => 'non-current assets', 'description' => '', 'payable_receivable' => 0, 'editable' => '1',  'currency_id' => '1', 'is_active' => '1', 'accountable_id' => '1', 'accountable_type' => '1', 'create_by_user_id' => '1'],
            ['company_id' => '1', 'account_code' => '1201', 'type_code' => '1201', 'level' => '1', 'parent_id' => '12', 'ar_name' => 'عقارات وآلات ومعدات', 'en_name' => 'Real estate, machinery and equipment', 'description' => 'الممتلكات والآلات والمعدات', 'payable_receivable' => 0, 'editable' => '1',  'currency_id' => '1', 'is_active' => '1', 'accountable_id' => '1', 'accountable_type' => '1', 'create_by_user_id' => '1'],
            ['company_id' => '1', 'account_code' => '120101', 'type_code' => '1201', 'level' => '4', 'parent_id' => '15', 'ar_name' => 'الأراضي', 'en_name' => 'lands', 'description' => 'الأراضي الممتلكة من قبل المنشأة', 'payable_receivable' => 0, 'editable' => '1',  'currency_id' => '1', 'is_active' => '1', 'accountable_id' => '1', 'accountable_type' => '1', 'create_by_user_id' => '1'],
            ['company_id' => '1', 'account_code' => '120102', 'type_code' => '1201', 'level' => '4', 'parent_id' => '15', 'ar_name' => 'المباني', 'en_name' => 'buildings', 'description' => 'المباني التي تستخدم في عمليات الشركة مثل المخازن والمكاتب والمصانع والمستودعات', 'payable_receivable' => 0, 'editable' => '1',  'currency_id' => '1', 'is_active' => '1', 'accountable_id' => '1', 'accountable_type' => '1', 'create_by_user_id' => '1'],
            ['company_id' => '1', 'account_code' => '120103', 'type_code' => '1201', 'level' => '4', 'parent_id' => '15', 'ar_name' => 'المعدات', 'en_name' => 'hardware', 'description' => 'المعدات المستخدمة في عمليات التشغيل', 'payable_receivable' => 0, 'editable' => '1',  'currency_id' => '1', 'is_active' => '1', 'accountable_id' => '1', 'accountable_type' => '1', 'create_by_user_id' => '1'],
            ['company_id' => '1', 'account_code' => '120104', 'type_code' => '1201', 'level' => '4', 'parent_id' => '15', 'ar_name' => 'أجهزة مكتبية وطابعات', 'en_name' => 'Office equipment and printers', 'description' => 'أجهزة مكتبية مثل الحاسب الآلي ، الجهاز المحمول وطابعات', 'payable_receivable' => 0, 'editable' => '1',  'currency_id' => '1', 'is_active' => '1', 'accountable_id' => '1', 'accountable_type' => '1', 'create_by_user_id' => '1'],
            ['company_id' => '1', 'account_code' => '1202', 'type_code' => '1202', 'level' => '3', 'parent_id' => '12', 'ar_name' => 'الأصول غير الملموسة', 'en_name' => 'intangible assets', 'description' => 'الأصول غير الملموسة مثل حق الشهرة وبراءة الاختراع وحقوق النسخ والعلامات التجارية', 'payable_receivable' => 0, 'editable' => '1',  'currency_id' => '1', 'is_active' => '1', 'accountable_id' => '1', 'accountable_type' => '1', 'create_by_user_id' => '1'],
            ['company_id' => '1', 'account_code' => '1203', 'type_code' => '1203', 'level' => '3', 'parent_id' => '12', 'ar_name' => 'العقارات الاستثمارية', 'en_name' => 'investment real estate', 'description' => 'أصول مشتراة لغرض الاستثمار وليس للاستخدام الذي يساهم في الأنشطة التشغيلية', 'payable_receivable' => 0, 'editable' => '1',  'currency_id' => '1', 'is_active' => '1', 'accountable_id' => '1', 'accountable_type' => '1', 'create_by_user_id' => '1'],
            ['company_id' => '1', 'account_code' => '2', 'type_code' => '2', 'level' => '1', 'parent_id' => '0', 'ar_name' => 'الالتزامات', 'en_name' => 'commitments', 'description' => '', 'payable_receivable' => 0, 'editable' => '1',  'currency_id' => '1', 'is_active' => '1', 'accountable_id' => '1', 'accountable_type' => '1', 'create_by_user_id' => '1'],
            ['company_id' => '1', 'account_code' => '21', 'type_code' => '21', 'level' => '2', 'parent_id' => '2', 'ar_name' => 'الالتزامات المتداولة', 'en_name' => 'current obligations', 'description' => '', 'payable_receivable' => 0, 'editable' => '1',  'currency_id' => '1', 'is_active' => '1', 'accountable_id' => '1', 'accountable_type' => '1', 'create_by_user_id' => '1'],
            ['company_id' => '1', 'account_code' => '2101', 'type_code' => '2101', 'level' => '3', 'parent_id' => '21', 'ar_name' => 'الدائنون', 'en_name' => 'creditors', 'description' => 'مبالغ مستحقة لحسابات الموردين (بالأجل]', 'payable_receivable' => 0, 'editable' => '1',  'currency_id' => '1', 'is_active' => '1', 'accountable_id' => '1', 'accountable_type' => '1', 'create_by_user_id' => '1'],
            ['company_id' => '1', 'account_code' => '2102', 'type_code' => '2102', 'level' => '3', 'parent_id' => '21', 'ar_name' => 'مصروفات مستحقة', 'en_name' => 'accrued expenses', 'description' => 'مصروفات مستحقة على المنشأة لم يتم سدادها أو تسجيلها بعد', 'payable_receivable' => 0, 'editable' => '1',  'currency_id' => '1', 'is_active' => '1', 'accountable_id' => '1', 'accountable_type' => '1', 'create_by_user_id' => '1'],
            ['company_id' => '1', 'account_code' => '2103', 'type_code' => '2103', 'level' => '3', 'parent_id' => '21', 'ar_name' => 'الرواتب المستحقة', 'en_name' => 'Salaries owed', 'description' => 'رواتب مستحقة على المنشأة لم يتم سدادها بعد', 'payable_receivable' => 0, 'editable' => '1',  'currency_id' => '1', 'is_active' => '1', 'accountable_id' => '1', 'accountable_type' => '1', 'create_by_user_id' => '1'],
            ['company_id' => '1', 'account_code' => '2104', 'type_code' => '2104', 'level' => '3', 'parent_id' => '21', 'ar_name' => 'قروض قصيرة الأجل', 'en_name' => 'short term loans', 'description' => 'قروض متوقع سداده خلال عام أو فترة مالية أيهما أطول', 'payable_receivable' => 0, 'editable' => '1',  'currency_id' => '1', 'is_active' => '1', 'accountable_id' => '1', 'accountable_type' => '1', 'create_by_user_id' => '1'],
            ['company_id' => '1', 'account_code' => '2105', 'type_code' => '2105', 'level' => '3', 'parent_id' => '21', 'ar_name' => 'ضريبة القيمة المضافة المستحقة', 'en_name' => 'VAT due', 'description' => 'ضريبة القيمة المضافة مستحقة الدفع لهيئة الزكاة والدخل', 'payable_receivable' => 0, 'editable' => '1',  'currency_id' => '1', 'is_active' => '1', 'accountable_id' => '1', 'accountable_type' => '1', 'create_by_user_id' => '1'],
            ['company_id' => '1', 'account_code' => '2106', 'type_code' => '2106', 'level' => '3', 'parent_id' => '21', 'ar_name' => 'الضرائب المستحقة', 'en_name' => 'taxes due', 'description' => 'ضريبة الدخل المستحقة عن الشركات الأجنبية', 'payable_receivable' => 0, 'editable' => '1',  'currency_id' => '1', 'is_active' => '1', 'accountable_id' => '1', 'accountable_type' => '1', 'create_by_user_id' => '1'],
            ['company_id' => '1', 'account_code' => '2107', 'type_code' => '2107', 'level' => '3', 'parent_id' => '21', 'ar_name' => 'إيرادات غير مكتسبة', 'en_name' => 'unearned revenue', 'description' => 'مبالغ حصلت عليها المنشأة قبل تسليم البضاعة أو تقديم الخدمة', 'payable_receivable' => 0, 'editable' => '1',  'currency_id' => '1', 'is_active' => '1', 'accountable_id' => '1', 'accountable_type' => '1', 'create_by_user_id' => '1'],
            ['company_id' => '1', 'account_code' => '2108', 'type_code' => '2108', 'level' => '3', 'parent_id' => '21', 'ar_name' => 'مستحقات المؤسسة العامة للتأمينات الاجتماعية', 'en_name' => 'Dues of the General Organization for Social Insurance', 'description' => 'مبالغ مستحقة للمؤسسة العامة للتأمينات الاجتماعية', 'payable_receivable' => 0, 'editable' => '1',  'currency_id' => '1', 'is_active' => '1', 'accountable_id' => '1', 'accountable_type' => '1', 'create_by_user_id' => '1'],
            ['company_id' => '1', 'account_code' => '2109', 'type_code' => '2109', 'level' => '3', 'parent_id' => '21', 'ar_name' => 'مجمع الاستهلاك', 'en_name' => 'consumption complex', 'description' => 'مجمع استهلاك الأصول', 'payable_receivable' => 0, 'editable' => '1',  'currency_id' => '1', 'is_active' => '1', 'accountable_id' => '1', 'accountable_type' => '1', 'create_by_user_id' => '1'],
            ['company_id' => '1', 'account_code' => '210901', 'type_code' => '2109', 'level' => '4', 'parent_id' => '32', 'ar_name' => 'مجمع استهلاك المباني', 'en_name' => 'Building Consumption Complex', 'description' => 'مجمع استهلاك المباني', 'payable_receivable' => 0, 'editable' => '1',  'currency_id' => '1', 'is_active' => '1', 'accountable_id' => '1', 'accountable_type' => '1', 'create_by_user_id' => '1'],
            ['company_id' => '1', 'account_code' => '210902', 'type_code' => '2109', 'level' => '4', 'parent_id' => '32', 'ar_name' => 'مجمع استهلاك المعدات', 'en_name' => 'equipment consumption complex', 'description' => 'مجمع استهلاك المعدات', 'payable_receivable' => 0, 'editable' => '1',  'currency_id' => '1', 'is_active' => '1', 'accountable_id' => '1', 'accountable_type' => '1', 'create_by_user_id' => '1'],
            ['company_id' => '1', 'account_code' => '210903', 'type_code' => '2109', 'level' => '4', 'parent_id' => '32', 'ar_name' => 'مجمع استهلاك أجهزة مكتبية وطابعات', 'en_name' => 'Consumption of office equipment and printers', 'description' => 'مجمع استهلاك أجهزة مكتبية وطابعات', 'payable_receivable' => 0, 'editable' => '1',  'currency_id' => '1', 'is_active' => '1', 'accountable_id' => '1', 'accountable_type' => '1', 'create_by_user_id' => '1'],
            ['company_id' => '1', 'account_code' => '2110', 'type_code' => '2110', 'level' => '3', 'parent_id' => '21', 'ar_name' => 'مخصص مكافأة نهاية الخدمة', 'en_name' => 'Provision for end of severance pay', 'description' => 'مخصص مكافأة نهاية الخدمة للموظفين', 'payable_receivable' => 0, 'editable' => '1',  'currency_id' => '1', 'is_active' => '1', 'accountable_id' => '1', 'accountable_type' => '1', 'create_by_user_id' => '1'],
            ['company_id' => '1', 'account_code' => '22', 'type_code' => '22', 'level' => '2', 'parent_id' => '2', 'ar_name' => 'التزامات غير متداولة', 'en_name' => 'Non-current obligations', 'description' => '', 'payable_receivable' => 0, 'editable' => '1',  'currency_id' => '1', 'is_active' => '1', 'accountable_id' => '1', 'accountable_type' => '1', 'create_by_user_id' => '1'],
            ['company_id' => '1', 'account_code' => '2201', 'type_code' => '2201', 'level' => '3', 'parent_id' => '22', 'ar_name' => 'قروض طويلة أجل', 'en_name' => 'long term loans', 'description' => 'قروض طويلة الأجل مستحق سدادها خلال أكثر من عام أو فترة مالية أيهما أطول', 'payable_receivable' => 0, 'editable' => '1',  'currency_id' => '1', 'is_active' => '1', 'accountable_id' => '1', 'accountable_type' => '1', 'create_by_user_id' => '1'],
            ['company_id' => '1', 'account_code' => '3', 'type_code' => '3', 'level' => '1', 'parent_id' => '0', 'ar_name' => 'حقوق الملكية', 'en_name' => 'Property rights', 'description' => '', 'payable_receivable' => 0, 'editable' => '1',  'currency_id' => '1', 'is_active' => '1', 'accountable_id' => '1', 'accountable_type' => '1', 'create_by_user_id' => '1'],
            ['company_id' => '1', 'account_code' => '31', 'type_code' => '31', 'level' => '2', 'parent_id' => '3', 'ar_name' => 'رأس المال', 'en_name' => 'capital', 'description' => '', 'payable_receivable' => 0, 'editable' => '1',  'currency_id' => '1', 'is_active' => '1', 'accountable_id' => '1', 'accountable_type' => '1', 'create_by_user_id' => '1'],
            ['company_id' => '1', 'account_code' => '3101', 'type_code' => '3101', 'level' => '3', 'parent_id' => '31', 'ar_name' => 'رأس المال المسجل', 'en_name' => 'Registered capital', 'description' => 'رأس المال المسجل في السجل التجاري', 'payable_receivable' => 0, 'editable' => '1',  'currency_id' => '1', 'is_active' => '1', 'accountable_id' => '1', 'accountable_type' => '1', 'create_by_user_id' => '1'],
            ['company_id' => '1', 'account_code' => '3102', 'type_code' => '3102', 'level' => '3', 'parent_id' => '31', 'ar_name' => 'رأس المال الإضافي المدفوع', 'en_name' => 'Additional paid up capital', 'description' => 'رأس المال إضافي مدفوع من قبل المستثمرين لزيادة حقوق الملكية', 'payable_receivable' => 0, 'editable' => '1',  'currency_id' => '1', 'is_active' => '1', 'accountable_id' => '1', 'accountable_type' => '1', 'create_by_user_id' => '1'],
            ['company_id' => '1', 'account_code' => '32', 'type_code' => '32', 'level' => '2', 'parent_id' => '3', 'ar_name' => 'حقوق ملكية أخرى', 'en_name' => 'Other proprietary rights', 'description' => '', 'payable_receivable' => 0, 'editable' => '1',  'currency_id' => '1', 'is_active' => '1', 'accountable_id' => '1', 'accountable_type' => '1', 'create_by_user_id' => '1'],
            ['company_id' => '1', 'account_code' => '3201', 'type_code' => '3201', 'level' => '3', 'parent_id' => '32', 'ar_name' => 'أرصدة افتتاحية', 'en_name' => 'opening balances', 'description' => 'الأرصدة الافتتاحية', 'payable_receivable' => 0, 'editable' => '1',  'currency_id' => '1', 'is_active' => '1', 'accountable_id' => '1', 'accountable_type' => '1', 'create_by_user_id' => '1'],
            ['company_id' => '1', 'account_code' => '33', 'type_code' => '32', 'level' => '2', 'parent_id' => '3', 'ar_name' => 'احتياطيات', 'en_name' => 'reserves', 'description' => '', 'payable_receivable' => 0, 'editable' => '1',  'currency_id' => '1', 'is_active' => '1', 'accountable_id' => '1', 'accountable_type' => '1', 'create_by_user_id' => '1'],
            ['company_id' => '1', 'account_code' => '3301', 'type_code' => '3301', 'level' => '3', 'parent_id' => '33', 'ar_name' => 'احتياطي نظامي', 'en_name' => 'regular reserve', 'description' => 'تجنيب 10% من صافي الربح حتى يصل إلى 30% من رأس المال حسب نظام الشركات', 'payable_receivable' => 0, 'editable' => '1',  'currency_id' => '1', 'is_active' => '1', 'accountable_id' => '1', 'accountable_type' => '1', 'create_by_user_id' => '1'],
            ['company_id' => '1', 'account_code' => '3302', 'type_code' => '3301', 'level' => '3', 'parent_id' => '33', 'ar_name' => 'احتياطي ترجمة عملات أجنبية', 'en_name' => 'Reserve foreign currency translation', 'description' => 'احتياطي لتغطية الفرق بين سعر الصرف عند تسجيل الأصول أو الالتزامات عن سعر الصرف وقت السداد', 'payable_receivable' => 0, 'editable' => '1',  'currency_id' => '1', 'is_active' => '1', 'accountable_id' => '1', 'accountable_type' => '1', 'create_by_user_id' => '1'],
            ['company_id' => '1', 'account_code' => '34', 'type_code' => '34', 'level' => '2', 'parent_id' => '3', 'ar_name' => 'الأرباح المبقاة (أو الخسائر]', 'en_name' => 'Retained profits (or losses]', 'description' => '', 'payable_receivable' => 0, 'editable' => '1',  'currency_id' => '1', 'is_active' => '1', 'accountable_id' => '1', 'accountable_type' => '1', 'create_by_user_id' => '1'],
            ['company_id' => '1', 'account_code' => '3401', 'type_code' => '3401', 'level' => '3', 'parent_id' => '34', 'ar_name' => 'الأرباح والخسائر العاملة', 'en_name' => 'Operating profit and loss', 'description' => 'صافي الربح أو الخسارة للفترة المالية الحالية', 'payable_receivable' => 0, 'editable' => '1',  'currency_id' => '1', 'is_active' => '1', 'accountable_id' => '1', 'accountable_type' => '1', 'create_by_user_id' => '1'],
            ['company_id' => '1', 'account_code' => '3402', 'type_code' => '3401', 'level' => '3', 'parent_id' => '34', 'ar_name' => 'الأرباح المبقاة (أو الخسائر]', 'en_name' => 'Retained profits (or losses]', 'description' => 'أرباح مبقاة لغرض إعادة استثمارها في أعمال المنشأة', 'payable_receivable' => 0, 'editable' => '1',  'currency_id' => '1', 'is_active' => '1', 'accountable_id' => '1', 'accountable_type' => '1', 'create_by_user_id' => '1'],
            ['company_id' => '1', 'account_code' => '4', 'type_code' => '4', 'level' => '1', 'parent_id' => '0', 'ar_name' => 'الإيرادات', 'en_name' => 'Revenues', 'description' => '', 'payable_receivable' => 0, 'editable' => '1',  'currency_id' => '1', 'is_active' => '1', 'accountable_id' => '1', 'accountable_type' => '1', 'create_by_user_id' => '1'],
            ['company_id' => '1', 'account_code' => '41', 'type_code' => '41', 'level' => '2', 'parent_id' => '51', 'ar_name' => 'الإيرادات التشغيلية', 'en_name' => 'operating revenue', 'description' => '', 'payable_receivable' => 0, 'editable' => '1',  'currency_id' => '1', 'is_active' => '1', 'accountable_id' => '1', 'accountable_type' => '1', 'create_by_user_id' => '1'],
            ['company_id' => '1', 'account_code' => '4101', 'type_code' => '4101', 'level' => '3', 'parent_id' => '41', 'ar_name' => 'إيرادات المبيعات/ الخدمات', 'en_name' => 'Sales/Service Revenue', 'description' => 'الدخل الناتج من بيع سلعة أو تقديم خدمة', 'payable_receivable' => 0, 'editable' => '1',  'currency_id' => '1', 'is_active' => '1', 'accountable_id' => '1', 'accountable_type' => '1', 'create_by_user_id' => '1'],
            ['company_id' => '1', 'account_code' => '4102', 'type_code' => '4101', 'level' => '3', 'parent_id' => '41', 'ar_name' => 'مردودات المبيعات', 'en_name' => 'Sales returns', 'description' => 'بضاعة تم ردها من قبل العملاء', 'payable_receivable' => 0, 'editable' => '1',  'currency_id' => '1', 'is_active' => '1', 'accountable_id' => '1', 'accountable_type' => '1', 'create_by_user_id' => '1'],
            ['company_id' => '1', 'account_code' => '4103', 'type_code' => '4101', 'level' => '3', 'parent_id' => '41', 'ar_name' => 'الخصم على المبيعات', 'en_name' => 'Sales discount', 'description' => 'تخفيض في البضاعة بسبب عيب أو لزيادة المبيعات', 'payable_receivable' => 0, 'editable' => '1',  'currency_id' => '1', 'is_active' => '1', 'accountable_id' => '1', 'accountable_type' => '1', 'create_by_user_id' => '1'],
            ['company_id' => '1', 'account_code' => '42', 'type_code' => '42', 'level' => '2', 'parent_id' => '51', 'ar_name' => 'الإيرادات غير التشغيلية', 'en_name' => 'non-operating revenue', 'description' => '', 'payable_receivable' => 0, 'editable' => '1',  'currency_id' => '1', 'is_active' => '1', 'accountable_id' => '1', 'accountable_type' => '1', 'create_by_user_id' => '1'],
            ['company_id' => '1', 'account_code' => '4201', 'type_code' => '4201', 'level' => '3', 'parent_id' => '42', 'ar_name' => 'إيرادات أخرى', 'en_name' => 'Other income', 'description' => 'إيراد نتج من أنشطة أخرى للمنشأة غير النشاط الأساسي', 'payable_receivable' => 0, 'editable' => '1',  'currency_id' => '1', 'is_active' => '1', 'accountable_id' => '1', 'accountable_type' => '1', 'create_by_user_id' => '1'],
            ['company_id' => '1', 'account_code' => '5', 'type_code' => '5', 'level' => '1', 'parent_id' => '0', 'ar_name' => 'المصاريف', 'en_name' => 'Expenses', 'description' => '', 'payable_receivable' => 0, 'editable' => '1',  'currency_id' => '1', 'is_active' => '1', 'accountable_id' => '1', 'accountable_type' => '1', 'create_by_user_id' => '1'],
            ['company_id' => '1', 'account_code' => '51', 'type_code' => '51', 'level' => '2', 'parent_id' => '58', 'ar_name' => 'التكاليف المباشرة', 'en_name' => 'direct costs', 'description' => '', 'payable_receivable' => 0, 'editable' => '1',  'currency_id' => '1', 'is_active' => '1', 'accountable_id' => '1', 'accountable_type' => '1', 'create_by_user_id' => '1'],
            ['company_id' => '1', 'account_code' => '5101', 'type_code' => '5101', 'level' => '3', 'parent_id' => '51', 'ar_name' => 'تكلفة البضاعة المباعة', 'en_name' => 'Cost of goods sold', 'description' => 'تكلفة البضاعة المباعة', 'payable_receivable' => 0, 'editable' => '1',  'currency_id' => '1', 'is_active' => '1', 'accountable_id' => '1', 'accountable_type' => '1', 'create_by_user_id' => '1'],
            ['company_id' => '1', 'account_code' => '5101', 'type_code' => '5101', 'level' => '3', 'parent_id' => '51', 'ar_name' => 'مردودات المشتريات', 'en_name' => 'Returns purchases', 'description' => 'تكلفة البضاعة المباعة', 'payable_receivable' => 0, 'editable' => '1',  'currency_id' => '1', 'is_active' => '1', 'accountable_id' => '1', 'accountable_type' => '1', 'create_by_user_id' => '1'],
            ['company_id' => '1', 'account_code' => '5102', 'type_code' => '5101', 'level' => '3', 'parent_id' => '51', 'ar_name' => 'خصم المشتريات', 'en_name' => 'Purchase Discount', 'description' => 'تكلفة البضاعة المباعة', 'payable_receivable' => 0, 'editable' => '1',  'currency_id' => '1', 'is_active' => '1', 'accountable_id' => '1', 'accountable_type' => '1', 'create_by_user_id' => '1'],
            ['company_id' => '1', 'account_code' => '5103', 'type_code' => '5101', 'level' => '3', 'parent_id' => '51', 'ar_name' => 'مصاريف المشتريات', 'en_name' => 'Purchasing expenses', 'description' => 'تكلفة البضاعة المباعة', 'payable_receivable' => 0, 'editable' => '1',  'currency_id' => '1', 'is_active' => '1', 'accountable_id' => '1', 'accountable_type' => '1', 'create_by_user_id' => '1'],
            ['company_id' => '1', 'account_code' => '5104', 'type_code' => '5102', 'level' => '3', 'parent_id' => '51', 'ar_name' => 'رواتب وأجور', 'en_name' => 'Salaries and wages', 'description' => 'رواتب وأجور الموظفين العاملين في النشاط الأساسي للمنشأة', 'payable_receivable' => 0, 'editable' => '1',  'currency_id' => '1', 'is_active' => '1', 'accountable_id' => '1', 'accountable_type' => '1', 'create_by_user_id' => '1'],
            ['company_id' => '1', 'account_code' => '5105', 'type_code' => '5102', 'level' => '3', 'parent_id' => '51', 'ar_name' => 'عمولات البيع', 'en_name' => 'sales commissions', 'description' => 'عمولات البيع', 'payable_receivable' => 0, 'editable' => '1',  'currency_id' => '1', 'is_active' => '1', 'accountable_id' => '1', 'accountable_type' => '1', 'create_by_user_id' => '1'],
            ['company_id' => '1', 'account_code' => '5106', 'type_code' => '5102', 'level' => '3', 'parent_id' => '51', 'ar_name' => 'شحن وتخليص جمركي', 'en_name' => 'Shipping and customs clearance', 'description' => 'شحن وتخليص جمركي للبضاعة المستوردة من الخارج', 'payable_receivable' => 0, 'editable' => '1',  'currency_id' => '1', 'is_active' => '1', 'accountable_id' => '1', 'accountable_type' => '1', 'create_by_user_id' => '1'],
            ['company_id' => '1', 'account_code' => '52', 'type_code' => '52', 'level' => '2', 'parent_id' => '58', 'ar_name' => 'التكاليف التشغيلية', 'en_name' => 'operational costs', 'description' => '', 'payable_receivable' => 0, 'editable' => '1',  'currency_id' => '1', 'is_active' => '1', 'accountable_id' => '1', 'accountable_type' => '1', 'create_by_user_id' => '1'],
            ['company_id' => '1', 'account_code' => '5201', 'type_code' => '5201', 'level' => '3', 'parent_id' => '52', 'ar_name' => 'الرواتب والرسوم الإدارية', 'en_name' => 'Salaries and administrative fees', 'description' => 'رواتب وأجور الموظفين الإداريين', 'payable_receivable' => 0, 'editable' => '1',  'currency_id' => '1', 'is_active' => '1', 'accountable_id' => '1', 'accountable_type' => '1', 'create_by_user_id' => '1'],
            ['company_id' => '1', 'account_code' => '5202', 'type_code' => '5202', 'level' => '3', 'parent_id' => '52', 'ar_name' => 'تأمين طبي', 'en_name' => 'medical insurance', 'description' => 'تأمين طبي وعلاج', 'payable_receivable' => 0, 'editable' => '1',  'currency_id' => '1', 'is_active' => '1', 'accountable_id' => '1', 'accountable_type' => '1', 'create_by_user_id' => '1'],
            ['company_id' => '1', 'account_code' => '5203', 'type_code' => '5203', 'level' => '3', 'parent_id' => '52', 'ar_name' => 'مصاريف تسويقية ودعائية', 'en_name' => 'Marketing and advertising expenses', 'description' => 'مصاريف تسويقية ودعائية', 'payable_receivable' => 0, 'editable' => '1',  'currency_id' => '1', 'is_active' => '1', 'accountable_id' => '1', 'accountable_type' => '1', 'create_by_user_id' => '1'],
            ['company_id' => '1', 'account_code' => '5204', 'type_code' => '5202', 'level' => '3', 'parent_id' => '52', 'ar_name' => 'مصاريف الإيجار', 'en_name' => 'Rental expenses', 'description' => 'إيجار المكتب', 'payable_receivable' => 0, 'editable' => '1',  'currency_id' => '1', 'is_active' => '1', 'accountable_id' => '1', 'accountable_type' => '1', 'create_by_user_id' => '1'],
            ['company_id' => '1', 'account_code' => '5205', 'type_code' => '5205', 'level' => '3', 'parent_id' => '52', 'ar_name' => 'عمولات وحوافز', 'en_name' => 'Commissions and incentives', 'description' => 'مكافآت وحوافز للموظفين الإداريين', 'payable_receivable' => 0, 'editable' => '1',  'currency_id' => '1', 'is_active' => '1', 'accountable_id' => '1', 'accountable_type' => '1', 'create_by_user_id' => '1'],
            ['company_id' => '1', 'account_code' => '5206', 'type_code' => '5202', 'level' => '3', 'parent_id' => '52', 'ar_name' => 'تذاكر سفر', 'en_name' => 'traveling tickets', 'description' => 'مصاريف سفر', 'payable_receivable' => 0, 'editable' => '1',  'currency_id' => '1', 'is_active' => '1', 'accountable_id' => '1', 'accountable_type' => '1', 'create_by_user_id' => '1'],
            ['company_id' => '1', 'account_code' => '5207', 'type_code' => '5202', 'level' => '3', 'parent_id' => '52', 'ar_name' => 'التأمينات الاجتماعية', 'en_name' => 'Social Security', 'description' => 'نسبة التأمينات الاجتماعية تدفع شهرياً', 'payable_receivable' => 0, 'editable' => '1',  'currency_id' => '1', 'is_active' => '1', 'accountable_id' => '1', 'accountable_type' => '1', 'create_by_user_id' => '1'],
            ['company_id' => '1', 'account_code' => '5208', 'type_code' => '5202', 'level' => '3', 'parent_id' => '52', 'ar_name' => 'الرسوم الحكومية', 'en_name' => 'government fees', 'description' => 'مثل رسوم تجديد السجل التجاري والبلدية وختم الغرفة التجارية', 'payable_receivable' => 0, 'editable' => '1',  'currency_id' => '1', 'is_active' => '1', 'accountable_id' => '1', 'accountable_type' => '1', 'create_by_user_id' => '1'],
            ['company_id' => '1', 'account_code' => '5209', 'type_code' => '5202', 'level' => '3', 'parent_id' => '52', 'ar_name' => 'رسوم واشتراكات', 'en_name' => 'Fees and subscriptions', 'description' => 'رسوم اشتراكات', 'payable_receivable' => 0, 'editable' => '1',  'currency_id' => '1', 'is_active' => '1', 'accountable_id' => '1', 'accountable_type' => '1', 'create_by_user_id' => '1'],
            ['company_id' => '1', 'account_code' => '5210', 'type_code' => '5202', 'level' => '3', 'parent_id' => '52', 'ar_name' => 'مصاريف خدمات المكتب', 'en_name' => 'Office services expenses', 'description' => 'فواتير الماء والكهرباء والهاتف والانترنت', 'payable_receivable' => 0, 'editable' => '1',  'currency_id' => '1', 'is_active' => '1', 'accountable_id' => '1', 'accountable_type' => '1', 'create_by_user_id' => '1'],
            ['company_id' => '1', 'account_code' => '5211', 'type_code' => '5202', 'level' => '3', 'parent_id' => '52', 'ar_name' => 'مصاريف مكتبية ومطبوعات', 'en_name' => 'Office expenses and publications', 'description' => 'قرطاسية وطباعة', 'payable_receivable' => 0, 'editable' => '1',  'currency_id' => '1', 'is_active' => '1', 'accountable_id' => '1', 'accountable_type' => '1', 'create_by_user_id' => '1'],
            ['company_id' => '1', 'account_code' => '5212', 'type_code' => '5202', 'level' => '3', 'parent_id' => '52', 'ar_name' => 'مصاريف ضيافة', 'en_name' => 'Hospitality expenses', 'description' => 'ضيافة ونظافة تخص المنشأة', 'payable_receivable' => 0, 'editable' => '1',  'currency_id' => '1', 'is_active' => '1', 'accountable_id' => '1', 'accountable_type' => '1', 'create_by_user_id' => '1'],
            ['company_id' => '1', 'account_code' => '5213', 'type_code' => '5202', 'level' => '3', 'parent_id' => '52', 'ar_name' => 'عمولات بنكية', 'en_name' => 'Bank commissions', 'description' => 'رسوم بنكية عند تحويل من بنك محلي إلى بنك محلي آخر أو لطباعة كشف حساب مختوم', 'payable_receivable' => 0, 'editable' => '1',  'currency_id' => '1', 'is_active' => '1', 'accountable_id' => '1', 'accountable_type' => '1', 'create_by_user_id' => '1'],
            ['company_id' => '1', 'account_code' => '5214', 'type_code' => '5202', 'level' => '3', 'parent_id' => '52', 'ar_name' => 'مصاريف أخرى', 'en_name' => 'Other expenses', 'description' => 'مصاريف أخرى متنوعة', 'payable_receivable' => 0, 'editable' => '1',  'currency_id' => '1', 'is_active' => '1', 'accountable_id' => '1', 'accountable_type' => '1', 'create_by_user_id' => '1'],
            ['company_id' => '1', 'account_code' => '5215', 'type_code' => '5215', 'level' => '3', 'parent_id' => '52', 'ar_name' => 'مصاريف الإهلاك', 'en_name' => 'Depreciation expense', 'description' => 'إهلاك الأصول الثابتة', 'payable_receivable' => 0, 'editable' => '1',  'currency_id' => '1', 'is_active' => '1', 'accountable_id' => '1', 'accountable_type' => '1', 'create_by_user_id' => '1'],
            ['company_id' => '1', 'account_code' => '521501', 'type_code' => '5215', 'level' => '4', 'parent_id' => '82', 'ar_name' => 'مصروف إهلاك المباني', 'en_name' => 'Building depreciation expense', 'description' => 'مصروف إهلاك المباني', 'payable_receivable' => 0, 'editable' => '1',  'currency_id' => '1', 'is_active' => '1', 'accountable_id' => '1', 'accountable_type' => '1', 'create_by_user_id' => '1'],
            ['company_id' => '1', 'account_code' => '521502', 'type_code' => '5215', 'level' => '4', 'parent_id' => '82', 'ar_name' => 'مصروف إهلاك المعدات', 'en_name' => 'Equipment depreciation expense', 'description' => 'مصروف إهلاك المعدات', 'payable_receivable' => 0, 'editable' => '1',  'currency_id' => '1', 'is_active' => '1', 'accountable_id' => '1', 'accountable_type' => '1', 'create_by_user_id' => '1'],
            ['company_id' => '1', 'account_code' => '521503', 'type_code' => '5215', 'level' => '4', 'parent_id' => '82', 'ar_name' => 'مصروف إهلاك أجهزة مكتبية وطابعات', 'en_name' => 'Depreciation expense for office equipment and printers', 'description' => 'مصروف إهلاك أجهزة مكتبية وطابعات', 'payable_receivable' => 0, 'editable' => '1',  'currency_id' => '1', 'is_active' => '1', 'accountable_id' => '1', 'accountable_type' => '1', 'create_by_user_id' => '1'],
            ['company_id' => '1', 'account_code' => '5219', 'type_code' => '5202', 'level' => '3', 'parent_id' => '52', 'ar_name' => 'مصروف نقل ومواصلات', 'en_name' => 'Transportation and transportation expenses', 'description' => 'مصروف نقل ومواصلات (بنزين ، أجرة]', 'payable_receivable' => 0, 'editable' => '1',  'currency_id' => '1', 'is_active' => '1', 'accountable_id' => '1', 'accountable_type' => '1', 'create_by_user_id' => '1'],
            ['company_id' => '1', 'account_code' => '53', 'type_code' => '53', 'level' => '2', 'parent_id' => '58', 'ar_name' => 'مصاريف غير التشغيلية', 'en_name' => 'non-operating expenses', 'description' => '', 'payable_receivable' => 0, 'editable' => '1',  'currency_id' => '1', 'is_active' => '1', 'accountable_id' => '1', 'accountable_type' => '1', 'create_by_user_id' => '1'],
            ['company_id' => '1', 'account_code' => '5301', 'type_code' => '5301', 'level' => '3', 'parent_id' => '53', 'ar_name' => 'الزكاة', 'en_name' => 'zakat', 'description' => 'زكاة تدفع لهيئة الزكاة والدخل', 'payable_receivable' => 0, 'editable' => '1',  'currency_id' => '1', 'is_active' => '1', 'accountable_id' => '1', 'accountable_type' => '1', 'create_by_user_id' => '1'],
            ['company_id' => '1', 'account_code' => '5302', 'type_code' => '5302', 'level' => '3', 'parent_id' => '53', 'ar_name' => 'الضرائب', 'en_name' => 'taxes', 'description' => 'ضريبة الدخل تدفع لهيئة الزكاة والدخل', 'payable_receivable' => 0, 'editable' => '1',  'currency_id' => '1', 'is_active' => '1', 'accountable_id' => '1', 'accountable_type' => '1', 'create_by_user_id' => '1'],
            ['company_id' => '1', 'account_code' => '5303', 'type_code' => '5303', 'level' => '3', 'parent_id' => '53', 'ar_name' => 'ترجمة عملات أجنبية', 'en_name' => 'foreign currency translation', 'description' => 'الربح أو الخسارة من ترجمة عملات أجنبية', 'payable_receivable' => 0, 'editable' => '1',  'currency_id' => '1', 'is_active' => '1', 'accountable_id' => '1', 'accountable_type' => '1', 'create_by_user_id' => '1'],
            ['company_id' => '1', 'account_code' => '5304', 'type_code' => '5304', 'level' => '3', 'parent_id' => '53', 'ar_name' => 'فوائد', 'en_name' => 'Benefits', 'description' => 'فوائد بنكية', 'payable_receivable' => 0, 'editable' => '1',  'currency_id' => '1', 'is_active' => '1', 'accountable_id' => '1', 'accountable_type' => '1', 'create_by_user_id' => '1'],
       ];

        Account::insert($items);
        //
    }
}
