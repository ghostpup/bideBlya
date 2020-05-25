get_faculty_list();
get_faculties_forms()
// $("#button_faculties").click(function(){
//     get_faculties_forms()
//     get_faculty_list();
// });

function get_faculties_forms(){
    $(".interface-body__change-form").empty();
    $(".interface-body__create-form").empty();
    $(".interface-body__page-header").empty();
    $(".interface-body__page-header-child").empty();
    let stringCreate =`<form method="POST" class='add_faculty'>
        <label>Введите название факультета</label>
        <input required type='text' name='new_faculty' minlength='1' maxlength='255'>
        <input type='submit' name='new_faculty_do' value='Создать'>
        <label class ='response'></label>
    </form>`;
    $(".interface-body__create-form").append(stringCreate);
    $(".interface-body__page-header").append("<h1>ФАКУЛЬТЕТЫ</h1>"); 
}
function get_faculty_list(){
    $.ajax({
        type: 'post',
        url: '/assets/php/get_faculties.php',
        dataType: 'json',
        data: ''
    }).done(function(data){
        let stringCreate =`<form method="POST" class='add_faculty'>
                        <label>Введите название факультета</label>
                        <input required type='text' name='new_faculty' minlength='1' maxlength='255'>
                        <input type='submit' name='new_faculty_do' value='Создать'>
                        <label class ='response'></label>
                    </form>`;
        let string=`<table>
                        <thead>
                        <tr>
                           <th>Идентификатор</th>
                           <th>Факультет</th>
                           <th>Действие</th>
                        </tr>
                        </thead>
                        <tbody>`;
        data.forEach(function(item){
            string +=
                `<tr>
                    <td>
                        `+item.id_faculty+`
                    </td>
                    <td>
                        `+item.faculty_name+`
                    </td>
                    <td>
                        <form id='item-faculty-form' method ='POST'>
                            <input type='hidden' name = 'name_faculty_form' value='`+item.faculty_name+`'>
                            <input type='hidden' name = 'id_faculty_form' value='`+item.id_faculty+`'>
                            <button type='submit' class='detail_faculty'>Просмотреть</button>
                            <button type='button' class='delete_faculty'>Удалить</button>
                        </form>
                    </td>
                </tr>`;
        });
        string+=`       </tbody>
                    </table>`;

        $(".interface-body__main-table").empty();
        $(".interface-body__main-table").append(string);
    }).fail(function(data){console.log(data)});
}
