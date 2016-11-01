<?php
require_once 'DBController.php';

class student
{
    private $id;
    private $db_handle;
    function __construct($userName) {
        $this->id = $userName;
        $this->db_handle = new DBController();
    }

    function borrowHistory(){
        $sql = "SELECT * FROM loanHistory WHERE UserName='%s';";
        $sql = sprintf($sql, $this->id);
        return $this->db_handle->run($sql);
    }
    function borrow($book_id){
        // Check if book is already borrowed
        $sql = "SELECT Availability FROM books WHERE bookId='%s';";
        $sql = sprintf($sql, $book_id);
        $availability = $this->db_handle->run($sql);
        if ($availability["Availability"] != 0){
            // Book is available, take it out
            $sql = "UPDATE books SET Availability=0 WHERE bookId='%s';";
            $sql = sprintf($sql, $book_id);
            $this->db_handle->run($sql);
            // Update Loan History
            $sql = "INSERT INTO loanHistory (UserName,BookId,DueDate,ReturnedDate) VALUES ('%s',%d,now(),'');";
            $sql = sprintf($sql, $this->id,$book_id);
            $this->db_handle->run($sql);
        }
        else{
            error_log("Book is not available!");
            echo "Book is not available!";
        }
    }
    function returnBook($book_id){
        // Book is available again
        $sql = "UPDATE books SET Availability=1 WHERE bookId='%s';";
        $sql = sprintf($sql, $book_id);
        $this->db_handle->run($sql);
        // Update Loan History
        $sql = "UPDATE loanHistory SET ReturnedDate=now();";
        $this->db_handle->run($sql);
    }
}