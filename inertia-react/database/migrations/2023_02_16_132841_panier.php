<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('panier', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id');
            $table->integer('nb_produit_tot_commande');
        });
    }

    public function down()
    {
        Schema::dropIfExists('panier');
    }
};
