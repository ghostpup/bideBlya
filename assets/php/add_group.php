<? require "../../include/connection.php";
if (isset($_POST['direction_id']) && isset($_POST['group_name']) && isset($_POST['group_year']) && isset($_POST['group_model']))
{   try{
        $data = $_POST;
        $connection->setAttribute(PDO::ATTR_EMULATE_PREPARES,false);
        $statement = $connection->prepare('INSERT INTO `st_group` (`id_group`, `id_direction_vk`, `group_name`, `receipt_year`, `learning_model`) VALUES (NULL, :direction_id, :group_name, :group_year, :group_model);');
        $statement->bindParam(":direction_id",$data['direction_id']);
        $statement->bindParam(":group_name",$data['group_name']);
        $statement->bindParam(":group_year",$data['group_year']);
        $statement->bindParam(":group_model",$data['group_model']);
        $statement->execute();
        echo true;
    }
    catch(Exception $e){
        echo "Error: ".$e->getMessage();
    }
}else
    echo false;
?>
