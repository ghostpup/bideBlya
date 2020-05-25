<? require "../../include/connection.php";
if (isset($_POST['id_group']))
{   
    $data=$_POST;
    $statement = $connection->prepare('SELECT * FROM student WHERE id_group_vk = :id_group;');
    $statement->bindParam(":id_group",$data['id_group']);
    $statement->execute();
    while($row = $statement->fetch()){
        $studentDataPhp[] = $row;
    }
    echo json_encode($studentDataPhp);
    

}else{
    $statement = $connection->query('SELECT * FROM student LEFT JOIN st_group on st_group.id_group = student.id_group_vk'); 
    while($row = $statement->fetch()){
        $studentDataPhp[] = $row;
    }
    echo json_encode($studentDataPhp);
}
?>
