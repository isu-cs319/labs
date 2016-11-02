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

    function borrowHistory($userName){
        $sql = "SELECT * FROM loanHistory WHERE UserName='%s';";
        $sql = sprintf($sql, $userName);
        $history = $this->db_handle->run($sql);
        echo "<table><thead><th>User</th><th>Book ID</th><th>Due Date</th><th>Return Date</th></thead>";
        echo "<tbody>";
        foreach ($history as $d){
            echo "<tr><td>" . $d["UserName"] . "</td>";
            echo "<td>" . $d["BookId"] . "</td>";
            echo "<td>" . $d["DueDate"] . "</td>";
            echo "<td>" . $d["ReturnedDate"] . "</td></tr>";
        }
        echo "</tbody></table>";
    }
    function borrow($book_id){
        // Check if book is already borrowed
        $sql = "SELECT Availability,BookTitle FROM books WHERE bookId=%d;";
        $sql = sprintf($sql, $book_id);
        $availability = $this->db_handle->run($sql);
        if (intval($availability[0]["Availability"]) == 1){
            // Book is available, take it out
            $sql = "UPDATE books SET Availability=0 WHERE bookId='%s';";
            $sql = sprintf($sql, $book_id);
            $this->db_handle->run($sql);
            // Update Loan History
            $sql = "INSERT INTO loanHistory (UserName,BookId,DueDate,ReturnedDate) VALUES ('%s',%d,now()+ INTERVAL 1 DAY,0);";
            $sql = sprintf($sql, $this->id,$book_id);
            $this->db_handle->run($sql);
            echo " User " . $this->id ." successfully borrowed book " .$availability[0]["BookTitle"];
        }
        else{
            error_log("Book is not available!");
            echo "Book is not available!";
        }
    }
    function returnBook($book_id){
        $sql = "SELECT Availability,BookTitle FROM books WHERE bookId=%d;";
        $sql = sprintf($sql, $book_id);
        $availability = $this->db_handle->run($sql);
        if (intval($availability[0]["Availability"]) == 0){
            // Check if right user:
            $sql = "SELECT * FROM loanHistory WHERE bookId=%d AND UserName='%s';";
            $sql = sprintf($sql, $book_id,$this->id);
            $borrowed_by_user = $this->db_handle->run($sql);
            if (!empty($borrowed_by_user[0]["UserName"])){
                // Make Book available again
                $sql = "UPDATE books SET Availability=1 WHERE bookId='%s';";
                $sql = sprintf($sql, $book_id);
                $this->db_handle->run($sql);
                // Update Loan History
                $sql = "UPDATE loanHistory SET ReturnedDate=now();";
                $this->db_handle->run($sql);
                echo " User " . $this->id . " successfully returned book " . $availability[0]["BookTitle"];
            }
            else{
                echo "This book was borrowed by someone else.";
            }
        }
        else{
            echo "Book is still available!";
        }
    }
}