<? require "../../include/connection.php";
if (
    isset($_POST["id_group"]) &&
    isset($_POST["second_name"]) &&
    isset($_POST["first_name"]) &&
    isset($_POST["patronymic"]) &&
    isset($_POST["sex"]) &&
    isset($_POST["birth_date"]) &&
    isset($_POST["gradebook"]) &&
    isset($_POST["passport"])){ 
      try{
        $data = $_POST;
        $connection->setAttribute(PDO::ATTR_EMULATE_PREPARES,false);
        $statement = $connection->prepare('INSERT INTO `student` (`id_student`, `id_group_vk`, `first_name`, `second_name`, `patronymic`, `gradebook_number`, `birth_date`, `sex`, `passport`) VALUES (NULL, :id_group, :second_name, :first_name, :patronymic, :gradebook, :birth_date, :sex, :passport);');
        $statement->bindParam(":id_group",$data['id_group']);
        $statement->bindParam(":second_name",$data['second_name']);
        $statement->bindParam(":first_name",$data['first_name']);
        $statement->bindParam(":patronymic",$data['patronymic']);
        $statement->bindParam(":sex",$data['sex']);
        $statement->bindParam(":birth_date",$data['birth_date']);
        $statement->bindParam(":gradebook",$data['gradebook']);
        $statement->bindParam(":passport",$data['passport']);
        $statement->execute();
        echo true;
    }
    catch(Exception $e){
        echo "Error: ".$e->getMessage();
    }
}else
    echo false;
?>
