<?php
$msg = $_POST["msg"];
$id = $_POST["id"];
if ($msg != null && $id != null){
    update_post_body($id,$msg);
    print_table_body();
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