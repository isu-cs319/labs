<?php
require_once 'DBController.php';
class book
{
    private $db_handle;
    function __construct() {
        $this->db_handle = new DBController();
    }
    // DO NOT USE, SEE LIBRARY.PHP
    function addBook($id,$title,$author){
        $sql = "INSERT INTO books (BookId, BookTitle, Author, Availability) VALUES (%d,'%s','%s',%d);";
        $sql = sprintf($sql,$id,$title,$author,1);
        $this->db_handle->run($sql);
    }
    // DO NOT USE, SEE LIBRARY.PHP
    function deleteBook($book_id){
        $sql = "DELETE FROM books WHERE BookId=%d;";
        $sql = sprintf($sql,$book_id);
        $this->db_handle->run($sql);
    }
}