<?php

namespace App\Modules\Admin\Products\Controllers;

use App\Http\Controllers\Controller;
use App\Modules\Admin\Products\Models\PrdctGroup;
use Illuminate\Http\Request;

class PrdctGroupController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(['groups' => PrdctGroup::all()], 200);
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


        PrdctGroup::create($request);
        return response()->json(['groups' => PrdctGroup::all()], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\PrdctGroup  $prdctGroup
     * @return \Illuminate\Http\Response
     */
    public function show(PrdctGroup $prdctGroup)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\PrdctGroup  $prdctGroup
     * @return \Illuminate\Http\Response
     */
    public function edit(PrdctGroup $prdctGroup)
    {
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\PrdctGroup  $prdctGroup
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        PrdctGroup::find($request->id)->update($request->all());
        return response()->json(['groups' => PrdctGroup::all()], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\PrdctGroup  $prdctGroup
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $res = PrdctGroup::where('id', $id)->delete();

        return response()->json(['groups' => PrdctGroup::all()], 200);
    }
}
