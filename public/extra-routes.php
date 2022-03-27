<?php

include_once('connection.php');

class Route
{
    // массив для хранения соответствия url => функция
    private static $routes = array();

    // запрещаем создание и копирование статического объекта
    private function __construct()
    {
    }
    private function __clone()
    {
    }


    // данный метод принимает шаблон url-адреса
    // как шаблон регулярного выражения и связывает его
    // с пользовательской функцией
    public static function route($pattern, $callback)
    {
        // echo $pattern.'</br>';
        // функция str_replace здесь нужна, для экранирования всех прямых слешей
        // так как они используются в качестве маркеров регулярного выражения
        $pattern = '/^' . str_replace('/', '\/', $pattern) . '$/';

        self::$routes[$pattern] = $callback;
    }


    // данный метод проверяет запрошенный $url(адрес) на
    // соответствие адресам, хранящимся в массиве $routes
    public static function execute($url)
    {

        foreach (self::$routes as $pattern => $callback) {
            if (preg_match($pattern, $url, $params)) // сравнение идет через регулярное выражение
            {
                // соответствие найдено, поэтому удаляем первый элемент из массива $params
                // который содержит всю найденную строку
                array_shift($params);

                return call_user_func_array($callback, array_values($params));
            }
        }
    }
}

// extratct router
//Route::route('/api/extra/invoice/barcode/(.+)/inventory_id/(.+)', function ($barcode, $inventory_id) {
Route::route('/api/extra/output/barcode/(.+)', function ($barcode) {



    $database = new Connection();
    $db = $database->open();
    $sth = $db->prepare("SELECT * FROM products WHERE barcode =:barcode");
    $sth->execute([
        'barcode' => $barcode,
        //'inventory_id' => $inventory_id
    ]);

    $products = $sth->fetchAll(\PDO::FETCH_ASSOC);
    $product['bill_details'] = [];

    foreach ($products as &$product) {
        $product['main_unit_id'] = $product['main_sold_unit_id'];
        $sql_string = "SELECT * FROM bill_details WHERE product_id =:product_id AND type_id = 1 AND sum_quantity_in_minor_unit != -1 ";

        //product_id = " . $product['id'];

        $sth = $db->prepare($sql_string); //and quantity in minamal units is bigeer than 0

        $sth->execute(['product_id' => $product['id']]);
        $bill_details = $sth->fetchAll(\PDO::FETCH_ASSOC);
        //----INVENTORY METHOD FROM SETTINGS 

        $product['bill_details'] = $bill_details;

        // if  inventory_method == FIFO


        // if  inventory_method == WAC

        // if  inventory_method == GAAP
        // if  inventory_method == use Last Cost


        unset($product['created_at']);
        unset($product['deleted_at']);
        unset($product['updated_at']);

        $sth = $db->prepare("SELECT * FROM prdct_units_products WHERE product_id = " . $product['id']);
        $sth->execute();


        $pivots = $sth->fetchAll(\PDO::FETCH_ASSOC);


        $units = [];


        foreach ($pivots as &$pivot) {
            $sth = $db->prepare("SELECT * FROM prdct_units WHERE id = " . $pivot['prdct_unit_id']);
            $sth->execute();
            $unit = $sth->fetch(\PDO::FETCH_ASSOC);
            $unit['pivot'] = $pivot;
            $units[] = $unit;
        }


        $product['units'] = $units;
    }




    $database->close();
    echo json_encode(['products' => $products], JSON_NUMERIC_CHECK);
});
Route::route('/api/extra/output/name/(.+)', function ($ar_name) {



    $database = new Connection();
    $db = $database->open();
    $sth = $db->prepare("SELECT * FROM products WHERE ar_name like  :ar_name");
    $sth->execute(['ar_name' => '%' . $ar_name . '%']);


    $products = $sth->fetchAll(\PDO::FETCH_ASSOC);
    $product['bill_details'] = [];

    foreach ($products as &$product) {
        $product['main_unit_id'] = $product['main_sold_unit_id'];
        $sql_string = "SELECT * FROM bill_details WHERE product_id =:product_id AND type_id = 1 AND sum_quantity_in_minor_unit != -1 ";

        //product_id = " . $product['id'];

        $sth = $db->prepare($sql_string); //and quantity in minamal units is bigeer than 0

        $sth->execute(['product_id' => $product['id']]);
        $bill_details = $sth->fetchAll(\PDO::FETCH_ASSOC);
        //----INVENTORY METHOD FROM SETTINGS 

        $product['bill_details'] = $bill_details;

        // if  inventory_method == FIFO


        // if  inventory_method == WAC

        // if  inventory_method == GAAP
        // if  inventory_method == use Last Cost


        unset($product['created_at']);
        unset($product['deleted_at']);
        unset($product['updated_at']);

        $sth = $db->prepare("SELECT * FROM prdct_units_products WHERE product_id = " . $product['id']);
        $sth->execute();


        $pivots = $sth->fetchAll(\PDO::FETCH_ASSOC);


        $units = [];


        foreach ($pivots as &$pivot) {
            $sth = $db->prepare("SELECT * FROM prdct_units WHERE id = " . $pivot['prdct_unit_id']);
            $sth->execute();
            $unit = $sth->fetch(\PDO::FETCH_ASSOC);
            $unit['pivot'] = $pivot;
            $units[] = $unit;
        }


        $product['units'] = $units;
    }




    $database->close();
    echo json_encode(['products' => $products], JSON_NUMERIC_CHECK);
});

Route::route('/api/extra/input/barcode/(.+)', function ($barcode) {
    $database = new Connection();
    $db = $database->open();
    $sth = $db->prepare("SELECT * FROM products WHERE barcode =:barcode");
    $sth->execute(['barcode' => $barcode]);

    $products = $sth->fetchAll(\PDO::FETCH_ASSOC);
    $product['bill_details'] = [];
    foreach ($products as &$product) {
        $product['main_unit_id'] = $product['main_bought_unit_id'];

        $sql_string = "SELECT * FROM bill_details WHERE product_id =:product_id AND type_id = 1";

        //product_id = " . $product['id'];

        $sth = $db->prepare($sql_string); //and quantity in minamal units is bigeer than 0

        $sth->execute(['product_id' => $product['id']]);
        $bill_details = $sth->fetchAll(\PDO::FETCH_ASSOC);
        //----INVENTORY METHOD FROM SETTINGS 

        $product['bill_details'] = $bill_details;


        unset($product['created_at']);
        unset($product['deleted_at']);
        unset($product['updated_at']);

        $sth = $db->prepare("SELECT * FROM prdct_units_products WHERE product_id = " . $product['id']);
        $sth->execute();


        $pivots = $sth->fetchAll(\PDO::FETCH_ASSOC);


        $units = [];


        foreach ($pivots as &$pivot) {
            $sth = $db->prepare("SELECT * FROM prdct_units WHERE id = " . $pivot['prdct_unit_id']);
            $sth->execute();
            $unit = $sth->fetch(\PDO::FETCH_ASSOC);
            $unit['pivot'] = $pivot;
            $units[] = $unit;
        }


        $product['units'] = $units;
    }




    $database->close();
    echo json_encode(['products' => $products], JSON_NUMERIC_CHECK);
});

Route::route('/api/extra/input/name/(.+)', function ($ar_name) {
    $database = new Connection();
    $db = $database->open();

    $sth = $db->prepare("SELECT * FROM products WHERE ar_name like  :ar_name");
    $sth->execute(['ar_name' => '%' . $ar_name . '%']);

    $products = $sth->fetchAll(\PDO::FETCH_ASSOC);

    $product['bill_details'] = [];
    foreach ($products as &$product) {
        $product['main_unit_id'] = $product['main_bought_unit_id'];

        $sql_string = "SELECT * FROM bill_details WHERE product_id =:product_id AND type_id = 1";

        //product_id = " . $product['id'];

        $sth = $db->prepare($sql_string); //and quantity in minamal units is bigeer than 0

        $sth->execute(['product_id' => $product['id']]);
        $bill_details = $sth->fetchAll(\PDO::FETCH_ASSOC);
        //----INVENTORY METHOD FROM SETTINGS 

        $product['bill_details'] = $bill_details;


        unset($product['created_at']);
        unset($product['deleted_at']);
        unset($product['updated_at']);

        $sth = $db->prepare("SELECT * FROM prdct_units_products WHERE product_id = " . $product['id']);
        $sth->execute();


        $pivots = $sth->fetchAll(\PDO::FETCH_ASSOC);


        $units = [];


        foreach ($pivots as &$pivot) {
            $sth = $db->prepare("SELECT * FROM prdct_units WHERE id = " . $pivot['prdct_unit_id']);
            $sth->execute();
            $unit = $sth->fetch(\PDO::FETCH_ASSOC);
            $unit['pivot'] = $pivot;
            $units[] = $unit;
        }


        $product['units'] = $units;
    }




    $database->close();
    echo json_encode(['products' => $products], JSON_NUMERIC_CHECK);
});

Route::route('/api/extra/stock_take/barcode/(.+)/inventory_id/(.+)', function ($barcode, $inventory_id) {

    $database = new Connection();
    $db = $database->open();
    $sth = $db->prepare("SELECT * FROM products WHERE barcode =:barcode AND inventory_id = :inventory_id");
    $sth->execute([
        'barcode' => $barcode,
        'inventory_id' => $inventory_id
    ]);

    $products = $sth->fetchAll(\PDO::FETCH_ASSOC);
    $product['bill_details'] = [];

    foreach ($products as &$product) {
        $sql_string = "SELECT * FROM bill_details WHERE product_id = " . $product['id'];

        $sth = $db->prepare($sql_string); //and quantity in minamal units is bigeer than 0

        $sth->execute();
        $bill_details = $sth->fetchAll(\PDO::FETCH_ASSOC);
        //----INVENTORY METHOD FROM SETTINGS 

        $product['bill_details'] = $bill_details;

        // if  inventory_method == FIFO


        // if  inventory_method == WAC

        // if  inventory_method == GAAP
        // if  inventory_method == use Last Cost


        unset($product['created_at']);
        unset($product['deleted_at']);
        unset($product['updated_at']);

        $sth = $db->prepare("SELECT * FROM prdct_units_products WHERE product_id = " . $product['id']);
        $sth->execute();


        $pivots = $sth->fetchAll(\PDO::FETCH_ASSOC);


        $units = [];


        foreach ($pivots as &$pivot) {
            $sth = $db->prepare("SELECT * FROM prdct_units WHERE id = " . $pivot['prdct_unit_id']);
            $sth->execute();
            $unit = $sth->fetch(\PDO::FETCH_ASSOC);
            $unit['pivot'] = $pivot;
            $units[] = $unit;
        }


        $product['units'] = $units;
    }




    $database->close();
    echo json_encode(['products' => $products], JSON_NUMERIC_CHECK);
});

Route::route('/api/extra/stock_take/barcode/(.+)', function ($barcode) {

    $database = new Connection();
    $db = $database->open();
    $sth = $db->prepare("SELECT * FROM products WHERE barcode =:barcode and inventory_id = :inventory_id");
    $sth->execute(['barcode' => $barcode]);

    $products = $sth->fetchAll(\PDO::FETCH_ASSOC);

    foreach ($products as &$product) {

        $sth = $db->prepare("SELECT * FROM bill_details WHERE product_id = " . $product['id']);
        $sth->execute();
        $bill_details = $sth->fetchAll(\PDO::FETCH_ASSOC);
        //----INVENTORY METHOD FROM SETTINGS 

        $product['bill_details'] = $bill_details;




        // if  inventory_method == LIFO

        // if  inventory_method == FIFO
        // if  inventory_method == WAC
        // if  inventory_method == GAAP
        // if  inventory_method == use Last Cost








        unset($product['created_at']);
        unset($product['deleted_at']);
        unset($product['updated_at']);

        $sth = $db->prepare("SELECT * FROM prdct_units_products WHERE product_id = " . $product['id']);
        $sth->execute();


        $pivots = $sth->fetchAll(\PDO::FETCH_ASSOC);


        $units = [];


        foreach ($pivots as &$pivot) {
            $sth = $db->prepare("SELECT * FROM prdct_units WHERE id = " . $pivot['prdct_unit_id']);
            $sth->execute();
            $unit = $sth->fetch(\PDO::FETCH_ASSOC);
            $unit['pivot'] = $pivot;
            $units[] = $unit;
        }


        $product['units'] = $units;
    }




    $database->close();
    echo json_encode(['products' => $products], JSON_NUMERIC_CHECK);
});
Route::route('/api/extra/cities/(.+)', function ($country_id) {
    $database = new Connection();
    $db = $database->open();
    $sth = $db->prepare("SELECT * FROM cities WHERE country_id =:country_id");
    $sth->execute(['country_id' => $country_id]);

    $products = $sth->fetchAll(\PDO::FETCH_ASSOC);



    $database->close();
    echo json_encode(['cities' => $products], JSON_NUMERIC_CHECK);
});

Route::route('/api/extra/product/exists/ar_name/(.+)', function ($ar_name) {



    $database = new Connection();
    $db = $database->open();
    $sth = $db->prepare("SELECT * FROM products WHERE ar_name =:ar_name");
    $sth->execute(['ar_name' => urldecode($ar_name)]);

    $products = $sth->fetchAll(\PDO::FETCH_ASSOC);


    $database->close();
    echo json_encode(['products' => $products], JSON_NUMERIC_CHECK);
});
Route::route('/api/extra/product/exists/en_name/(.+)', function ($en_name) {


    $database = new Connection();
    $db = $database->open();
    $sth = $db->prepare("SELECT * FROM products WHERE en_name =:en_name");
    $sth->execute(['en_name' => urldecode($en_name)]);

    $products = $sth->fetchAll(\PDO::FETCH_ASSOC);


    $database->close();
    echo json_encode(['products' => $products], JSON_NUMERIC_CHECK);
});
Route::route('/api/extra/product/exists/barcode/(.+)', function ($barcode) {
    $database = new Connection();
    $db = $database->open();
    $sth = $db->prepare("SELECT * FROM products WHERE barcode =:barcode");
    $sth->execute(['barcode' => $barcode]);

    $products = $sth->fetchAll(\PDO::FETCH_ASSOC);


    $database->close();
    echo json_encode(['products' => $products], JSON_NUMERIC_CHECK);
});

// запускаем маршрутизатор, передавая ему запрошенный адрес
Route::execute($_SERVER['REQUEST_URI']);
