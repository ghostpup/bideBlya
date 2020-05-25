<? require "../../include/connection.php";
if (isset($_POST['id_direction']))
{   
    $data=$_POST;
    $statement = $connection->prepare('SELECT * FROM st_group WHERE id_direction_vk = :id_direction;');
    $statement->bindParam(":id_direction",$data['id_direction']);
    $statement->execute();
    while($row = $statement->fetch()){
        $groupDataPhp[] = $row;
    }
    echo json_encode($groupDataPhp);

}else{
    $statement = $connection->query('SELECT * FROM st_group LEFT JOIN direction on direction.id_direction = st_group.id_direction_vk');
    while($row = $statement->fetch()){
        $groupDataPhp[] = $row;
    }
    echo json_encode($groupDataPhp);
    }
?>
