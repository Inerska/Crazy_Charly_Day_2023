<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class panier extends Model
{
    use HasFactory;

    protected $fillable = [
        'nb_produit_tot_commande',
        'produit_id',
        'user_id',
    ];
    use HasFactory;
}
