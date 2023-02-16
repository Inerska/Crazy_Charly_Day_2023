<?php

namespace App\Http\Controllers\forum;

use App\Http\Controllers\Controller;
use App\Models\Logs;
use App\Models\posts;
use App\Models\threads;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use TimeHunter\LaravelGoogleReCaptchaV3\Validations\GoogleReCaptchaV3ValidationRule;

class userLogic extends Controller
{
    /**
     * How many products should be displayed per page
     */
    private $product_per_page = 5;

    //tools


}
