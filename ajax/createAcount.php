<?php
include 'pass.php';
/*$email = $_POST["email"];
$password = $_POST["password"];*/


$email = $_GET["email"];
$password = $_GET["password"];


$pdo = new PDO("mysql:host=$host;dbname=$db_name", "$user","$pass");
echo "asd";
/*
try {
	$pdo->exec("INSERT INTO players (email, password) VALUES( '$email', '$password'");
} catch (Exception $e) {
	echo 'Caught exception: ',  $e->getMessage(), "\n";
}*/
echo "zrobione tatp";
?>