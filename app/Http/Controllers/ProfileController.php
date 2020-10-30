<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use Illuminate\Support\Facades\Hash;
use App\User;

class ProfileController extends Controller
{

    public function authUserInfo()
    {
        return response()->json(User::where('id', '=', Auth::user()->id)->get());
    }

    // public function profileInfo()
    // {
    //     return response()->json(User::where('id', '=', Auth::user()->id)->get());
    // }

    public function updateProfile(Request $request)
    {
        $user = Auth::user();

        $this->validate($request,[
            'name' => 'required|string|max:191',
            'email' => 'required|string|email|max:191|unique:users,email,'.$user->id,
            'password' => 'sometimes|required|string|min:8'
		]);

        $oldPhoto = $user->photo;
        if ($request->photo != $oldPhoto) {
            $name = time().'.' . explode('/', explode(':', substr($request->photo, 0, strpos($request->photo, ';')))[1])[1];

            \Image::make($request->photo)->save(public_path('images/profile/').$name);
                $request->merge(['photo' => $name]);

            $request->merge(['photo' => $name]);

            $userPhoto = public_path('img/profile/').$oldPhoto;

            if (file_exists($userPhoto)) {
                @unlink($userPhoto);
            }
        }

        if (!empty($request->password)) {
            $request->merge(['password' => Hash::make($request['password'])]);
        }

        $user->update($request->all());
        return ['message' => 'Profile updated'];
        // return $request->photo;
    }
}
