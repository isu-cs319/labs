<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Contact Information</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <script>
        function editPost(id){
            alert(id);
        }
    </script>
</head>
<body>
<table id="post-table">
    <thead>
    <tr>
        <th>Title</th>
        <th>Body</th>
        <th>Time</th>
        <th>User</th>
        <th>Action</th>
    </tr>
    </thead>
    <tbody>
    <?php
    $posts_dump = json_decode(file_get_contents("posts.json"));
    foreach ($posts_dump as $post){
        echo '<tr>';
        echo '<td>' . $post->{"title"} . '</td>';
        echo '<td>' . $post->{"body"} . '</td>';
        echo '<td>' . $post->{"time"} . '</td>';
        echo '<td>' . $post->{"user"} . '</td>';
        echo '<td><button type="button" value="' . $post->{"id"} . '" onclick="editPost(this.value)"> Edit Post ' . $post->{"id"} . '</button></td>';
    }
    ?>
    </tbody>
</table>

</body>
</html>
