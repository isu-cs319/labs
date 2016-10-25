<?php
require_once 'DBController.php';
require_once 'student.php';
require_once 'library.php';
require_once 'shelf.php';
// Start the session
session_start();
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

<?php
$std = new student($_SESSION["username"]);
$std->addBook(0,"Harry Potter","J.K. Rowling");
?>