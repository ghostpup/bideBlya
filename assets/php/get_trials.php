<? require "../../include/connection.php";
if (isset($_POST['id_discipline']))
{   
    $data=$_POST;
    $statement = $connection->prepare('SELECT * FROM trial WHERE id_discipline_vk = :id_discipline;');
    $statement->bindParam(":id_discipline",$data['id_discipline']);
    $statement->execute();
    while($row = $statement->fetch()){
        $trialsDataPhp[] = $row;
    }
    echo json_encode($trialsDataPhp);
    

}else{
    $statement = $connection->query('SELECT * FROM trial LEFT JOIN discipline on discipline.id_discipline = trial.id_discipline_vk LEFT JOIN direction on direction.id_direction = discipline.id_direction_vk;');
    while($row = $statement->fetch()){
        $trialsDataPhp[] = $row;
    }
    echo json_encode($trialsDataPhp);
}
?>