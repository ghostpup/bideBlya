$("#button_results").click(function(){
    $.ajax({
        type: 'post',
        url: '/assets/php/get_results.php',
        dataType: 'json',
        data: ''
    }).done(function(data){
        let string="<table>"+
                        "<thead>"+
                        "<tr>"+
                            "<th>Идентификатор</th>"+
                            "<th>Фамилия</th>"+
                            "<th>Имя</th>"+
                            "<th>Отчество</th>"+
                            "<th>Направление</th>"+
                            "<th>Группа</th>"+
                            "<th>Дисциплина</th>"+
                            "<th>Тип испытания</th>"+
                            "<th>Оценка</th>"+
                            "<th>Кол-во попыток</th>"+
                            "<th>Дата написания</th>"+
                            "<th>Действие</th>"+
                        "</tr>"+
                        "</thead>"+
                        "<tbody>";
        data.forEach(function(item){    
            string +=
                "<tr>"+
                    "<td>"+
                        item.id_result+
                    "</td>"+
                    "<td>"+
                        item.second_name+
                    "</td>"+
                    "<td>"+
                        item.first_name+
                    "</td>"+
                    "<td>"+
                        item.patronymic+
                    "</td>"+
                    "<td>"+
                        item.direction_name+
                    "</td>"+
                    "<td>"+
                        item.group_name+
                    "</td>"+
                    "<td>"+
                        item.discipline_name+
                    "</td>"+
                    "<td>"+
                        item.trial_type+
                    "</td>"+
                    "<td>"+
                        item.rating+
                    "</td>"+
                    "<td>"+
                        item.attempt_number+
                    "</td>"+
                    "<td>"+
                        item.writing_date+
                    "</td>"+
                    "<td>"+
                        "<form id='item-result-form' method ='POST'>"+
                            "<input type='hidden' name = 'id_result_form' value=\'"+item.id_result+"\'>"+
                            "<button type='submit' class='detail_result'>Просмотреть</button>"+
                            "<button type='button' class='delete_result'>Удалить</button>"+
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