<?php
require_once 'DBController.php';
require_once 'book.php';
require_once 'shelf.php';

class library
{
    private $db_handle;
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
        $this->db_handle->run($sql);
    }

    function viewShelf($shelf_id){
        if ($shelf_id > 3){
            error_log("Invalid shelf id " . (string)($shelf_id));
            echo "Invalid shelf id " . (string)($shelf_id);
            return -1;
        }
        else{
            $sql = "SELECT BookId FROM shelves WHERE ShelfId=%d;";
            $sql = sprintf($sql,$shelf_id);
            $book_ids = $this->db_handle->run($sql);
            $books = array();
            foreach ($book_ids as $id){
                $sql = "SELECT * FROM books WHERE BookId=%d;";
                $sql = sprintf($sql,$id);
                array_push($books,$this->db_handle->run($sql));
            }
            return $books;
        }
    }
}