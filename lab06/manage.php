<?php
require_once 'DBController.php';
require_once 'student.php';
require_once 'library.php';
require_once 'shelf.php';
// Start the session
session_start();
$_SESSION["username"] = "david";
$std = new student($_SESSION["username"]);
$std->addBook(0,"Harry Potter","J.K. Rowling");