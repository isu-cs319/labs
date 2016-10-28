<?php
require_once 'DBController.php';
require_once 'book.php';
require_once 'shelf.php';
/**
 * Created by PhpStorm.
 * User: schott
 * Date: 24.10.16
 * Time: 20:27
 */
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
}