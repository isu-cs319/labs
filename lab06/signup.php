<!DOCTYPE html>
<html>
<head>
  <title> Sign Up </title>
  <style>
    .error {
    color: red;
    }
  </style>
</head>

<body>

  <?php

     session_start();
     $_SESSION["tester"] = "YAA";

     $_SESSION["username"] = "";
     $password = "";
     $email = "";
     $phone = "";
     $_SESSION["librarian"] = "";
     $firstname = "";
     $lastname = "";

     $usernameErr = "";
     $password1Err = "";
     $password2Err = "";
     $emailErr = "";
     $phoneErr = "";
     $firstnameErr = "";
     $lastnameErr = "";

     if ($_SERVER["REQUEST_METHOD"] == "POST") {

     if (empty($_POST["username"])) {
       $usernameErr = "* This field is required";
     }
     else {
       $_SESSION["username"] = $_POST["username"];
       if (!preg_match("/^[a-zA-Z0-9]*$/",$_SESSION["username"])) {
         $usernameErr = "* Only letters and numbers allowed"; 
       }
     }

     if (empty($_POST["password1"])) {
       $password1Err = "* This field is required";
     }
     if (empty($_POST["password2"])) {
       $password2Err = "* This field is required";
     }
     else {
       if ($_POST["password1"] != $_POST["password2"]) {
         $password1Err = "* Passwords to not match";
       }
       else {
         $password = $_POST["password1"];
       }
     }

     if (empty($_POST["email"])) {
       $emailErr = "* This field is required";
     }
     else {
       $email = $_POST["email"];
       if (!preg_match("/^[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z]{2,4}$/", $email)) {
         $emailErr = "* Email must be in format xxx@xxx.xxx and must be alphanumeric";
       }
     }

     if (empty($_POST["phone"])) {
       $phoneErr = "* This field is required";
     }
     else {
       $phone = $_POST["phone"];
       if ((!preg_match("/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/", $phone)) && (!preg_match("/^[0-9]{10}$/", $phone))) {
         $phoneErr = "* Phone must be in format xxx-xxx-xxxx or xxxxxxxxxx";
       }
     }

     if (isset($_POST["librarian"])) {
     $_SESSION["librarian"] = "librarian";
     }
     else {
     $_SESSION["librarian"] = "student";
     }

     if (empty($_POST["firstname"])) {
       $firstnameErr = "* This field is required";
     }
     else {
       $firstname = $_POST["firstname"];
       if (!preg_match("/^[a-zA-Z]*$/",$firstname)) {
         $firstnameErr = "* Only letters allowed"; 
       }
     }

     if (empty($_POST["lastname"])) {
       $lastnameErr = "* This field is required";
     }
     else {
       $lastname = $_POST["lastname"];
       if (!preg_match("/^[a-zA-Z]*$/",$lastname)) {
         $lastnameErr = "* Only letters allowed"; 
       }
     }

     
     }
     
     ?>
  
  <form id="signup" name="signup" method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
    <!--action="Signup.php"-->
    <fieldset>
      <legend> Sign Up </legend>

      <br>
      Enter Username:
      <input type="text" name="username" value="<?php echo $_SESSION["username"];?>">
      <span class="error"> <?php echo $usernameErr;?> </span>
      <br> <br>
      Enter Password:
      <input type="password" name="password1">
      <span class="error"> <?php echo $password1Err;?> </span>
      <br> <br>
      Confirm Password:
      <input type="password" name="password2">
      <span class="error"> <?php echo $password2Err;?> </span>
      <br> <br>
      Enter Email:
      <input type="text" name="email" placeholder="xxx@xxx.xxx" value="<?php echo $email;?>">
      <span class="error"> <?php echo $emailErr;?> </span>
      <br> <br>
      Enter Phone Number:
      <input type="text" name="phone" placeholder="xxx-xxx-xxxx" value="<?php echo $phone;?>">
      <span class="error"> <?php echo $phoneErr;?> </span>
      <br> <br>
      <input type="checkbox" name="librarian" value="librarian">
      Check this box if you are a librarian
      <span class="error"> <?php echo $_SESSION["librarian"];?> </span>
      <br> <br>
      Enter First Name:
      <input type="text" name="firstname" value="<?php echo $firstname;?>">
      <span class="error"> <?php echo $firstnameErr;?> </span>
      <br> <br>
      Enter Last Name:
      <input type="text" name="lastname" value="<?php echo $lastname;?>">
      <span class="error"> <?php echo $lastnameErr;?> </span>
      <br> <br>

      <input type="submit" value="Sign Up">
      
      
    </fieldset>
  </form>
  <br>
  Already signed up? <a href="login.html"> Click here to login </a>
  
  <?php
  if ($usernameErr == "" &&
     $password1Err == "" &&
     $password2Err == "" &&
     $emailErr == "" &&
     $phoneErr == "" &&
     $firstnameErr == "" &&
     $lastnameErr == "") {
     echo "<br> <br> no errors->redirect to login";
     }
     ?>
  
</body>
</html>
