<?php

namespace App\Http\Controllers\main;

use App\Http\Controllers\Controller;
use App\Models\produit;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;
use Illuminate\Foundation\Auth\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Inertia\Inertia;

class userLogic extends Controller
{
    /**
     * How many products should be displayed per page
     */
    private $product_per_page = 5;

    /**
     * Handles request for the products page
     *
     * @param Request $request
     * @param $id
     * @return \Inertia\Response
     */
    public function mainProducPage(Request $request, $id=1){

        $id2 = $id;
        $id = intval($id);
        $produits = [];
        $allproducts = User::all();

        if(!empty($request->input('search')))
        {
            $id2 = $request->input('search');
        }

        if( $id == 0 and $id2 != "1" )
        {
            for($i = 0; $i<count($allproducts); $i++)
            {
                //checks in whole product-object not just in $allusers->name
                if(Str::contains($allproducts[$i], $id2))
                {
                    array_push($produits, $allproducts[$i]);
                }
            }

            $buttons = false;
            $pageid = false;
            //config for more users needed
        }
        else
        {

            if ($id < 1) {
                $id = 1;
            }

            $produits = produit::all()->reverse()->slice(($id - 1) * $this->product_per_page, $this->product_per_page);
            $buttons = ceil(count(produit::all()) / $this->product_per_page);
            $pageid = $id; // it's dumb

        }

        return Inertia::render('Dashboard', [
            'produits' => $produits,
            'buttons' => $buttons,
            'pageid' => $pageid
        ]);

    }

    /**
     * Handles for a product page
     *
     * @param $id
     * @param Request $request
     * @return \Inertia\Response
     */
    public function productPage($id, Request $request){
        $product = produit::findOr($id, function () {
            return back()->with('status', 'Product not found');
        });
       return Inertia::render('ProductPage',[
           'product' => $product
       ]);
    }

    public function addProductPanier(Request $request){

    }

}
