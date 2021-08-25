<?php

namespace App\Modules\Admin\Products\Controllers;

use App\Http\Controllers\Controller;
use App\Models\DistributionPolicy;
use App\Models\Inventory;
use App\Models\Tax;
use App\Modules\Admin\Products\Models\PrdctForm;
use App\Modules\Admin\Products\Models\PrdctGroup;
use App\Modules\Admin\Products\Models\PrdctUnit;
use App\Modules\Admin\Products\Models\PrdctType;
use App\Modules\Admin\Products\Models\Product;
use App\Traits\AccountTrait;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    use AccountTrait;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {


        $products = Product::where('ar_name', 'LIKE', '%' . $request->search . '%')
            // ->orWhere('en_name', 'LIKE', '%' . $request->search . '%')
            // ->orWhere('barcode', 'LIKE', '%' . $request->search . '%')
            ->paginate($request->itemsPerPage != -1 ? $request->itemsPerPage : '');

        return response()->json(['products' => $products]);

        //
        //return view('Products::index');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getCreate()
    {


        // return another table like groups forms ....

        return response()->json(
            [
                'prdct_units' => PrdctUnit::all(),
                'prdct_groups' => PrdctGroup::all(),
                'prdct_forms' => PrdctForm::all(),
                'prdct_types' => PrdctType::all(),
                'inventories' => Inventory::all(),
                'distribution_policies' => DistributionPolicy::all(),
                'taxes' => Tax::all(),
                'product_sales_accounts' =>  $this->showAccounts(4),
                //'product_sales_return_accounts' =>  $this->showAccounts(4),
                'product_cogs_accounts' =>  $this->showAccounts(5),
                //'product_purchase_return_accounts' =>  $this->showAccounts(4),
            ]

        );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Product $product)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        //
        $res = Product::where('id', $request->id)->delete();

        $products = Product::where('ar_name', 'LIKE', '%' . $request->search . '%')
            // ->orWhere('en_name', 'LIKE', '%' . $request->search . '%')
            // ->orWhere('barcode', 'LIKE', '%' . $request->search . '%')
            ->paginate($request->itemsPerPage != -1 ? $request->itemsPerPage : '');

        return response()->json(['products' => $products]);
    }
}
