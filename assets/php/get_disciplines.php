<? require "../../include/connection.php";
if (isset($_POST['id_direction']))
{   
    $data=$_POST;
    $statement = $connection->prepare('SELECT * FROM discipline WHERE id_direction_vk = :id_direction;');
    $statement->bindParam(":id_direction",$data['id_direction']);
    $statement->execute();
    while($row = $statement->fetch()){
        $disciplineDataPhp[] = $row;
    }
    echo json_encode($disciplineDataPhp);

}else{
    $statement = $connection->query('SELECT * FROM discipline LEFT JOIN direction on direction.id_direction = discipline.id_direction_vk;');
    while($row = $statement->fetch()){
        $disciplineDataPhp[] = $row;
    }
    echo json_encode($disciplineDataPhp);
}
?>