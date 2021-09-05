<?php

namespace App\Modules\Admin\people\Controllers;


use App\Http\Controllers\Controller;

use App\Modules\Admin\people\Models\Person;

use Illuminate\Http\Request;

class PersonController extends Controller
{


    public function showpeopleByType(Request $request, $type)
    {
        return response()->json(['people' => $this->showpeople($type)], 200);
    }


    /**
     * showpeopleByType
     *
     * @param  mixed $request
     * @return void
     */










    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        $people = Person::all();

        return $people;
    }

    public function export()
    {
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


        Person::create($request);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Person  $person
     * @return \Illuminate\Http\Response
     */
    public function show(Person $person)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Person  $person
     * @return \Illuminate\Http\Response
     */
    public function edit(Person $person)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Person  $person
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {

        return Person::find($request->id)->update($request->all());
        //$request;
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Person  $person
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //

        $res = Person::where('id', $id)->delete();
        return $res;
    }
    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Person  $person
     * @return \Illuminate\Http\Response
     */
}
