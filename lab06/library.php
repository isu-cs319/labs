<?php
require_once 'DBController.php';
require_once 'book.php';
require_once 'shelf.php';


// Fetch POST data
$action = $_POST["action"];
$lib = new library();

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
    $lib->registerBook($shelf_id,$book_id["COUNT(*)"],$book_title,$author);
}
elseif($action == "removeBook"){
    $book_id = $_POST["id"];
    $lib->releaseBook($book_id);
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
        $sql = "SELECT books.BookTitle,books.Author,books.Availability,shelves.ShelfName
        FROM books WHERE books.BookId='%s' INNER JOIN shelves ON books.BookId = shelves.BookId;";
        $sql = sprintf($sql,$book_id);
        $details = $this->db_handle->run($sql);
        echo "<table><thead><th>Title</th><th>Author</th><th>Availability</th><th>Shelf</th></thead>";
        echo "<tbody>";
        foreach ($details as $d){
            echo "<tr><td>" . $d["BookTitle"] . "</td>";
            echo "<td>" . $d["Author"] . "</td>";
            echo "<td>" . $d["Availability"] . "</td>";
            echo "<td>" . $d["Shelf"] . "</td></tr>";
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

    function viewShelf($shelf_id){
        if ($shelf_id != "Art" && $shelf_id != "Science" && $shelf_id != "Literature" && $shelf_id != "Sport"){
            error_log("Invalid shelf id " . (string)($shelf_id));
            echo "Invalid shelf id " . (string)($shelf_id);
        }
        else{
            $sql = "SELECT BookId FROM shelves WHERE ShelfName='%s'";
            $sql = sprintf($sql,$shelf_id);
            $book_ids = $this->db_handle->run($sql);
            $books = array();
            foreach ($book_ids as $id){
                $sql = "SELECT * FROM books WHERE BookId=%d;";
                $sql = sprintf($sql,$id);
                array_push($books,$this->db_handle->run($sql));
            }
            // TODO: Print an actual table
            echo "<td>" . $books[0]["BookTitle"] . "</td>";
        }
    }
}