<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class commande extends Model
{
    protected $fillable = [
        'user_id',
        'ville_id',
        'date',
        'statut',
        'prixTotal',
    ];
    use HasFactory;
}
