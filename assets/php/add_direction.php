<? require "../../include/connection.php";
if (isset($_POST['faculty_id']) && isset($_POST['direction_name']))
{   try{
        $data = $_POST;
        $connection->setAttribute(PDO::ATTR_EMULATE_PREPARES,false);
        $statement = $connection->prepare('INSERT INTO `direction` (`id_direction`, `id_faculty_vk`, `direction_name`) VALUES (NULL, :faculty_id, :direction_name);');
        $statement->bindParam(":direction_name",$data['direction_name']);
        $statement->bindParam(":faculty_id",$data['faculty_id']);
        $statement->execute();
        echo true;
    }
    catch(Exception $e){
        echo "Error: ".$e->getMessage();
    }
}else
    echo false;
?>
