<?php

namespace App\Exports;

use App\Modules\Admin\Accounts\Models\Account;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;


class AccountsExport implements FromCollection, WithHeadings
{
    /**
     * @return \Illuminate\Support\Collection
     */
    public function collection()
    {
        return Account::all();
    }
    public function headings(): array
    {
        return [
            "id", "company_id", "account_code",
            "ar_name", "en_name", "description", "payable_receivable", "editable", "cashable", "parent_id",
            "type_code", "level", "currency_id",
            "is_active", "accountable_id", "accountable_type",
            "create_by_user_id", "created_at", "updated_at",
            "deleted_at",
        ];
    }
}
