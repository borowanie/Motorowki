<?php
session_start();
//hasla
include 'pass.php';

///////////////////////////////////////////////////////////////////////////

$login = $_POST["email"];
$password = $_POST["password"];

//pdo
$pdo = new PDO("mysql:host=$host;dbname=$db_name", "$user","$pass");
try {
	$sth = $pdo->prepare("SELECT * FROM players WHERE email='$login'");
	$sth->execute();
} catch (Exception $e) {
	throw $e;
}


if($result = $sth->fetch()){
	if($result["password"] == $password){
		
		$_SESSION['loggedIn']=$login;

		header("Location: ../rooms.php");
	}else{
		header("Location: ../login.php");
	}
	
}






