<?php
require_once 'DBController.php';

class shelf
{
    private $db_handle;
    private $shelves;
    function __construct() {
        $this->db_handle = new DBController();
        $this->shelves = array("Art","Science","Literature","Sport");
    }
    function countBooksInShelf($shelf_id){
        $sql = "SELECT COUNT(*) FROM shelves WHERE ShelfId=%d;";
        $sql = sprintf($sql, $shelf_id);
        $count = $this->db_handle->run($sql);
        return $count[0][0];
    }

    // DO NOT USE, SEE LIBRARY.PHP
    function addBook($shelf_id,$book_id){
        if ($shelf_id > 3){
            error_log("Invalid shelf id " . (string)($shelf_id));
            echo "Invalid shelf id " . (string)($shelf_id);
        }
        // Fetch # books already in shelf
        if ($this->countBooksInShelf($shelf_id) > 20){
            error_log("Too many books in Shelf");
            echo "Too many books in Shelf";
        }
        // TODO: Check if book already exists! (No constraints set in DB)
        else{
        $sql = "INSERT INTO shelves (ShelfId, ShelfName, BookId) VALUES (%d,'%s',%d);";
        $sql = sprintf($sql,$shelf_id,$this->shelves[$shelf_id],$book_id);
        $this->db_handle->run($sql);
        }
    }
    // DO NOT USE, SEE LIBRARY.PHP
    function deleteBook($book_id){
        $sql = "DELETE FROM shelves WHERE BookId=%d;";
        $sql = sprintf($sql,$book_id);
        $this->db_handle->run($sql);
    }
}