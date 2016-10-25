<?php
require_once 'DBController.php';
/**
 * Created by PhpStorm.
 * User: schott
 * Date: 24.10.16
 * Time: 21:29
 */
class student
{
    private $id;
    private $db_handle;
    function __construct($userName) {
        $this->id = $userName;
        $this->db_handle = new DBController();
    }
    function addBook($id,$title,$author){
        $sql = "INSERT INTO books (BookId, BookTitle, Author, Availability) VALUES (%d,'%s','%s',%d);";
        $sql = sprintf($sql,$id,$title,$author,1);
        $this->db_handle->run($sql);
    }

}