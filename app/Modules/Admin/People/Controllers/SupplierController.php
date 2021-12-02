<?php

namespace App\Modules\Admin\people\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Receipt;
use App\Modules\Admin\people\Models\Person;
use App\Modules\Admin\people\Models\Supplier;
use App\Modules\Admin\Purchases\Models\Purchase;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use PhpOffice\PhpSpreadsheet\Calculation\TextData\Search;

class SupplierController extends Controller
{
    


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function index(Request $request)
    {
        /*$List = Schema::getColumnListing('people');
        
        foreach ($List as &$item)
            $item = 'people.' . $item;

        return $List;*/



        $search  = json_decode($request->search, true);

        if (!$search)
            return Person::where('company_id', '1')->where('is_supplier', '1')->get();

        $suppliers = DB::table('people')
            ->select(
                'people.*',
                'acc.id as acc_id',
                'trans.id as trans_id',
                'pur.id as pur_id',
                'supdoc.id as supdoc_id',

                'trans.debit',
                'trans.credit',
                'pur.maturity_date',
                'supdoc.amount',
            )


            ->where('people.company_id', '1')->where('is_supplier', '1');

        if ($search['company_name'])
            $suppliers = $suppliers->where('company_name', 'like', '%' . $search['company_name'] . '%');

        if ($search['name'])
            $suppliers = $suppliers->where('name', 'like', '%' . $search['name'] . '%');

        if ($search['is_supplier_active'] !== "")
            $suppliers = $suppliers->where('is_supplier_active', $search['is_supplier_active']);

       

        if ($search['phone']) {

            $suppliers = $suppliers->where('phone01', $search['phone'])->orWhere('phone02', $search['phone']);
        }


        //$suppliers = $suppliers->leftJoin('accounts as acc', 'people.id', '=', 'acc.accountable_id');
        $suppliers = $suppliers->leftJoin(
            'accounts as acc',
            function ($leftJoin) {
                $leftJoin
                    ->on('people.id', '=', 'acc.accountable_id')
                    ->where('acc.accountable_type', 1);
            }

        );
        $suppliers = $suppliers->leftJoin('transactions as trans', 'acc.id', '=', 'trans.account_id');

        $suppliers = $suppliers->leftJoin(
            'purchases as pur',
            function ($leftJoin) {
                $leftJoin
                    ->on('trans.document_id', '=', 'pur.id')
                    ->where('trans.document_type_id', 1)
                    ->where('pur.maturity_date', '<', date('Y-m-d'))
                    ->where('pur.payment_status_id', '!=', 5)
                    ->where('pur.payment_status_id', '!=', 5);
            }

        );
        $suppliers = $suppliers->leftJoin(
            'supplemental_documentations as supdoc',
            function ($leftJoin) {
                $leftJoin
                    ->on('supdoc.document_id', '=', 'pur.id')
                    ->where('supdoc.document_type_id', 1);
            }

        );

        $suppliers = $suppliers->orderBy('people.id', 'DESC')->paginate($request->itemsPerPage != -1 ? $request->itemsPerPage : '');

        // $name = 'محمد';

        // $suppliers = Person::with('person')->whereHas('person', function (Builder $query) use ($name) {
        //     $query->where('ar_name', $name);
        // })->get();

        // return $suppliers;





        return response()->json(['suppliers' => $suppliers], 200);

        //return Person::where('company_id','1')->where('is_supplier','1')->get();    


    }



    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request['company_id'] = 1;
        $request['person_id'] = 1;


        return Person::create($request->all())->id;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request)

    {

        if ($request->has('pur_itemsPerPage')) {
            $purchases  =  Purchase::where('supplier_id', $request->id)->orderBy('id', 'DESC')->paginate($request->pur_itemsPerPage != -1 ? $request->pur_itemsPerPage : '', ['*'], 'pur_page');
            return ['purchases' => $purchases];
        }

        if ($request->has('receipt_itemsPerPage')) {
            
            $receipts  =  Receipt::where('person_id', $request->id)->orderBy('id', 'DESC')->paginate($request->receipt_itemsPerPage != -1 ? $request->receipt_itemsPerPage : '', ['*'], 'receipt_page');
            return ['receipts' => $receipts];
        }


        $supplier = DB::table('people')->find($request->id);

        $balance = 0;
        $account = DB::table('accounts')->where('accountable_id', $request->id)->where('accountable_type', 1)->get();
        $transactions = DB::table('transactions')->where('account_id', $account[0]->id)->get();

        foreach ($transactions as $transaction) {
            $balance += $transaction->credit - $transaction->debit;
        }

        $purchases  =  Purchase::where('supplier_id', $request->id)->get();
        $purchases_count = $purchases->count();
        $total_amount = 0;
        $total_amount_with_maturity_date = 0;
        $paid_amount = 0;
        $paid_amount_with_maturity_date = 0;

        foreach ($purchases as $purchase) {
            $total_amount += $purchase->total_amount;
            $supp_documents = DB::table('supplemental_documentations')->where('document_id', $purchase->id)->where('document_type_id', 1)->get();
            if ($purchase->maturity_date <  date('Y-m-d') && $purchase->maturity_date != 5) {
                $total_amount_with_maturity_date +=  $purchase->total_amount;
                $paid_amount_with_maturity_date +=  $purchase->paid_amount;
                foreach ($supp_documents as $supp_document) {
                    $paid_amount_with_maturity_date += $supp_document->amount;
                }
            }
            $paid_amount += $purchase->paid_amount;
            foreach ($supp_documents as $supp_document) {
                $paid_amount += $supp_document->amount;
            }
        }


        

        $remain_amount = $total_amount - $paid_amount;
        $arrears = $total_amount_with_maturity_date - $paid_amount_with_maturity_date;


        return
            [
                'remain_amount' => $remain_amount,
                'total_amount' => $total_amount,
                'arrears' => $arrears,
                'supplier' => $supplier,
                'purchases_count' => $purchases_count,
                'balance' => $balance,

            ];
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $request->id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        Person::find($request->id)->update($request->all());
        return response()->json(['types' => Person::all()], 200);
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)

    {


        Person::where('id', $request->person_id)->delete();
        return $this->index($request);
    }
}
