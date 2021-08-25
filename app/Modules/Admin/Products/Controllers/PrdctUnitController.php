<?php

namespace App\Modules\Admin\Products\Controllers;

use App\Http\Controllers\Controller;
use App\Modules\Admin\Products\Models\PrdctUnit;
use Illuminate\Http\Request;

class PrdctUnitController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(['units' => PrdctUnit::all()], 200);
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
        $request = $request->all();
        $request['company_id'] = 1;


        PrdctUnit::create($request);
        return response()->json(['units' => PrdctUnit::all()], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\PrdctUnit  $prdctUnit
     * @return \Illuminate\Http\Response
     */
    public function show(PrdctUnit $prdctUnit)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\PrdctUnit  $prdctUnit
     * @return \Illuminate\Http\Response
     */
    public function edit(PrdctUnit $prdctUnit)
    {
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\PrdctUnit  $prdctUnit
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        PrdctUnit::find($request->id)->update($request->all());
        return response()->json(['units' => PrdctUnit::all()], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\PrdctUnit  $prdctUnit
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $res = PrdctUnit::where('id', $id)->delete();

        return response()->json(['units' => PrdctUnit::all()], 200);
    }
}
