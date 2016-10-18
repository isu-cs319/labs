<?php
include_once('Crypt/RSA.php');

$action = $_POST["action"];
$user = $_POST["user"];

if ($action == "fetch"){
    $private_key = getPrivateKey($user);
    fetchMessages($private_key);
}
/*
$user = "emily";
$private_key = getPrivateKey($user);
fetchMessages($private_key);
*/
function getPrivateKey($user){
    $users = file_get_contents("users.txt");
    $chunks = explode(":", $users);
    for ($i=0; $i < count($chunks); $i++){
        if ($chunks[$i] == $user){
            return $chunks[$i+2];
        }
    }
    return "";
}

//Function for decrypting with RSA. TODO: Throws some strange infinite internal error
function rsa_decrypt($string, $private_key)
{
    return $string;
    //Create an instance of the RSA cypher and load the key into it
    $cipher = new Crypt_RSA();
    $cipher->loadKey($private_key);
    //Set the encryption mode
    $cipher->setEncryptionMode(CRYPT_RSA_ENCRYPTION_PKCS1);
    //Return the decrypted version
    return $cipher->decrypt($string);
}

function fetchMessages($key){
    global $user;
    $msgs_dump = json_decode(file_get_contents("messages.json"),true);
    foreach ($msgs_dump as $post){
        if ($user == $post["receiver"]){
            echo '<tr>';
            echo '<td>' . $post["sender"] . '</td>';
            echo '<td>' . rsa_decrypt(utf8_decode($post["msg"]),$key) . '</td>';
            echo '</tr>';
        }
    }
}