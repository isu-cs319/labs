<?php
require_once 'DBController.php';
require_once 'library.php';
require_once 'student.php';
// Start the session
//session_start();
//$_SESSION["username"] = "david";
?>

<!DOCTYPE html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>LibraryViewer</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<style>
.login-box {
    text-align: right;
}
table, th, td {
    border: 1px solid black;
    padding: 5px;
}
</style>
</head>

<body>
<div class="login-box"> Hello, <?php echo $_SESSION["username"]; ?>. <a href="logout.php">Click to logout</a> </div>
<br>
  <?php
//if ($_SESSION["username"] == "admin"){
if ($_SESSION["librarian"] == 1) {
// Admin buttons
echo '<style type="text/css">
        .studentbtn {
            display: none;
        }
        </style>';
}
else{
// Student buttons
echo '<style type="text/css">
        .btn {
            display: none;
        }
        </style>';
}
?>
<table id="library" border="1">
    <thead>
    <tr>
        <th>Shelf Art</th>
        <th>Shelf Science</th>
        <th>Shelf Literature</th>
        <th>Shelf Sport</th>
    </tr>
    </thead>
    <tbody id="library-body">

    </tbody>
</table>
<div>
    <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#history-modal" onclick="history();">View History of User</button> <br>
    <button type="button" class="btn btn-info btn-lg" onclick="removeBook();">Remove Book</button>
    <button type="button" class="studentbtn" onclick="borrowBook();">Borrow Book</button>
    <button type="button" class="studentbtn" onclick="returnBook();">Return Book</button>
</div>
<div>
    <!-- Trigger the add post with a button -->
    <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Add Book</button>
    
    <!-- Modal -->
    <div id="myModal" class="modal fade" role="dialog">
        <div class="modal-dialog">
            <!-- Modal content-->
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title">Registering new Book</h4>
                </div>
                <div class="modal-body">
                    <input type="text" placeholder="Enter Title" id="new-title"/>
                    <input type="text" placeholder="Enter Shelf" id="new-shelf"/>
                    <input type="text" placeholder="Enter Author" id="new-author"/>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-info btn-lg" onclick="addBook();">Add</button>
                </div>
            </div>

        </div>
    </div>
    <!-- Details Modal -->
    <div id="details-modal" class="modal fade" role="dialog">
        <div class="modal-dialog">
            <!-- Modal content-->
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title">Viewing Details</h4>
                </div>
                <div class="modal-body" id="details-body">
                </div>
		<br> <br>
            </div>
        </div>
    </div>
    <!-- History Modal -->
    <div id="history-modal" class="modal fade" role="dialog">
        <div class="modal-dialog">
            <!-- Modal content-->
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title">Viewing History</h4>
                </div>
                <div class="modal-body" id="history-body">
                </div>
                <br> <br>
            </div>
        </div>
    </div>
</div>
<script type="text/javascript">
    $(document).ready(function(){
       refreshTable();
    });
    function addBook(){
        var title = $("#new-title").val();
        var shelf = $("#new-shelf").val();
        var author = $("#new-author").val();
        $.ajax({
            url: "library.php",
            type: "POST",
            data:{
                "action":"addBook",
                "shelf_name":shelf,
                "author":author,
                "title":title
            },
            success: function(result){
                refreshTable();
            }});
    }
    function viewDetails(id){
        console.log(id);
        $("#details-body").html("Loading...");
        $.ajax({
            url: "library.php",
            type: "POST",
            data:{
                "action":"viewDetails",
                "id":id
            },
            success: function(result){
                console.log(result);
                $("#details-body").html(result);
            }});
    }
    function removeBook() {
        var id = prompt("Enter Book ID");
        if (id != null) {
            $.ajax({
                url: "library.php",
                type: "POST",
                data: {
                    "action": "removeBook",
                    "id": id
                },
                success: function (result) {
                    refreshTable();
                }
            });
        }
    }
    function borrowBook() {
        var id = prompt("Enter Book ID to Borrow:");
        if (id != null) {
            $.ajax({
                url: "library.php",
                type: "POST",
                data: {
                    "action": "borrowBook",
                    "id": id
                },
                success: function (result) {
		            refreshTable();
                    alert(result);
                    //$(".login-box").css({"color": "red"});
                }
            });
        }
    }
    function returnBook() {
        var id = prompt("Enter Book ID to Return:");
        if (id != null) {
            $.ajax({
                url: "library.php",
                type: "POST",
                data: {
                    "action": "returnBook",
                    "id": id
                },
                success: function (result) {
		            refreshTable();
                    alert(result);
                    //$(".login-box").css({"color": "red"});
                }
            });
        }
    }
    function history() {
        var id = prompt("Enter Username to view history:");
        $("#history-body").html("Loading...");
        if (id != null) {
            $.ajax({
                url: "library.php",
                type: "POST",
                data: {
                    "action": "history",
                    "id": id
                },
                success: function (result) {
                    $("#history-body").html(result);
                    refreshTable();
                    //$(".login-box").css({"color": "red"});
                }
            });
        }
    }
    function refreshTable(){
        var tbody = document.getElementById("library").tBodies[0];
        /*var numShelves = $("#library > thead > tr:first > th").length;
        var numRows = tbody.rows.length;
        var i;
        for (i=0; i<numShelves;i++){
            console.log("Fetching Shelf: " + i);
            $.ajax({
                url: "library.php",
                type: "POST",
                data:{
                    "action":"viewShelf",
                    "shelf_id":i
                },
                success: function(result){
                    console.log(result);
                    tbody.innerHTML = result;
                    //tbody.rows[i].html += result;
                }});
        }*/
        $.ajax({
            url: "library.php",
            type: "POST",
            data:{
                "action":"viewLibrary"
            },
            success: function(result){
                tbody.innerHTML = result;
            }});
    }
</script>
</body>
</html>