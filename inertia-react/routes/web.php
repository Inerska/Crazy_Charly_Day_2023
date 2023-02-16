<?php

use App\Http\Controllers\forum\adminLogic;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\usersController;
use App\Http\Controllers\usersModActions;
use App\Models\User;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/panier', function () {
    return Inertia::render('Panier');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/products', function () {
    return Inertia::render('Products');
});

Route::group(['prefix' => 'admin', 'middleware' => ['AdminAuthenticate']], function(){

    //Dashboard Admin
    Route::get('/', [adminLogic::class, 'getAdminDashboard'])->name('AdminDashboard');

    //Page with all users | 1: all | 2:Search and pageid
    //rework to consider for new page system
    Route::get('/users', [usersController::class, 'all'])->name('users');
    Route::get('/users/{id}', [usersController::class, 'all'])->name('userspage');

    //User Profile | admin side
    Route::get('/user/{id}', [usersController::class, 'show'])->name('user');

    //Admin actions
    Route::prefix('useractions')->group(function () {
        Route::get('/ban/{id}', [usersModActions::class, 'ban'])->middleware('correctInstall')->name('ban');
        Route::get('/unban/{id}', [usersModActions::class, 'unban'])->name('unban');
        Route::get('/promote/{id}', [usersModActions::class, 'promote'])->name('promote');
        Route::get('/promotedown/{id}', [usersModActions::class, 'promotedown'])->name('promotedown');
    });

});

require __DIR__.'/auth.php';
