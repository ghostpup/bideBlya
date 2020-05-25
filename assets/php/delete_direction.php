<? require "../../include/connection.php";
if (isset($_POST['id_direction']))
{   try{
        $data = $_POST;
        $connection->setAttribute(PDO::ATTR_EMULATE_PREPARES,false);
        $statement = $connection->prepare('DELETE FROM `direction` WHERE `direction`.`id_direction` = :id_direction;');
        $statement->bindParam(":id_direction",$data['id_direction']);
        $statement->execute();
        echo true;
    }
    catch(Exception $e){
        echo "Error: ".$e->getMessage();
    }
}else
    echo false;
?>
