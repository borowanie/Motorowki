<?php
session_start();
//hasla
include 'pass.php';

///////////////////////////////////////////////////////////////////////////

$login = $_POST["login"];
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
		if(isset($_SESSION['loggedIn']))
			$_SESSION['loggedIn']=$login;
		else
			$_SESSION['loggedIn']=$login;

		echo "use = ". $_SESSION['loggedIn'];
	}else{
		echo "wrong password";
	}
	
}






