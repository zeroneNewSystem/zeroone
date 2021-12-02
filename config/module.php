<?php

/**
 * Created by PhpStorm.
 * User: Viktor
 * Date: 29.09.2019
 * Time: 17:59
 */

return [
    "path" => base_path() . "/app/Modules",
    "base_namespace" => "App\Modules",

    /** Modules **/

    'modules' => [
        "Admin" => [
            'Accounts',
            'Products',
            'People',
            'Purchases',
            'Receipts',
            'StockTakes',
        ],
        'Public' => []
    ]
];
