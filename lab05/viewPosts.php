<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Viewing Posts</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <style>
        table, th, td {
            border: 1px solid black;
            padding: 5px;
        }
    </style>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <script>
        var user = "placeholder";  //TODO: Load from local storage!
        function editPost(id){
            var new_body = prompt("Enter new Post body");
            if (new_body != null){
                $.ajax({
                    url: "updatePosts.php",
                    type: "POST",
                    data:{
                        "action":"edit",
                        "msg":new_body,
                        "id":id,
                        "user":user
                    },
                    success: function(result){
                        console.log(result);
                    $("#posts").html(result);
                }});
            }
        }

        function addPost(){
            var title = $("#post-title");
            var body = $("#post-body");
            var date = new Date();
            $.ajax({
                url: "updatePosts.php",
                type: "POST",
                data:{
                    "action":"add",
                    "msg":body,
                    "date":date,
                    "user":user,
                    "title":title
                },
                success: function(result){
                    console.log(result);
                    $("#posts").html(result);
                }});
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
    <tbody id="posts">
    <?php
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
    ?>
    </tbody>
</table>
<div>
<h4>Create Post</h4>
    <!-- Trigger the modal with a button -->
    <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Add</button>

    <!-- Modal -->
    <div id="myModal" class="modal fade" role="dialog">
        <div class="modal-dialog">
            <!-- Modal content-->
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title">Creating new Post</h4>
                </div>
                <div class="modal-body">
                    <input type="text" placeholder="Enter Title" id="post-title"/>
                    <input type="text" placeholder="Enter Body" id="post-body"/>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-info btn-lg" onclick="addPost();">Add</button>
                </div>
            </div>

        </div>
    </div>
</div>
</body>
</html>