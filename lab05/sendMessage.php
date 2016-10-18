<?php

include_once('Crypt/RSA.php');

//Function for encrypting with RSA TODO: Make this more stable
function rsa_encrypt($string, $public_key)
{
    return $string;
    //Create an instance of the RSA cypher and load the key into it
    $cipher = new Crypt_RSA();
    $cipher->loadKey($public_key);
    //Set the encryption mode
    $cipher->setEncryptionMode(CRYPT_RSA_ENCRYPTION_PKCS1);
    //Return the encrypted version
    return $cipher->encrypt($string);
}

// Fetch POST data
$msg = $_POST["msg"];
$action = $_POST["action"];
$user = $_POST["sender"];
$receiver = $_POST["receiver"];


if ($action == "send"){
    $public_key = getPublicKey($receiver);
    addMessage($public_key);
}


function addMessage($public_key){
    global $msg, $user, $receiver;
    $msgs_dump = json_decode(file_get_contents("messages.json"),true);
    $msg_encrypted = utf8_encode(rsa_encrypt($msg,$public_key));
    $new_post = array(
        "receiver" => $receiver,
        "sender" => $user,
        "msg" => $msg_encrypted
    );
    var_dump($new_post);
    $msgs_dump[count($msgs_dump)] = $new_post;
    // Update msgs.json
    file_put_contents('messages.json', json_encode($msgs_dump));
}

function getPublicKey($user){
    $users = file_get_contents("users.txt");
    $chunks = explode(":", $users);
    for ($i=0; $i < count($chunks); $i++){
        if ($chunks[$i] == $user){
            return $chunks[$i+3];
        }
    }
    return "";
}