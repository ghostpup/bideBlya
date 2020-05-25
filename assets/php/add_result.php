<? require "../../include/connection.php";
if (isset($_POST['student_id']) && isset($_POST['trial_id']) && isset($_POST['result_rating']) && isset($_POST['result_date']) && isset($_POST['result_attempt']))


{   try{
        $data = $_POST;
        $connection->setAttribute(PDO::ATTR_EMULATE_PREPARES,false);
        $statement = $connection->prepare('INSERT INTO `result` (`id_result`, `id_student_vk`, `id_trial_vk`, `rating`, `writing_date`, `attempt_number`) VALUES (NULL, :student_id, :trial_id, :result_rating, :result_date, :result_attempt);');
        $statement->bindParam(":student_id",$data['student_id']);
        $statement->bindParam(":trial_id",$data['trial_id']);
        $statement->bindParam(":result_rating",$data['result_rating']);
        $statement->bindParam(":result_date",$data['result_date']);
        $statement->bindParam(":result_attempt",$data['result_attempt']);
        $statement->execute();
        echo true;
    }
    catch(Exception $e){
        echo "Error: ".$e->getMessage();
    }
}else
    echo false;
?>
