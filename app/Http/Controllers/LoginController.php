<?php

namespace App\Http\Controllers;

use App\Models\User;
use Dotenv\Exception\ValidationException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException as ValidationValidationException;
use League\Config\Exception\ValidationException as ExceptionValidationException;

class LoginController extends Controller
{
    //
    public function login(Request $request)
    {
        $request->validate([
            'email' => ['required'],
            'password' => ['required']
        ]);
        $user = User::where('email', $request->email)->first();
          if (!$user || Hash::check($request->password, $user->password)){

          }  
        
            return Auth::user()->createToken($request->device_name)->plainTextToken;
        
        return 1;
    }
}
