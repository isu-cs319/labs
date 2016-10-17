<?php

	if (isset($_POST["username"]) && isset($_POST["password"])) {
	   $enteredUsername = $_POST["username"];
	   $enteredPassword = $_POST["password"];
	}
	
	$myfile = fopen("users.txt", "r") or die("Unable to open file");
	$login_succeed = false;

	while(! feof($myfile))
  	{	
		$line = fgets($myfile). "<br />";
		$lineUsername = substr($line, 0, strpos($line, ":"));
		$linePassword = substr($line, strpos($line, ":")+1, strpos($line, ":", strpos($line, ":") + 1) - strlen($lineUsername) - 1);

		if (strcmp($lineUsername, $enteredUsername) == 0) {
		     if (strcmp($linePassword, $enteredPassword) == 0) {
			$login_succeed = true;
		     }
		}
  	}

	fclose($myfile);


	$data1 = "True";
	$data2 = "False";
  	header("Content-type: application/json");
	if ($login_succeed == true){
	   echo json_encode($data1);
	}
	else {
	   echo json_encode($data2);
	}


?>