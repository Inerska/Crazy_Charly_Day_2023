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
        Schema::create('produits', function (Blueprint $table) {
            $table->id();
            $table->foreignId('categorie_id')->constrained();
            $table->text('nom')->nullable(false);
            $table->decimal('prix',$precision = 4, $scale = 2)->nullable(false);
            $table->integer('poids')->nullable(false);
            $table->text('description')->nullable(false);
            $table->text('detail')->nullable(false);
            $table->text('lieu')->nullable(false);
            $table->integer('distance')->nullable(false);
            $table->float('latitude',8,6)->nullable(false);
            $table->float('longitude',8,6)->nullable(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('produits');
    }
};
