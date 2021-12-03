<?php

namespace App\Modules;

use Illuminate\Support\Facades\Route;

/** * Сервис провайдер для подключения модулей */

use Illuminate\Support\ServiceProvider;

class ModulesServiceProvider extends ServiceProvider
{

    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {

        $modules = config("module.modules");
        $path = config("module.path");
        $base_namespace = config("module.base_namespace");


        if ($modules) {

            foreach ($modules as $mod => $submodules) {
                foreach ($submodules as $key => $sub) {
                    if (is_string($key)) {
                        $sub = $key;
                    }
                    $relativePath = "/" . $mod . "/" . $sub;
                    $routesPath = $path . $relativePath . "/Routes/routes.php";

                    if (file_exists($routesPath)) {


                        Route::prefix('api')
                            //->middleware('auth:sanctum')
                            ->namespace("App\\Modules\\$mod\\$sub\Controllers")
                            ->group($routesPath);

                        // echo ("App\\Modules\\$mod\\$sub\Controllers");
                        // echo '<br>';
                        // echo ($routesPath);
                        // echo '<br>';
                    }
                    // views
                    if (is_dir($path . $relativePath . "/Views")) {
                        // echo ($path . $relativePath . "/Views");
                        // echo '<br>';
                        $this->loadViewsFrom($path . $relativePath . "/Views", $sub);
                    }
                }
            }
        }



        //
    }
}
