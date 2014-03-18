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


if($_SESSION['actualPlayer'] == 1){
	if($result["p2start"]=="1"){
		echo $result["p2pos"];
	}else{
		echo "0";
	}
}else{
	if($result["p1start"]=="1"){
		echo $result["p1pos"];
	}else{
		echo "0";
	}
}





