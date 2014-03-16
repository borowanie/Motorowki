<?php
session_start();
include 'pass.php';

$player =  $_SESSION['loggedIn'];
$roomName = $_POST["roomName"];

$pdo = new PDO("mysql:host=$host;dbname=$db_name", "$user","$pass");

try {
	$pdo->exec("INSERT INTO `statki`.`rooms` (`id`, `p1`, `p2`, `roomName`) VALUES (NULL, '$player', '','$roomName')");
} catch (Exception $e) {
	echo 'Caught exception: ',  $e->getMessage(), "\n";
}
?>