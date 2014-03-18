<?php
include 'pass.php';
$email = $_POST["email"];
$password = $_POST["password"];


try {

	$pdo->exec("INSERT INTO game (p1, p1start, message, id) VALUES ($time, '$asd2', '$asd', NULL)");
	
} catch (Exception $e) {
	echo 'Caught exception: ',  $e->getMessage(), "\n";
}



?>

