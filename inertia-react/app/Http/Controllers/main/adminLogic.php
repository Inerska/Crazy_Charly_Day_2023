<?php

namespace App\Http\Controllers\forum;

use App\Http\Controllers\Controller;
use App\Models\appSettings;
use App\Models\Logs;
use DateTime;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Inertia\Inertia;
use TimeHunter\LaravelGoogleReCaptchaV3\Validations\GoogleReCaptchaV3ValidationRule;

/**
 * Class made to handle all the logic associated with moderation actions
 */
class adminLogic extends Controller
{


    /**
     * Panel's admin-panel front page
     *
     * @return \Inertia\Response returns a view
     */
    public function mainAdminDashBoard()
    {

        return Inertia::render('admindashboard', [
            //'userCount' => $userCount
        ]);

    }

    //tools
    /**
     * Calculates the time elapsed between a date and the current one
     *
     * @param  string  $datetime a date
     * @param  boolean   $full change the date format (untested)
     * @return String
     */
    public static function time_elapsed_string(String $datetime, bool $full = false) {
        $now = new DateTime;
        $ago = new DateTime($datetime);
        $diff = $now->diff($ago);

        $diff->w = floor($diff->d / 7);
        $diff->d -= $diff->w * 7;

        $string = array(
            'y' => 'year',
            'm' => 'month',
            'w' => 'week',
            'd' => 'day',
            'h' => 'hour',
            'i' => 'minute',
            's' => 'second',
        );
        foreach ($string as $k => &$v) {
            if ($diff->$k) {
                $v = $diff->$k . ' ' . $v . ($diff->$k > 1 ? 's' : '');
            } else {
                unset($string[$k]);
            }
        }

        if (!$full) $string = array_slice($string, 0, 1);
        return $string ? implode(', ', $string) . ' ago' : 'just now';
    }

    /**
     * Gets a user's object based on an id
     *
     * @param  string  $id user's id
     * @return object user's object
     */
    public static function getUserById($id){
        return DB::table('users')->where('id', $id)->first();
    }


}
