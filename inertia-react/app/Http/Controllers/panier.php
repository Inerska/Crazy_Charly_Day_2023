<?php

namespace App\Http\Controllers;

use App\Models\produit;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\DB;

class panier extends Controller
{
    /**
     * Return products of the shop's user
     */
    public function getItemsFromPanier(Request $request)
    {
        $res = produit::join('panier','produits.id','panier.produit_id')->where('user_id', $request->user()->id)->get();
        //$res = User::produit()->where('user_id', $request->user()->id)->get();
        $tmp = "";
        foreach($res as $r){
            $tmp = $tmp.$r->produit_id." ".$r->nb_produit;
        }
        return $tmp;
    }
}
