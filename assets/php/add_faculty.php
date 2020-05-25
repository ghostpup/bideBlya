<? require "../../include/connection.php";
if (isset($_POST['faculty_name']))
{   try{
        $data = $_POST;
        $connection->setAttribute(PDO::ATTR_EMULATE_PREPARES,false);
        $statement = $connection->prepare('INSERT INTO `faculty` (`id_faculty`, `faculty_name`) VALUES (NULL, :faculty_name);');
        
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
