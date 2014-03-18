<?php
include 'pass.php';

$p1 = $_GET["p1"];
$p2 = $_GET["p2"];
$room = $_GET["room"];

$pdo = new PDO("mysql:host=$host;dbname=$db_name", "$user","$pass");
try {
	$pdo->exec("INSERT INTO game (p1, p2, current, room) VALUES ('$p1', '$p2', '1', '$room')");
	//
	$sth = $pdo->prepare("SELECT * FROM game WHERE p1='$p1' AND p2='$p2' AND current='1'");
	$sth->execute();	
} catch (Exception $e) {
	echo 'Caught exception: ',  $e->getMessage(), "\n";
}
$result = $sth->fetch();

$_SESSION['databaseRow'] = $result["id"];
$_SESSION['p1'] = $p1;
$_SESSION['p2'] = $p2;

if($p1 == $_SESSION['loggedIn']){
	$_SESSION['actualPlayer'] = 1;
}else{
	$_SESSION['actualPlayer'] = 2;
}


echo $result["id"];

?>

