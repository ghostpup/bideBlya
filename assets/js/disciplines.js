$("#button_disciplines").click(function(){
    $.ajax({
        type: 'post',
        url: '/assets/php/get_disciplines.php',
        dataType: 'json',
        data: ''
    }).done(function(data){
        console.log(data);
        let string="<table>"+
                        "<thead>"+
                            "<tr>"+
                                "<th>Идентификатор</th>"+
                                "<th>Направление</th>"+
                                "<th>Дисциплина</th>"+
                                "<th>Действие</th>"+
                            "</tr>"+
                        "</thead>"+
                        "<tbody>";
        data.forEach(function(item){
            string +=
                "<tr>"+
                    "<td>"+
                        item.id_discipline+
                    "</td>"+
                    "<td>"+
                        item.direction_name+
                    "</td>"+
                    "<td>"+
                        item.discipline_name+
                    "</td>"+
                    "<td>"+
                        "<form id='item-discipline-form' method ='POST'>"+
                            "<input type='hidden' name = 'id_discipline_form' value=\'"+item.id_discipline+"\'>"+
                            "<button type='submit' class='detail_discipline'>Просмотреть</button>"+
                            "<button type='button' class='delete_discipline'>Удалить</button>"+
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