<?php

namespace App\Traits;

use App\Http\Controllers\Controller;
use App\Modules\Admin\Accounts\Models\Account;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

trait ImageTrait
{


    public function save_image(Request $request)
    {


        $random_name_prefix = generateRandomString(10);



        $image = $request->image;  // your base64 encoded
        $extension = explode('/', mime_content_type($image))[1];

        $image = str_replace('data:image/' . $extension . ';base64,', '', $image);
        $image = str_replace(' ', '+', $image);
        $filename = $random_name_prefix . $request->image_name;


        $filePath = 'public/products_images/' . $filename;
        $disk = Storage::put($filePath, base64_decode($image));

        return $filename;
    }
    public function delete_image($image_name){

        Storage::delete($image_name);
    }
}
