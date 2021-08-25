<?php

namespace App\Modules\Admin\Products\Controllers;

use App\Http\Controllers\Controller;
use App\Modules\Admin\Products\Models\PrdctForm;
use Illuminate\Http\Request;

class PrdctFormController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(['forms' => PrdctForm::all()], 200);
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


        PrdctForm::create($request);
        return response()->json(['forms' => PrdctForm::all()], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\PrdctForm  $prdctForm
     * @return \Illuminate\Http\Response
     */
    public function show(PrdctForm $prdctForm)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\PrdctForm  $prdctForm
     * @return \Illuminate\Http\Response
     */
    public function edit(PrdctForm $prdctForm)
    {
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\PrdctForm  $prdctForm
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        PrdctForm::find($request->id)->update($request->all());
        return response()->json(['forms' => PrdctForm::all()], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\PrdctForm  $prdctForm
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $res = PrdctForm::where('id', $id)->delete();

        return response()->json(['forms' => PrdctForm::all()], 200);
    }
}
