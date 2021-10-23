<?php

namespace App\Traits;

use App\Modules\Admin\Accounts\Models\Transaction;
use App\Modules\Admin\Purchases\Models\Purchase;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

trait PurchaseTrait
{
    public function allUnPaidPurchase(Request $request)
    {



        

        $purchases = Purchase::where('supplier_id', $request->supplier_id)->where('company_id', 1);
        if ($request->has('status_id')) {
            if ($request->status_id == 0)
                $purchases = $purchases->where('status_id', 1)->orwhere('status_id', 1);
            else
                $purchases = $purchases->where('status_id', 1);
        }


        $paid_amount = 0;
        $purchases = $purchases->get();

        foreach ($purchases as &$purchase) {

            $supp_documents = DB::table('supplemental_documentations')
                ->where('document_id', $purchase->id)
                ->where('document_type_id', 1)
                ->get();
            //return $supp_documents;
            $paid_amount += $purchase->paid_amount;
            foreach ($supp_documents as $supp_document) {
                $paid_amount += $supp_document->amount;
            }
            $purchase['remainder'] = $purchase->total_amount  - $paid_amount;
            //---reset
            $paid_amount = 0;
        }
        return $purchases;
    }
}
