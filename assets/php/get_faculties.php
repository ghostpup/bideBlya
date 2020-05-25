<? require "../../include/connection.php";
if (isset($_POST['id_faculty'])){
    $data = $_POST;
    $statement = $connection->prepare('SELECT * FROM faculty WHERE id_faculty = :id_faculty;');
    $statement->bindParam(":id_faculty",$data['id_faculty']);
    $statement->execute();
    while($row = $statement->fetch()){
        $facultyDataPhp[] = $row;
    }
    echo json_encode($facultyDataPhp);
}else{  
    $statement = $connection->query('SELECT * FROM faculty');
    while($row = $statement->fetch()){
        $facultyDataPhp[] = $row;
    }
    echo json_encode($facultyDataPhp);
}
?>
