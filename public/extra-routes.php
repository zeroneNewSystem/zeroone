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
Route::route('/api/extra/barcode/(\d+)', function ($barcode) {
    $database = new Connection();
    $db = $database->open();
    $sth = $db->prepare("SELECT * FROM products Where barcode =:barcode");
    $sth->execute(['barcode' => $barcode]);

    $products = $sth->fetchAll(\PDO::FETCH_ASSOC);

    foreach ($products as &$product) {
        
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

Route::route('/api/extra/cities/(\d+)', function ($country_id) {
    $database = new Connection();
    $db = $database->open();
    $sth = $db->prepare("SELECT * FROM cities Where country_id =:country_id");
    $sth->execute(['country_id' => $country_id]);

    $products = $sth->fetchAll(\PDO::FETCH_ASSOC);



    $database->close();
    echo json_encode(['cities' => $products], JSON_NUMERIC_CHECK);

});


// запускаем маршрутизатор, передавая ему запрошенный адрес
Route::execute($_SERVER['REQUEST_URI']);
