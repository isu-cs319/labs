<?php
require_once 'DBController.php';
require_once 'book.php';
require_once 'shelf.php';
require_once 'student.php';
//error_reporting(E_ERROR | E_PARSE);

session_start();
$userId = $_SESSION["username"];
// Fetch POST data
$action = $_POST["action"];
$lib = new library();
$std = new student($userId);

// Cases
if ($action == "viewShelf"){
    $shelf_id = $_POST["shelf_id"];
    $lib->viewShelf($shelf_id);
}
elseif ($action == "viewDetails"){
    $book_id = $_POST["id"];
    $lib->viewDetails($book_id);
}
elseif($action == "addBook"){
    $book_id = $lib->db_handle->run("SELECT COUNT(*) from books;");
    $shelf_name = $_POST["shelf_name"];
    $shelf_id = $lib->shelfNameToID($shelf_name);
    $book_title = $_POST["title"];
    $author = $_POST["author"];
    $lib->registerBook($shelf_id,$book_id[0][0],$book_title,$author);
}
elseif($action == "viewLibrary"){
    $lib->viewLibrary();
}
elseif($action == "removeBook"){
    $book_id = $_POST["id"];
    $lib->releaseBook($book_id);
}
elseif($action == "history"){
    $username = $_POST["id"];
    $std->borrowHistory($username);
}
elseif($action == "borrowBook") {
    $book_id = $_POST["id"];
    $std->borrow($book_id);
}
elseif($action == "returnBook") {
    $book_id = $_POST["id"];
    $std->returnBook($book_id);
}

class library
{
    public $db_handle;
    private $shelf_mgr;
    private $book_mgr;

    function __construct() {
        $this->db_handle = new DBController();
        $this->shelf_mgr = new shelf();
        $this->book_mgr = new book();
    }

    function registerBook($shelf_id,$book_id,$title,$author){
        $this->book_mgr->addBook($book_id,$title,$author);
        $this->shelf_mgr->addBook($shelf_id,$book_id);
    }

    function releaseBook($book_id){
        $this->shelf_mgr->deleteBook($book_id);
        $this->book_mgr->deleteBook($book_id);
    }

    function viewDetails($book_id){
        // TODO: Get only details from one book, not all books.
        $sql = "SELECT books.BookId,books.BookTitle,books.Author,books.Availability,shelves.ShelfName
        FROM books INNER JOIN shelves ON books.BookId = shelves.BookId WHERE books.BookId=%d;";
        $sql = sprintf($sql,$book_id);
        $details = $this->db_handle->run($sql);
        echo "<table><thead><th>Title</th><th>Author</th><th>Availability</th><th>ID</th><th>Shelf</th></thead>";
        echo "<tbody>";
        foreach ($details as $d){
            echo "<tr><td>" . $d["BookTitle"] . "</td>";
            echo "<td>" . $d["Author"] . "</td>";
            echo "<td>" . $d["Availability"] . "</td>";
            echo "<td>" . $d["BookId"] . "</td>";
            echo "<td>" . $d["ShelfName"] . "</td></tr>";
        }
        echo "</tbody></table>";
    }

    function shelfNameToID($name){
        switch ($name){
            case "Art":
                return 0;
            case "Science":
                return 1;
            case "Literature":
                return 2;
            case "Sport":
                return 3;
            default:
                return -1;
        }
    }

    function viewLibrary(){
        $library = array();
        $num_rows = 0;
        // Calculate number of rows necessary
        for ($i=0; $i<4; $i++){
            $sql = "SELECT books.BookTitle,books.Author,books.Availability,books.BookId,shelves.ShelfId FROM books
 INNER JOIN shelves ON books.BookId = shelves.BookId WHERE ShelfId=" . $i.";";
            $library[$i] = $this->db_handle->run($sql);
            $num_rows = max($num_rows,count($library[$i]));
        }
        for ($i=0; $i<$num_rows; $i++){
            echo "<tr>";
            foreach ($library as $lib){
                $b = $lib[$i];
                if ($b != null){
		   $display = "(" . $b["BookId"] . ") " . $b["BookTitle"];
                    echo "<td><div data-toggle='modal' data-target='#details-modal' value='" . $b["BookId"]."' onclick='viewDetails(" . $b["BookId"] . ");'>" .$display. "</div></td>";
                }
                else{
                    echo "<td></td>";
                }
            }
            echo "</tr>";
        }
    }
}