<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use PHPUnit\Util\Xml\ValidationResult;

class AuthController extends Controller
{


    public function save_image(Request $request)
    {


        $random_name_prefix = generateRandomString(10);



        $image = $request->image;  // your base64 encoded
        $extension = explode('/', mime_content_type($image))[1];

        $image = str_replace('data:image/' . $extension . ';base64,', '', $image);
        $image = str_replace(' ', '+', $image);
        $filename = $random_name_prefix . $request->image_name;



      

        $filePath = 'products_images/' . $filename;
        $disk = Storage::put($filePath, base64_decode($image));




        return $random_name_prefix;
    }
    public function register(Request $request)
    {

        //return response()->json($request, 200);
        $request->validate([
            'name' => ['required'],
            'email' => ['required', 'email', 'unique:users'],
            'password' => ['required', 'min:8', 'confirmed'],

        ]);

        User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);
    }
    public function login(Request $request)
    {
        $request->validate([
            'email' => ['required'],
            'password' => ['required'],
            'device_name' => 'required',
        ]);


        $user = User::where('email', $request->email)->first();
        if (!$user || !Hash::check($request->password, $user->password)) {
            throw \Illuminate\Validation\ValidationException::withMessages([
                'email' => ['the provided credntials ar incorrect'],
            ]);
        }
        return $user->createToken($request->device_name)->plainTextToken;
    }
    public function logout(Request $request)
    {

        $request->user()->currentAccessToken()->delete();
        return response()->json(['msg' => 'logout success'], 200);
    }
}
