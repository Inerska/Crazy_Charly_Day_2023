<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;
use phpDocumentor\Reflection\Types\Null_;
use Symfony\Component\Console\Input\Input;

class usersController extends Controller
{

    /**
     * @var int How many users should be displayed per page
     */
    private $userPerPage = 4;

    /**
     * Handles the display page for the complete user list, along with a research input
     *
     * Defaults to first page
     *
     * @param $id
     * @param Request $request
     * @return \Inertia\Response
     */
    public function all($id=1, Request $request)
    {
        $id2 = $id;
        $id = intval($id);
        $users = [];
        $allusers = User::all();

        if(!empty($request->input('search')))
        {
            $id2 = $request->input('search');
        }

        if( $id == 0 and $id2 != "1" )
        {
            for($i = 0; $i<count($allusers); $i++)
            {
                //checks in whole user-object not just in $allusers->name
                if(Str::contains($allusers[$i], $id2))
                {
                    array_push($users, $allusers[$i]);
                }
            }

            $buttons = false;
            $pageid = false;
            //config for more users needed
        }
        else
        {

            if ($id < 1) {
                $id = 1;
            }

            $users = User::all()->reverse()->slice(($id - 1) * $this->userPerPage, $this->userPerPage);
            $buttons = ceil(count(User::all()) / $this->userPerPage);
            $pageid = $id; // it's dumb

        }

        return Inertia::render('adminusers', [
            'users' => $users,
            'buttons' => $buttons,
            'pageid' => $pageid
        ]);

    }

    public function show($id)
    {

        $user = User::findOrFail($id);

        return Inertia::render('adminuserprofile', [
            'user' => $user
        ]);

    }
}
