<?php
include 'pass.php';

$p1 = $_GET["p1"];
$p2 = $_GET["p2"];
$posArray = $_POST["posArray"];


$pdo = new PDO("mysql:host=$host;dbname=$db_name", "$user","$pass");
try {
	$pdo->exec("INSERT INTO game (p1, p2, current) VALUES ('$p1', '$p2', '1')");
	//
	$sth = $pdo->prepare("SELECT * FROM game WHERE p1='$p1' AND p2='$p2' AND current='1'");
	$sth->execute();	
} catch (Exception $e) {
	echo 'Caught exception: ',  $e->getMessage(), "\n";
}
$result = $sth->fetch();
echo $result["id"];

?>

