<? require "../../include/connection.php";
if (isset($_POST['discipline_id']) && isset($_POST['trial_id']))
{   try{
        $data = $_POST;
        $connection->setAttribute(PDO::ATTR_EMULATE_PREPARES,false);
        $statement = $connection->prepare('INSERT INTO `trial` (`id_trial`, `id_discipline_vk`, `trial_type`) VALUES (NULL, :discipline_id, :trial_id);');
        $statement->bindParam(":discipline_id",$data['discipline_id']);
        $statement->bindParam(":trial_id",$data['trial_id']);
        $statement->execute();
        echo true;
    }
    catch(Exception $e){
        echo "Error: ".$e->getMessage();
    }
}else
    echo false;
?>
