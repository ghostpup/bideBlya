$("#button_students").click(function(){
    $.ajax({
        type: 'post',
        url: '/assets/php/get_students.php',
        dataType: 'json',
        data: ''
    }).done(function(data){
        let string="<table>"+
                        "<thead>"+
                        "<tr>"+
                            "<th>Идентификатор</th>"+
                            "<th>Номер З/К</th>"+
                            "<th>Паспорт</th>"+
                            "<th>Фамилия</th>"+
                            "<th>Имя</th>"+
                            "<th>Отчество</th>"+
                            "<th>Группа</th>"+
                            "<th>Пол</th>"+
                            "<th>Дата рождения</th>"+
                            "<th>Действие</th>"+
                        "</tr>"+
                        "</thead>"+
                        "<tbody>";
        data.forEach(function(item){
           
            string +=
                "<tr>"+
                    "<td>"+
                        item.id_student+
                    "</td>"+
                    "<td>"+
                        item.gradebook_number+
                    "</td>"+
                    "<td>"+
                        item.passport+
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
                        item.group_name+
                    "</td>"+
                    "<td>"+
                        item.sex+
                    "</td>"+
                    "<td>"+
                        item.birth_date+
                    "</td>"+
                    "<td>"+
                        "<form id='item-student-form' method ='POST'>"+
                            "<input type='hidden' name = 'id_student_form' value=\'"+item.id_student+"\'>"+
                            "<button type='submit' class='detail_student'>Просмотреть</button>"+
                            "<button type='button' class='delete_student'>Удалить</button>"+
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