<?php


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

// главная страница вашсайт.рф
Route::route('/', function () {
    print 'Домашняя станица';
});

// маршрут будет срабатывать на адрес вашсайт.рф/blog/myrusakov/12091983
// и подобные
Route::route('/test/(\w+)/(\d+)', function ($category, $id) {
    print $category . ':' . $id;
});

// запускаем маршрутизатор, передавая ему запрошенный адрес
Route::execute($_SERVER['REQUEST_URI']);







print_r($_SERVER['REQUEST_URI']);
include_once('connection.php');
$database = new Connection();
$db = $database->open();
$sth = $db->prepare("SELECT * FROM products Where id = 20");
$sth->execute();

$products = $sth->fetchAll(\PDO::FETCH_ASSOC);

foreach ($products as &$product) {

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
