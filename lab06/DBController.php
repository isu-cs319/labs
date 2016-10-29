<?php


class DBController {
    private $host = "mysql.cs.iastate.edu";
    private $port = "3306";
    private $dbName = "db319t47";
    private $user = "dbu319t47";
    private $password = "tHAze\$e2";
    private $conn;
    function __construct() {
        $this->conn = $this->connectDB();
    }

    function getConn(){
        return $this->conn;
    }

    function connectDB() {
        // Create connection
        $conn = new mysqli($this->host, $this->user, $this->password, $this->dbName);
        // Check connection
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        } else {
            return $conn;
        }
    }

    function run($query) {
        echo $query;
        return mysqli_query($this->conn, $query)->fetch_assoc();
        /*$result = $this->conn->query($query);
        while($row=$result->fetch_assoc()) {
            $resultset[] = $row;
        }
        if(!empty($resultset))
            return $resultset;
        return "";*/
    }

}
?>