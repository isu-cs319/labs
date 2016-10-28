<?php
require_once 'DBController.php';
require_once 'library.php';
require_once 'student.php';
// Start the session
session_start();

$std = new student($_SESSION["username"]);
?>

<!DOCTYPE html>

<head>
<style>
div {
    text-align: right;
}
</style>
</head>

<body>
<div> Hello, <?php echo $_SESSION["username"]; ?>. <a href="logout.php">Click to logout</a> </div>
<br>
  
</body>
</html>