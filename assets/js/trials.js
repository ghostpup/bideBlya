$("#button_trials").click(function(){
    $.ajax({
        type: 'post',
        url: '/assets/php/get_trials.php',
        dataType: 'json',
        data: ''
    }).done(function(data){
        let string="<table>"+
                        "<thead>"+
                        "<tr>"+
                            "<th>Идентификатор</th>"+
                            "<th>Направление</th>"+
                            "<th>Дисциплина</th>"+
                            "<th>Тип испытания</th>"+
                            "<th>Действие</th>"+
                        "</tr>"+
                        "</thead>"+
                        "<tbody>";
        data.forEach(function(item){
            string +=
                "<tr>"+
                    "<td>"+
                        item.id_trial+
                    "</td>"+
                    "<td>"+
                        item.direction_name+
                    "</td>"+
                    "<td>"+
                        item.discipline_name+
                    "</td>"+
                    "<td>"+
                        item.trial_type+
                    "</td>"+
                    "<td>"+
                        "<form id='item-trial-form' method ='POST'>"+
                            "<input type='hidden' name = 'id_trial_form' value=\'"+item.id_trial+"\'>"+
                            "<button type='submit' class='detail_trial'>Просмотреть</button>"+
                            "<button type='button' class='delete_trial'>Удалить</button>"+
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