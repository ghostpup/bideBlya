function get_groups_forms(id_direction,name_direction){

}

function  get_groups_list(id_direction){
    
}

$("body").on("submit","#item-direction-form", function(e){
    e.preventDefault();
    $(".back_faculty_list").css("display","block");
    let id_faculty =  Number($(this).find('input[name="id_direction_form"]').val());
    let name_faculty =  $(this).find('input[name="name_direction_form"]').val();
    let id_direction =  Number($(this).find('input[name="id_direction_form"]').val());
    let name_direction =  $(this).find('input[name="name_direction_form"]').val();
    get_groups_forms(id_direction,name_direction);
    get_groups_list(id_direction);
    });





$("#button_groups").click(function(){
    $.ajax({
        type: 'post',
        url: '/assets/php/get_groups.php',
        dataType: 'json',
        data: {id_direction}
    }).done(function(data){
        let string="<table>"+
                        "<thead>"+
                        "<tr>"+
                            "<th>Идентификатор</th>"+
                            "<th>Название группы</th>"+
                            "<th>Модель обучения</th>"+
                            "<th>Направление</th>"+
                            "<th>Действие</th>"+
                        "</tr>"+
                        "</thead>"+
                        "<tbody>";
        data.forEach(function(item){
           
            string +=
                "<tr>"+
                    "<td>"+
                        item.id_group+
                    "</td>"+
                    "<td>"+
                        item.group_name+
                    "</td>"+
                    "<td>"+
                        item.learning_model+
                    "</td>"+
                    "<td>"+
                        item.direction_name+
                    "</td>"+
                    "<td>"+
                        "<form id='item-group-form' method ='POST'>"+
                            "<input type='hidden' name = 'id_group_form' value=\'"+item.id_direction+"\'>"+
                            "<button type='submit' class='detail_group'>Просмотреть</button>"+
                            "<button type='button' class='delete_group'>Удалить</button>"+
                        "</form>"+
                    "</td>"+
                "</tr>";
        });
        string+="       </tbody>"+
                    "</table>";

        $(".interface-body__main-table").empty();
        $(".interface-body__main-table").append(string);
    }).fail(function(data){
        console.log(data)});
});