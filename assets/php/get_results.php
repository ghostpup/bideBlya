<? require "../../include/connection.php";
if (isset($_POST['id_trial']) && isset($_POST['id_student']))
{   
    $data=$_POST;
    $statement = $connection->prepare('SELECT * FROM result WHERE id_trial_vk = :id_trial AND id_student_vk = :id_student');
    $statement->bindParam(":id_trial",$data['id_trial']);
    $statement->bindParam(":id_student",$data['id_student']);
    $statement->execute();
    while($row = $statement->fetch()){
        $trialsDataPhp[] = $row;
    }
    echo json_encode($trialsDataPhp);
    
}else{
$statement = $connection->query('SELECT * FROM result LEFT JOIN trial on trial.id_trial = result.id_trial_vk LEFT JOIN discipline on discipline.id_discipline = trial.id_discipline_vk LEFT JOIN direction on direction.id_direction = discipline.id_direction_vk LEFT JOIN student on student.id_student = result.id_student_vk LEFT JOIN st_group on st_group.id_group = student.id_group_vk;');
while($row = $statement->fetch()){
    $resultsDataPhp[] = $row;
}
echo json_encode($resultsDataPhp);
}
?>