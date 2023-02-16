<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('dans_paniers', function (Blueprint $table) {
            $table->foreignId('panier_id')->constrained('panier');
            $table->foreignId('produit_id')->constrained();
            $table->integer("nb_produit_singulier");
            $table->primary(['panier_id', 'produit_id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('dans_paniers');
    }
};
