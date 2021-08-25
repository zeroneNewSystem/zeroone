<?php

namespace App\Modules\Admin\Products\Controllers;

use App\Http\Controllers\Controller;
use App\Modules\Admin\Products\Models\PrdctType;
use Illuminate\Http\Request;

class PrdctTypeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(['types' => PrdctType::all()], 200);
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


        PrdctType::create($request);
        return response()->json(['types' => PrdctType::all()], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\PrdctType  $prdctType
     * @return \Illuminate\Http\Response
     */
    public function show(PrdctType $prdctType)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\PrdctType  $prdctType
     * @return \Illuminate\Http\Response
     */
    public function edit(PrdctType $prdctType)
    {
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\PrdctType  $prdctType
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        PrdctType::find($request->id)->update($request->all());
        return response()->json(['types' => PrdctType::all()], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\PrdctType  $prdctType
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $res = PrdctType::where('id', $id)->delete();

        return response()->json(['types' => PrdctType::all()], 200);
    }
}
