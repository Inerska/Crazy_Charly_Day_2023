<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class contenu extends Model
{
    protected $fillable = [
        'produit_id',
        'commande_id',
        'quantite',
    ];
    use HasFactory;
}
