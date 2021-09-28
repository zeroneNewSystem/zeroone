<?php

namespace App\Modules\Admin\people\Controllers;

use App\Http\Controllers\Controller;
use App\Modules\Admin\people\Models\Person;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
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


        $search  = json_decode($request->search, true);

        if (!$search)
            return Person::where('company_id', '1')->where('is_supplier', '1')->get();

        $suppliers = DB::table('people')
            ->select(
                'people.*',
                'acc.id as acc_id',
                'trans.account_id',
                'trans.debit',
                'trans.credit',
                'pur.maturity_date',
                'pur.id as pur_id'
            )


            ->where('people.company_id', '1')->where('is_supplier', '1');

        if ($search['company_name'])
            $suppliers = $suppliers->where('company_name', $search['company_name']);

        if ($search['name'])
            $suppliers = $suppliers->where('name', $search['name']);
        if ($search['is_supplier_active'] !== "")
            $suppliers = $suppliers->where('is_supplier_active', $search['is_supplier_active']);

        // if ($search['email'])
        //     $suppliers = $suppliers->where('email', $request->email);

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
        $suppliers = $suppliers->leftJoin(
            'purchases as pur',
            function ($leftJoin) {
                $leftJoin
                    ->on('people.id', '=', 'pur.supplier_id')
                    ->where('pur.maturity_date', '<', date('Y-m-d'));
            }

        );
        $suppliers = $suppliers->leftJoin('transactions as trans', 'acc.id', '=', 'trans.account_id');
        $suppliers = $suppliers->orderBy('people.id', 'DESC')->paginate($request->itemsPerPage != -1 ? $request->itemsPerPage : '');

        // $name = 'محمد';

        // $suppliers = Person::with('person')->whereHas('person', function (Builder $query) use ($name) {
        //     $query->where('ar_name', $name);
        // })->get();

        // return $suppliers;





        return response()->json(['suppliers' => $suppliers], 200);

        //return Person::where('company_id','1')->where('is_supplier','1')->get();    


    }


    public function index23(Request $request)
    {




        // $name = 'محمد';

        // $suppliers = Person::with('person')->whereHas('person', function (Builder $query) use ($name) {
        //     $query->where('ar_name', $name);
        // })->get();

        // return $suppliers;

        //return response()->json(['suppliers' => Person::paginate($request->itemsPerPage != -1 ? $request->itemsPerPage : '')], 200);

        return Person::where('company_id', '1')->where('is_supplier', '1')->get();
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
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
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
        Person::search($request->id)->update($request->all());
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
        return response()->json(['suppliers' => Person::paginate($request->itemsPerPage != -1 ? $request->itemsPerPage : '')], 200);
    }
}
