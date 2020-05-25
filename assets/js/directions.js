
function get_directions_forms(id_faculty,name_faculty){
    $(".interface-body__change-form").empty();
    $(".interface-body__create-form").empty();
    $(".interface-body__page-header").empty();
    $(".interface-body__page-header-child").empty();
    let stringChange = `<form method="POST" class='change_faculty'>
                            <h3>Изменение текущего факультета</h3>
                            <label>Название факультета</label>
                            <input type='hidden' name = 'change_faculty_id' value='`+id_faculty+`'>
                            <input required type='text' name='change_faculty_name' minlength='1' maxlength='255' value='`+name_faculty+`'>
                            <input type='submit' name='change_faculty_do' value='Сохранить'>
                            <label class = 'response_change' ></label>
                        </form>`
    let stringCreate =`<form method="POST" class='add_direction'>
                            <h3>Добавление нового направления</h3>
                            <label>Название направления</label>
                            <input type='hidden' name = 'new_faculty_id' value='`+id_faculty+`'>
                            <input required type='text' name='new_direction_name' minlength='1' maxlength='255'>
                            <input type='submit' name='new_direction_do' value='Создать'>
                            <label class ='response'></label>
                        </form>`;
    $(".interface-body__change-form").append(stringChange);
    $(".interface-body__create-form").append(stringCreate);
    $(".interface-body__page-header-child").append("<h1>Направления</h1>");
    $(".interface-body__page-header").append("<h2>"+name_faculty+"</h2>"); 
}

function get_directions_list(id_faculty){
    let string =``;
    string +=`  <table>
                    <thead>
                    <tr>
                       <th>Идентификатор</th>
                       <th>Направление</th>
                       <th>Действие</th>
                    </tr>
                    </thead>
                    <tbody>`;
    $.ajax({
        type: 'post',
        url: '/assets/php/get_directions.php',
        dataType: 'json',
        data: {id_faculty:id_faculty}
    }).done(function(dataDirection){
        dataDirection.forEach(function(item){
            string +=
                `<tr>
                    <td>`+
                        item.id_direction+
                    `</td>
                    <td>`+
                        item.direction_name+
                    `</td>
                    <td>
                        <form id='item-direction-form' method ='POST'>
                            <input type='hidden' name = 'id_faculty_form' value='`+id_faculty+`'>
                            <input type='hidden' name = 'name_faculty_form' value='`+id_faculty+`'>
                            <input type='hidden' name = 'id_direction_form' value='`+item.id_direction+`'>
                            <input type='hidden' name = 'name_direction_form' value='`+item.direction_name+`'>
                            <button type='submit' class='detail_direction'>Просмотреть</button>
                            <button type='button' class='delete_direction'>Удалить</button>
                        </form>
                    </td>
                </tr>`;
        });
        string+=`       </tbody>
                    </table>`;
                             
        $(".interface-body__main-table").empty();
        $(".interface-body__main-table").append(string);            
    });
}

$("body").on("submit","#item-faculty-form", function(e){
        e.preventDefault();
        $(".back_faculty_list").css("display","block");
        let id_faculty =  Number($(this).find('input[name="id_faculty_form"]').val());
        let name_faculty =  $(this).find('input[name="name_faculty_form"]').val();
        get_directions_forms(id_faculty,name_faculty);
        get_directions_list(id_faculty);
        });

$("body").on("click",".back_faculty_list", function(e){
    get_faculties_forms()
    get_faculty_list();
    $(".back_faculty_list").css("display","none");

});