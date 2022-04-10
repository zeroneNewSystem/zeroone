<?php

namespace Database\Seeders;

use App\Models\AccountType;
use Illuminate\Database\Seeder;

class AccountTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $items = [
            ['company_id' => '1', 'type_code' => '1', 'ar_name' => 'الاصول', 'en_name' => 'assets'],
            ['company_id' => '1', 'type_code' => '11', 'ar_name' => 'الأصول المتداولة', 'en_name' => 'Assets'],
            ['company_id' => '1', 'type_code' => '1101', 'ar_name' => 'النقدية ومافي حكمها', 'en_name' => 'Cash and cash equivalents'],
            ['company_id' => '1', 'type_code' => '110102', 'ar_name' => 'عهد نقدية', 'en_name' => 'petty cash'],
            ['company_id' => '1', 'type_code' => '1102', 'ar_name' => 'حساب البنك', 'en_name' => 'Bank account'],
            ['company_id' => '1', 'type_code' => '1103', 'ar_name' => 'المدينون', 'en_name' => 'debtors'],
            ['company_id' => '1', 'type_code' => '1104', 'ar_name' => 'مصروفات مقدمة', 'en_name' => 'Advanced expenses'],
            ['company_id' => '1', 'type_code' => '1105', 'ar_name' => 'سلف موظفين', 'en_name' => 'ancestor of employees'],
            ['company_id' => '1', 'type_code' => '1106', 'ar_name' => 'المخزون', 'en_name' => 'Inventory'],
            ['company_id' => '1', 'type_code' => '12', 'ar_name' => 'الأصول غير المتداولة', 'en_name' => 'Non-current assets'],
            ['company_id' => '1', 'type_code' => '1201', 'ar_name' => 'عقارات وآلات ومعدات', 'en_name' => 'Real estate, machinery and equipment'],
            
            ['company_id' => '1', 'type_code' => '1202', 'ar_name' => 'الأصول غير الملموسة', 'en_name' => 'intangible assets'],
            ['company_id' => '1', 'type_code' => '1203', 'ar_name' => 'العقارات الاستثمارية', 'en_name' => 'investment real estate'],
            ['company_id' => '1', 'type_code' => '2', 'ar_name' => 'الالتزامات', 'en_name' => 'commitments'],
            ['company_id' => '1', 'type_code' => '21', 'ar_name' => 'الالتزامات المتداولة', 'en_name' => 'current obligations'],
            ['company_id' => '1', 'type_code' => '2101', 'ar_name' => 'الدائنون', 'en_name' => 'creditors'],
            ['company_id' => '1', 'type_code' => '2102', 'ar_name' => 'مصاريف مستحقة', 'en_name' => 'deserved payments'],
            ['company_id' => '1', 'type_code' => '2103', 'ar_name' => 'الرواتب والمبالغ المستحقة للموظفين', 'en_name' => 'Salaries and amounts owed to employees'],
            ['company_id' => '1', 'type_code' => '2104', 'ar_name' => 'قروض قصيرة الأجل', 'en_name' => 'short term loans'],
            ['company_id' => '1', 'type_code' => '2105', 'ar_name' => 'الضرائب المستحقة', 'en_name' => 'taxes due'],
            ['company_id' => '1', 'type_code' => '2106', 'ar_name' => 'الضرائب المستحقة', 'en_name' => 'taxes due'],
            ['company_id' => '1', 'type_code' => '2107', 'ar_name' => 'الإيرادات المقدمة', 'en_name' => 'Revenue provided'],
            ['company_id' => '1', 'type_code' => '2108', 'ar_name' => 'التزامات متداولة أخرى', 'en_name' => 'Other current obligations'],
            ['company_id' => '1', 'type_code' => '2109', 'ar_name' => 'مجمع الاستهلاك', 'en_name' => 'consumption complex'],
            ['company_id' => '1', 'type_code' => '2110', 'ar_name' => 'مخصص مكافأة نهاية الخدمة', 'en_name' => 'Provision for end of severance pay'],
            ['company_id' => '1', 'type_code' => '22', 'ar_name' => 'الالتزامات غير المتداولة', 'en_name' => 'Non-current liabilities'],
            ['company_id' => '1', 'type_code' => '2201', 'ar_name' => 'قروض طويلة الأجل', 'en_name' => 'long term loans'],
            ['company_id' => '1', 'type_code' => '3', 'ar_name' => 'حقوق الملاك', 'en_name' => 'Owner\'s rights'],
            ['company_id' => '1', 'type_code' => '31', 'ar_name' => 'رأس المال المصدر', 'en_name' => 'Issued capital'],
            ['company_id' => '1', 'type_code' => '3101', 'ar_name' => 'رأس المال', 'en_name' => 'capital'],
            ['company_id' => '1', 'type_code' => '3102', 'ar_name' => 'رأس المال الإضافي المدفوع', 'en_name' => 'Additional paid up capital'],
            ['company_id' => '1', 'type_code' => '32', 'ar_name' => 'حقوق الملاك الأخرى', 'en_name' => 'Other rights of owners'],
            ['company_id' => '1', 'type_code' => '3201', 'ar_name' => 'حقوق ملكية أخرى', 'en_name' => 'Other proprietary rights'],
            ['company_id' => '1', 'type_code' => '3301', 'ar_name' => 'الاحتياطيات', 'en_name' => 'reserves'],
            ['company_id' => '1', 'type_code' => '34', 'ar_name' => 'أرباح/خسائر مبقاة', 'en_name' => 'Retained profits/losses'],
            ['company_id' => '1', 'type_code' => '3401', 'ar_name' => 'الأرباح المبقاة (أو الخسائر)', 'en_name' => 'Retained profits (or losses]'],
            ['company_id' => '1', 'type_code' => '4', 'ar_name' => 'الايرادات', 'en_name' => 'Revenues'],
            ['company_id' => '1', 'type_code' => '41', 'ar_name' => 'الايرادات التشغيلية', 'en_name' => 'operating revenue'],
            ['company_id' => '1', 'type_code' => '4101', 'ar_name' => 'المبيعات', 'en_name' => 'the sales'],
            ['company_id' => '1', 'type_code' => '42', 'ar_name' => 'الإيرادات الأخرى', 'en_name' => 'Other revenue'],
            ['company_id' => '1', 'type_code' => '4201', 'ar_name' => 'إيرادات أخرى', 'en_name' => 'Other income'],
            ['company_id' => '1', 'type_code' => '5', 'ar_name' => 'المصاريف', 'en_name' => 'Expenses'],
            ['company_id' => '1', 'type_code' => '51', 'ar_name' => 'التكلفة المباشرة', 'en_name' => 'direct cost'],
            ['company_id' => '1', 'type_code' => '5101', 'ar_name' => 'تكلفة المبيعات', 'en_name' => 'Sales cost'],
            ['company_id' => '1', 'type_code' => '5102', 'ar_name' => 'تكاليف مباشرة أخرى', 'en_name' => 'Other direct costs'],
            ['company_id' => '1', 'type_code' => '52', 'ar_name' => 'تكاليف تشغيلية', 'en_name' => 'operational costs'],
            ['company_id' => '1', 'type_code' => '5201', 'ar_name' => 'الرواتب', 'en_name' => 'salaries'],
            ['company_id' => '1', 'type_code' => '5202', 'ar_name' => 'مصاريف عمومية وإدارية', 'en_name' => 'General and administrative expenses'],
            ['company_id' => '1', 'type_code' => '5203', 'ar_name' => 'مصاريف تسويقية', 'en_name' => 'Marketing expenses'],
            ['company_id' => '1', 'type_code' => '5205', 'ar_name' => 'مكافآت وحوافز', 'en_name' => 'Bonuses and incentives'],
            ['company_id' => '1', 'type_code' => '5215', 'ar_name' => 'مصاريف الاستهلاك', 'en_name' => 'depreciation expenses'],
            ['company_id' => '1', 'type_code' => '5202', 'ar_name' => 'مصاريف عمومية وإدارية', 'en_name' => 'General and administrative expenses'],
            ['company_id' => '1', 'type_code' => '53', 'ar_name' => 'تكاليف غير تشغيلية', 'en_name' => 'non-operating costs'],
            ['company_id' => '1', 'type_code' => '5301', 'ar_name' => 'الزكاة', 'en_name' => 'zakat'],
            ['company_id' => '1', 'type_code' => '5302', 'ar_name' => 'ضرائب', 'en_name' => 'taxes'],
            ['company_id' => '1', 'type_code' => '5303', 'ar_name' => 'ترجمة عملات أجنبية', 'en_name' => 'foreign currency translation'],
            ['company_id' => '1', 'type_code' => '5304', 'ar_name' => 'مصروف فوائد', 'en_name' => 'interest expense'],
        ];
        //
        AccountType::insert($items);
    }
}
