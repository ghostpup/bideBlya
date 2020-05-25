<? require "../../include/connection.php";
if (isset($_POST['id_faculty']))
{   try{
        $data = $_POST;
        $connection->setAttribute(PDO::ATTR_EMULATE_PREPARES,false);
        $statement = $connection->prepare('DELETE FROM `faculty` WHERE `faculty`.`id_faculty` = :id_faculty;');
        $statement->bindParam(":id_faculty",$data['id_faculty']);
        $statement->execute();
        echo true;
    }
    catch(Exception $e){
        echo "Error: ".$e->getMessage();
    }
}else
    echo false;
?>
