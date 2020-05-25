<? require "../../include/connection.php";
if (isset($_POST['id_faculty']) && isset($_POST['faculty_name']))
{   try{
        $data = $_POST;
        $connection->setAttribute(PDO::ATTR_EMULATE_PREPARES,false);
        $statement = $connection->prepare('UPDATE `faculty` SET `faculty_name` = :faculty_name WHERE `faculty`.`id_faculty` =:id_faculty;');
        $statement->bindParam(":id_faculty",$data['id_faculty']);
        $statement->bindParam(":faculty_name",$data['faculty_name']);
        $statement->execute();
        echo true;
    }
    catch(Exception $e){
        echo "Error: ".$e->getMessage();
    }
}else
    echo false;
?>
