<?php
include 'pass.php';
$email = $_POST["email"];
$password = $_POST["password"];

$pdo = new PDO("mysql:host=$host;dbname=$db_name", "$user","$pass");

try {
	$pdo->exec("INSERT INTO `statki`.`players` (`id`, `email`, `password`) VALUES (NULL, '$email', '$password')");
} catch (Exception $e) {
	echo 'Caught exception: ',  $e->getMessage(), "\n";
}
?>