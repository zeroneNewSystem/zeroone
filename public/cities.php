<?php
$country_id = $_GET['country_id'];
//print_r($_SERVER['REQUEST_URI']);
include_once('connection.php');
$database = new Connection();
$db = $database->open();
$sth = $db->prepare("SELECT * FROM cities Where country_id =:country_id");
$sth->execute(['country_id' => $country_id]);

$products = $sth->fetchAll(\PDO::FETCH_ASSOC);



$database->close();
echo json_encode(['cities' => $products]);
