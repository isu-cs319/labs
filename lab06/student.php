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

    function borrowHistory(){
        $sql = "SELECT * FROM loanHistory WHERE UserName='%s';";
        $sql = sprintf($sql, $this->id);
        return $this->db_handle->run($sql);
    }

}