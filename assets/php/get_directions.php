<? require "../../include/connection.php";

if (isset($_POST['id_faculty']))
{   
    $data=$_POST;
    $statement = $connection->prepare('SELECT * FROM direction WHERE id_faculty_vk = :id_faculty;');
    $statement->bindParam(":id_faculty",$data['id_faculty']);
    $statement->execute();
    while($row = $statement->fetch()){
        $directionDataPhp[] = $row;
    }
    echo json_encode($directionDataPhp);

}else{
    $statement = $connection->query('SELECT * FROM direction LEFT JOIN faculty on faculty.id_faculty = direction.id_faculty_vk');
    while($row = $statement->fetch()){
        $directionDataPhp[] = $row;
    }
    echo json_encode($directionDataPhp);
}
?>
