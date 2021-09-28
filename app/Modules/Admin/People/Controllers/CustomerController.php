<?php

namespace App\Modules\Admin\people\Controllers;

use App\Http\Controllers\Controller;
use App\Modules\Admin\people\Models\Person;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;

class CustomerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {


        $search  = json_decode($request->search, true);



        $customers = Person::where('company_id', '1')->where('is_customer', '1');
        if ($search['company_name'])
            $customers = $customers->where('company_name', $search['company_name']);

        if ($search['name'])
            $customers = $customers->where('name', $search['name']);
        if ($search['is_customer_active'] !== "")
            $customers = $customers->where('is_customer_active', $search['is_customer_active']);

        // if ($search['email'])
        //     $customers = $customers->where('email', $request->email);

        if ($search['phone']) {

            $customers = $customers->where('phone01', $search['phone'])->orWhere('phone02', $search['phone']);
        }
        $customers = $customers->orderBy('id', 'DESC')
            ->paginate($request->itemsPerPage != -1 ? $request->itemsPerPage : '');

        // $name = 'محمد';

        // $customers = Person::with('person')->whereHas('person', function (Builder $query) use ($name) {
        //     $query->where('ar_name', $name);
        // })->get();

        // return $customers;

        return response()->json(['customers' => $customers], 200);

        //return Person::where('company_id','1')->where('is_customer','1')->get();    

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
        return response()->json(['customers' => Person::paginate($request->itemsPerPage != -1 ? $request->itemsPerPage : '')], 200);
    }
}
