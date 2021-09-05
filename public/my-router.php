<?php



$token =  hash('sha256', explode('|', getallheaders()['Authorization'])[1]);

$barcode = explode('/', $_SERVER['REQUEST_URI'])[3];

include_once('connection.php');
$database = new Connection();
$db = $database->open();

//check user
/*
$sth = $db->prepare("SELECT 1 FROM personal_access_tokens WHERE token =:token ");
$sth->execute(['token' => $token]);


if ($sth->rowCount() == 0)
    die('you have no permissions');

*/

$sth = $db->prepare("SELECT * FROM products Where barcode =:barcode");
$sth->execute(['barcode'=>$barcode]);

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
echo json_encode(['products' => $products],JSON_NUMERIC_CHECK );
