<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class produit extends Model
{
    protected $fillable = [
        'categorie_id',
        'nom',
        'prix',
        'description',
        'lieu',
        'distance',
        'latitude',
        'longitude',
    ];
    use HasFactory;
}
