<?php


namespace App\Modules\Admin\Bonds\Controllers;

use App\Http\Controllers\Controller;
use App\Models\SupplementalBilling;
use App\Modules\Admin\Accounts\Models\Transaction;
use App\Modules\Admin\people\Models\Person;
use App\Modules\Admin\people\Models\Customer;
use App\Modules\Admin\Products\Models\Inventory;
use App\Modules\Admin\Bills\Models\Bill;
use App\Modules\Admin\Bonds\Models\Bond;
use App\Modules\Admin\Bonds\Models\BondDetail;
use App\Traits\AccountTrait;
use App\Traits\BillTrait;
use App\Traits\TranstactionTrait;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class BondController extends Controller
{

    use AccountTrait;
    use BillTrait;

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */


    public function index($id)
    {
        $bond =  DB::table('bonds')->where('id', $id)->get()[0];


        $methods = Transaction::where('bill_id', $id)
            ->where('bill_type_id', 1)
            ->where('credit', -1)
            ->get();

        $bond->payment_methods = $methods;






        $bond_details =  DB::table('bond_details')
            ->where('bill_id', $id)
            ->where('bill_type_id', 1)
            ->leftjoin('products', 'bond_details.product_id', '=', 'products.id')
            ->get();



        // return      $bond_details;


        $units = [];
        foreach ($bond_details as &$bond_detail) {
            $pivots = DB::table('prdct_units_products')->where('product_id', $bond_detail->id)->get();
            foreach ($pivots as &$pivot) {
                $unit = DB::table('prdct_units')->where('id', $pivot->prdct_unit_id)->get();
                //return $unit[0];
                $unit[0]->pivot = $pivot;
                $units[] = $unit[0];
            }


            $bond_detail->units = $units;
        }


        $bond->bond_details = $bond_details;

        return [
            'bond' => $bond,
            'customers' => Person::where('company_id', '1')->where('is_customer', '1')->get(),


        ];
    }

    public function index2(Request $request)
    {
        $bonds =  DB::table('bonds')->get();
        foreach ($bonds as &$bond) {

            $bond_details =  DB::table('bond_details')
                ->where('bill_id', 1)
                ->where('bill_type_id', 1)
                ->leftjoin('products', 'bond_details.product_id', '=', 'products.id')
                ->get();



            $units = [];
            foreach ($bond_details as &$bond_detail) {
                $pivots = DB::table('prdct_units_products')->where('product_id', $bond_detail->id)->get();
                foreach ($pivots as &$pivot) {
                    $unit = DB::table('prdct_units')->where('id', $pivot->prdct_unit_id)->get();
                    //return $unit[0];
                    $unit[0]->pivot = $pivot;
                    $units[] = $unit[0];
                }


                $bond_detail->units = $units;
            }


            $bond->bond_details = $bond_details;
        }
        return $bonds;
    }
    public function index1(Request $request)
    {


        $bonds = Bond::where('ar_name', 'LIKE', '%' . $request->search . '%')
            ->with('bond_details')

            ->orderBy('id', 'DESC')
            // ->orWhere('en_name', 'LIKE', '%' . $request->search . '%')
            // ->orWhere('barcode', 'LIKE', '%' . $request->search . '%')
            ->paginate($request->itemsPerPage != -1 ? $request->itemsPerPage : '');

        return response()->json([
            'bonds' => $bonds,
        ]);

        //
        //return view('Bonds::index');


    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {

        return [
            'customers' => Person::where('company_id', '1')->where('is_customer', '1')->get(),
            'accounts' => $this->cashAndBanks()
        ];
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        if ($request['amount'] > 0) {


            $request['company_id'] = 1;


            $bond = Bond::create($request->all());




            $customer_account_id = Person::find($request->person_id)['customer_account_id'];

            $customer_account = [
                "company_id" => 1,
                "account_id" => $customer_account_id,
                "debit" => $request['type_id'] == 1 ?  $request['amount'] : 0,
                "credit" => $request['type_id'] == 2 ?  $request['amount'] : 0,
                "bill_id" => $bond->id,
                "bill_type_id" => 2,
                "currency_code" => 1,
                "currency_rate" => 1,
                "description" => $request['type_id'] == 1 ? 'صرف للعميل' : 'قبض من العميل'
            ];
            $this->addTransactionEntry($customer_account);





            $payment_to_customer = [
                "company_id" => 1,
                "account_id" => $request['account_id'], //5103
                "debit" =>  $request['amount'],
                "credit" => 0,
                "bill_id" => $bond->id,
                "bill_type_id" => 2,
                "currency_code" => 1,
                "currency_rate" => 1,
                "description" => 'دفعة للعميل',
            ];
            $this->addTransactionEntry($payment_to_customer);
            $request['customer_id'] = $request->person_id;
            $unpaid_bills = $this->allUnPaidBill($request);


            $remainder = $request['amount'];

            $used = false;

            foreach ($unpaid_bills as $unpaid_bill) {

                if ($remainder == 0) {

                    if ($used)
                        Bond::find($bond->id)->update(['status_id' => 2]);
                    break;
                }

                if ($remainder >= $unpaid_bill['remainder']) {
                    $used = true;
                    /* create sup-doc for unpaid_bills*/
                    $sup_doc_model = [
                        'company_id' => 1,
                        "bill_id" => $unpaid_bill['id'],
                        "bill_type_id" => 1,
                        'amount' => $unpaid_bill['remainder'],
                        "confirmation_bill_id" => $bond->id,
                        "confirmation_bill_type_id" => 2,
                    ];
                    SupplementalBilling::create($sup_doc_model);
                    $remainder = $remainder - $unpaid_bill['remainder'];
                    /* make bill paid*/
                    Bill::find($unpaid_bill['id'])->update(['status_id' => 3]);
                    continue;
                }
                $sup_doc_model = [
                    'company_id' => 1,
                    "bill_id" => $unpaid_bill['id'],
                    "bill_type_id" => 1,
                    'amount' => $remainder,
                    "confirmation_bill_id" => $bond->id,
                    "confirmation_bill_type_id" => 2,
                ];
                SupplementalBilling::create($sup_doc_model);
                Bill::find($unpaid_bill['id'])->update(['status_id' => 4]);
                Bond::find($bond->id)->update(['status_id' => 3]);
                break;
                /*---------------*/
            }




            return $bond;
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Bond  $bond
     * @return \Illuminate\Http\Response
     */
    public function one($id)
    {
        $bond = Bond::select('bonds.*', 'people.company_name', 'accounts.account_code', 'accounts.ar_name')->where('bonds.company_id', '1')->where('bonds.id', $id);




        $bond = $bond->leftJoin('people', 'people.id', 'bonds.person_id');
        $bond = $bond->leftJoin('accounts', 'accounts.id', 'bonds.account_id');

        $bond = $bond->get();
        if (!count($bond))
            return [
                'code' => 20,
                'status' => 'error',
                'message' => 'No Bond '
            ];

        $bond = $bond[0];

        $sup_doc = SupplementalBilling::where('confirmation_bill_id', $id)->where('confirmation_bill_type_id', 2)
            ->leftJoin('bills', 'bills.id', 'bill_id')->select('supplemental_billings.*', 'supplemental_billings.id as sup_doc_id', 'bills.*');
        $bond['spentAmount'] = $sup_doc->sum('amount');
        $bond['uses_of_bond'] = $sup_doc->get();
        return $bond;
    }
    public function all(Request $request)
    {


        $search  = json_decode($request->search, true);
        $bonds = Bond::select('bonds.*', 'people.company_name', 'accounts.account_code', 'accounts.ar_name')->where('bonds.company_id', '1');



        if ($search && $search['company_name']) {

            $company_name = $search['company_name'];
            $bonds = $bonds->whereHas('person', function ($q) use ($company_name) {
                $q->where('company_name', 'like', '%' . $company_name . '%');
            });
        };



        if ($search && $search['bond_reference'])
            $bonds = $bonds->where('bond_reference', 'like', '%' . $search['bond_reference'] . '%');
        if ($search && $search['type_id'])
            $bonds = $bonds->where('bonds.type_id', 'like', '%' . $search['type_id'] . '%');
        if ($search && $search['date_from'])
            $bonds = $bonds->where('date', '>', $search['date_from']);
        if ($search && $search['date_to'])
            $bonds = $bonds->where('date', '<', $search['date_to']);
        if ($search && $search['status_id'])
            $bonds = $bonds->where('status_id', $search['status_id']);
        $bonds = $bonds->leftJoin('people', 'people.id', 'bonds.person_id');
        $bonds = $bonds->leftJoin('accounts', 'accounts.id', 'bonds.account_id');

        if ($request->has('itemsPerPage'))
            $bonds = $bonds->orderBy('id', 'DESC')->paginate($request->itemsPerPage != -1 ? $request->itemsPerPage : '');
        else
            $bonds = $bonds->orderBy('id', 'DESC')->paginate(10);


        foreach ($bonds as &$bond) {

            $bond->spentAmount = SupplementalBilling::where('confirmation_bill_id', $bond->id)->where('confirmation_bill_type_id', 2)->sum('amount');
        }

        return $bonds;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Bond  $bond
     * @return \Illuminate\Http\Response
     */
    public function edit(Bond $bond)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Bond  $bond
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Bond  $bond
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        Bond::where('id', $request->bond_id)->delete();
        SupplementalBilling::where('confirmation_bill_id', $request->bond_id)->where('confirmation_bill_type_id', 2)->delete();
        return $this->all($request);
    }
    public function destroySupDoc(Request $request)
    {
        SupplementalBilling::where('id', $request->id)->delete();

        // change status of bond

        $sup_doc = SupplementalBilling::where('confirmation_bill_id', $request->bond_id)->where('confirmation_bill_type_id', 2)->get();


        if (count($sup_doc))
            Bond::find($request->bond_id)->update(['status_id' => 2]);
        else
            Bond::find($request->bond_id)->update(['status_id' => 1]);

        
        return $this->one($request->bond_id);
    }
    private function addTransactionEntry($entry)
    {


        $account_id = Transaction::create($entry);
        return true;
    }
}
