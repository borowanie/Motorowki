<?php
include 'pass.php';
$pdo = new PDO("mysql:host=$host;dbname=$db_name", "$user","$pass");


$room = Array();
$p1 = Array();
$p2 = Array();
$result = Array();


try {
	$sth = $pdo->prepare("SELECT * FROM rooms ORDER BY id DESC");
	$sth->execute();

} catch (Exception $e) {
	throw $e;
}


foreach($sth as $row)
{
	//echo $row['p2'];


	array_push($room, $row['roomName']);
	array_push($p1, $row['p1']);
	array_push($p2, $row['p2']);
	array_push($result, $room, $p1, $p2);

	echo json_encode($result); 
	      //echo $row['nazwa_pokoju'];

/*	array_push($room, $row['nazwa_pokoju']);
	array_push($p1, $row['p1']);
	array_push($p2, $row['p2']);*/
          //$result.push($row["nazwa_pokoju"]);
}
/*$result = Array();
foreach($sth as $row)
{
          //echo $row['nazwa_pokoju'];
	array_push($room, $row['nazwa_pokoju']);
	array_push($p1, $row['p1']);
	array_push($p2, $row['p2']);
          //$result.push($row["nazwa_pokoju"]);
}
//echo "asd";
echo json_encode($result); 
//print_r($result);
//print_r($result);*/
?>
