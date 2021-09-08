<?php

namespace App\Modules\Admin\people\Controllers;

use App\Http\Controllers\Controller;
use App\Modules\Admin\people\Models\Person;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;

class SupplierController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        // $name = 'محمد';

        // $suppliers = Person::with('person')->whereHas('person', function (Builder $query) use ($name) {
        //     $query->where('ar_name', $name);
        // })->get();

        // return $suppliers;
        
        return response()->json(['suppliers' => Person::with('person')->paginate($request->itemsPerPage != -1 ? $request->itemsPerPage : '')], 200);
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
        
         
        return $supplier = Person::create($request->all());
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
    public function update(Request $request, $id)
    {
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
    
       
         Person::where('person_id',$request->person_id)->delete();
        return response()->json(['suppliers' => Person::with('person')->paginate($request->itemsPerPage != -1 ? $request->itemsPerPage : '')], 200);


    }
}
