<?php
session_start();

include 'pass.php';


$x = $_POST["x"];
$y = $_POST["y"];

$row = $_SESSION['databaseRow'];
$user = $_SESSION['actualPlayer'];


$pdo = new PDO("mysql:host=$host;dbname=$db_name", "$user","$pass");
try {
	$sth = $pdo->prepare("SELECT * FROM game WHERE id=$row");
	$sth->execute();

	


} catch (Exception $e) {
	throw $e;
}
$result = $sth->fetch();

if($user == 1){

	$tab = var_dump(json_decode($result["p2pos"]));
	if($tab[$x][$y] == 1){
		return true;
	}else{
		return false;
		if($user == 1)
			$pdo->exec("UPDATE game SET current='2' WHERE id=$row");
		else
			$pdo->exec("UPDATE game SET current='1' WHERE id=$row");
	}
}else{
	
	$tab = var_dump(json_decode($result["p1pos"]));
	if($tab[$x][$y] == 1){
		return true;
	}else{
		return false;
		if($user == 1)
			$pdo->exec("UPDATE game SET current='2' WHERE id=$row");
		else
			$pdo->exec("UPDATE game SET current='1' WHERE id=$row");
	}
}





