<?php

// Fetch POST data
$msg = $_POST["msg"];
$action = $_POST["action"];
$user = $_POST["user"];

// Take action

if ($action == "edit"){
    $id = $_POST["id"];
    if ($msg != null && $id != null){
        update_post_body($id,$msg);
        print_table_body();
    }
}
elseif ($action == "add"){
    $date = $_POST["date"];
    $title = $_POST["title"];
    add_new_post($title,$msg,$date,$user);
    print_table_body();
}
elseif ($action == "remove"){
    $id = $_POST["id"];
    remove_post($id);
    print_table_body();
}

function remove_post($id){
    $posts_dump = json_decode(file_get_contents("posts.json"),true);
    $decrement = false;
    for ($i=0; $i < count($posts_dump); $i++){
        if ($posts_dump[$i]["id"] == $id){
            unset($posts_dump[$i]);
            $decrement = true;
        }
    // Write to file
    file_put_contents('posts.json',json_encode($posts_dump));
    }
}

function add_new_post($title,$body, $date, $user){
    $posts_dump = json_decode(file_get_contents("posts.json"),true);
    $new_post = array(
        "id" => count($posts_dump),
        "title" => $title,
        "body" => $body,
        "time" => $date,
        "user" => $user
    );
    $posts_dump[count($posts_dump)] = $new_post;

    // Update posts.json
    file_put_contents('posts.json', json_encode($posts_dump));
}

function update_post_body($id, $body){
    // Load in and update JSON object
    $posts_dump = json_decode(file_get_contents("posts.json"),true);
    for ($i=0; $i < count($posts_dump); $i++){
        if ($posts_dump[$i]["id"] == $id){
            $posts_dump[$i]["body"] = $body;
        }
    }
    // Write to file
    file_put_contents('posts.json',json_encode($posts_dump));
}

function print_table_body(){
    $posts_dump = json_decode(file_get_contents("posts.json"), true);
    foreach ($posts_dump as $post){
        echo '<tr>';
        echo '<td>' . $post["title"] . '</td>';
        echo '<td>' . $post["body"] . '</td>';
        echo '<td>' . $post["time"] . '</td>';
        echo '<td>' . $post["user"] . '</td>';
        echo '<td><button type="button" value="' . $post["id"] . '" onclick="editPost(this.value)"> Edit Post ' . $post["id"] . '</button></td>';
        echo '</tr>';
    }
}