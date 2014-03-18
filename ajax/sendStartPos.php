<?php
session_start();
include 'pass.php';


$posArray = $_POST["posArray"];
$row = $_SESSION['databaseRow'];

$pdo = new PDO("mysql:host=$host;dbname=$db_name", "$user","$pass");
try {

	if($_SESSION['actualPlayer'] == 1)
		$pdo->exec("UPDATE game SET p1pos='$posArray', p1start='1' WHERE id=$row");
	else
		$pdo->exec("UPDATE game SET p2pos='$posArray', p2start='1' WHERE id=$row");

} catch (Exception $e) {
	echo 'Caught exception: ',  $e->getMessage(), "\n";
}

?>

