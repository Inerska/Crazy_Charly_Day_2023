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

    protected $table='produits';
    protected $primaryKey='id';
    public $timestamps=false;

    public function users(){
        return $this->belongsToMany('App\Models\User','panier','produit_id','user_id')->withPivot(['nb_produit']);
    }
}
