<?php

session_start();

require_once 'DBController.php';

$db_handle = new DBController();

//$verified = 0;
?>

<!DOCTYPE html>

<head>
  <title> Login </title>
  <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
  <style>
  .retry {
  display: none;
  }
  </style>
</head>

<body>

<span class="retry"> Login failed. </span>
<a href="login.html" class="retry"> Click here to retry. </a> <br>
  
</body>
</html>



<?php

if (isset($_POST["username"]) && isset($_POST["password"])) {
//$_SESSION["username"] = $_POST["username"];
$givenUsername = $_POST["username"];
$givenPassword = md5($_POST["password"]);

//echo $givenUsername;
//echo "<br>";
//echo $givenPassword;
//echo "<br>";

$sql = "SELECT userName,Password FROM users WHERE userName='%s';";
$sql = sprintf($sql, $givenUsername);
//echo $sql;
$found = $db_handle->run($sql);

if ($found[0]["userName"] == $givenUsername && $found[0]["Password"] == $givenPassword) {
//echo $found[0]["userName"];
//echo "<br>";
//echo $found[0]["Password"];
//echo "<br><br><br>";
$_SESSION["username"] = $found[0]["userName"];
header("Location: manage.php");
}
else {
//echo "FAIL!!<br><br>";
echo '<style type="text/css">
        .retry {
            display: inline;
        }
        </style>';
}

//$var_dump($found);

}

//if ($verified == 1) {
//header("Location: manage.php");
//}
//else {
//echo '<style type="text/css">
//        .retry {
//            display: inline;
//        }
//        </style>';
//}

?>