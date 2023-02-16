<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class CheckBanned
{
    /**
     * Handle an incoming request.
     *
     * @param \Illuminate\Http\Request $request
     * @param \Closure $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        if (auth()->check() && (auth()->user()->admin == -1)) {
            Auth::logout();

            $request->session()->invalidate();

            $request->session()->regenerateToken();

            return Inertia::render('login', [
                'error' => 'Your Account is suspended, please contact Admin.'
            ]);

        }

        return $next($request);
    }
}
