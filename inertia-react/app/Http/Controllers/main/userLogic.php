<?php

namespace App\Http\Controllers\main;

use App\Http\Controllers\Controller;
use App\Models\dansPanier;
use App\Models\panier;
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

    public static function getAllProducts(){
        return produit::all();
    }

    public function addProductPanier(Request $request, $id){
        //validate data
        $validator = Validator::make($request->all(), [
            'quantity' => 'required|integer|max:255'
        ]);
        if ($validator->fails()) {
            return back()->withErrors($validator);
        }else {
            // if the panier does not exist create it in the database
            if (panier::where('user_id', $request->user()->id)->doesntExist()) {
                $panier = new panier();
                $panier->user_id = $request->user()->id;
                $panier->save();
            } else {
                $panier = panier::where('user_id', $request->user()->id)->first();
                $produit = produit::find($id);

                // if the product is already in the panier update the quantity both in dansPanier and in panier
                $contenu = dansPanier::where('panier_id', $panier->id)->where('produit_id', $produit->id)->first();
                if ($contenu != null) {
                    $contenu->nb_produit_singulier += $request->input('quantity');
                    $contenu->save();

                    $panier->nb_produit_total += $request->input('quantity');

                    return back()->with('status', 'Product updated in cart');
                }

                // if the product is not in the panier add it
                $contenu = new dansPanier();
                $contenu->panier_id = $panier->id;
                $contenu->produit_id = $produit->id;
                $contenu->nb_produit_singulier = $request->input('quantity');
                $contenu->save();

                $panier->nb_produit_total += $request->input('quantity');
                $panier->save();

                return redirect()->route('dashboard')->with('status', 'Product added to cart');

            }

        }
    }

}
