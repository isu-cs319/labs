<?php
$msg = $_POST["msg"];
$id = $_POST["id"];
if ($msg != null && $id != null){
    update_post_body($id,$msg);
    return print_table_body();
}

function update_post_body($id, $body){
    // Load in and update JSON object
    $posts_dump = json_decode(file_get_contents("posts.json"), true);
    foreach ($posts_dump as $post){
        if ($post["id"] == $id){
            $post["body"] = $body;
        }
    }
    // Write to file
    $fp = fopen('posts.json', 'w');
    fwrite($fp, json_encode($posts_dump));
    fclose($fp);
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