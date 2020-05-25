<? require "../../include/connection.php";
if (isset($_POST['direction_id']) && isset($_POST['discipline_name']))
{   try{
        $data = $_POST;
        $connection->setAttribute(PDO::ATTR_EMULATE_PREPARES,false);
        $statement = $connection->prepare('INSERT INTO `discipline` (`id_discipline`, `id_direction_vk`, `discipline_name`) VALUES (NULL, :direction_id, :discipline_name);');
        $statement->bindParam(":direction_id",$data['direction_id']);
        $statement->bindParam(":discipline_name",$data['discipline_name']);
        $statement->execute();
        echo true;
    }
    catch(Exception $e){
        echo "Error: ".$e->getMessage();
    }
}else
    echo false;
?>
