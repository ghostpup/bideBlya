$("#add_row").click(function(){
    $(".back_faculty_list").css("display","block");
    $(".interface-body__main-table").empty();
    $(".interface-body__main-table").append(
       `<select id = 'add_row_select'>
           <option value='1'>Факультет</option>
           <option value='2'>Направление</option>
           <option value='3'>Группа</option>
           <option value='4'>Студент</option>
           <option value='5'>Дисциплина</option>
           <option value='6'>Испытание</option>
           <option value='7'>Результат</option>
       </select>
       <div class='add_row_container'>
       </div>`);
    $(".add_row_container").append(
        `<form class='add_faculty'>
            <label>Введите название факультета</label>
            <input required type='text' name='new_faculty' minlength='1' maxlength='255'>
            <input type='submit' name='new_faculty_do' value='Создать'>
            <label class = 'response' ></label>
        </form>`
    );
});

$("body").on("change","#add_row_select", function(){
    switch($(this).val()){
        case "1":
            $(".add_row_container").empty();
            $(".add_row_container").append(
                `<form method="POST" class='add_faculty'>
                    <label>Введите название факультета</label>
                    <input required type='text' name='new_faculty' minlength='1' maxlength='255'>
                    <input type='submit' name='new_faculty_do' value='Создать'>
                    <label class ='response'></label>
                </form>`
            );
        break;
        case "2":
            $(".add_row_container").empty();
            $(".add_row_container").append(
                `<form method="POST" class='add_direction'>
                    <select id = 'new_faculty_id'></select>
                    <label>Введите код и название направления</label>
                    <input required type='text' name='new_direction' minlength='1' maxlength='255'>
                    <input type='submit' name='new_direction_do' value='Создать'>
                    <label class = 'response' ></label>
                </form>`
            );
            get_faculties_ajax();
        break;
        case "3":
            $(".add_row_container").empty();
            $(".add_row_container").append(
                `<form method="POST" class='add_group'>
                    <select id = 'new_faculty_id'></select>
                    <select id = 'new_direction_id'><option value='-'>Выберите направление</option></select>
                    <label>Введите название группы</label>
                    <input required type='text' name='new_group_name' minlength='1' maxlength='255'>
                    <label>Введите год создания</label>
                    <input required type='number' min='2000' max='2099' name='new_group_year'>
                    <label>Выберите форму обучения</label>
                    <select id = 'new_learning_model'>
                       <option value='1'>Очная</option>
                       <option value='2'>Очно-заочная</option>
                       <option value='3'>Заочная</option>
                       <option value='4'>Экстернат</option>
                    </select>
                    <input  type='submit' name='new_direction_do' value='Создать'>
                    <label class = 'response' ></label>
                </form>`
            );
            get_faculties_ajax();
        break;
        case "4":
            $(".add_row_container").empty();
            $(".add_row_container").append(
                `<form method="POST" class='add_student'>
                    <select id = 'new_faculty_id'></select>
                    <select id = 'new_direction_id'><option value='-'>Выберите направление</option></select>
                    <select id = 'new_group_id'><option value='-'>Выберите группу</option></select>
                    <label>Фамилия</label>
                    <input required type='text' name='new_student_second_name' minlength='1' maxlength='255'>
                    <label>Имя</label>
                    <input required type='text' name='new_student_first_name' minlength='1' maxlength='255'>
                    <label>Отчество</label>
                    <input required type='text' name='new_student_patronymic' minlength='1' maxlength='255'>
                    <label>Дата рождения</label>
                    <input required type='date' name='new_student_birth_date' min="1980-01-01" max="2019-12-31" pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}" required>
                    <label>Пол</label>
                    <select id = 'new_sex'>
                       <option value='0'>Ж</option>
                       <option value='1'>М</option>
                    </select>
                    <label>Зачетная книжка</label>
                    <input required type='text' name='new_student_gradebook' minlength='1' maxlength='255'>
                    <label>Паспорт</label>
                    <input required type='text' name='new_student_passport' minlength='1' maxlength='255'>
                    <input  type='submit' name='new_student_do'value='Создать'>
                    <label class = 'response' ></label>
                </form>`
            );
            get_faculties_ajax();
        break;
        case "5":
            $(".add_row_container").empty();
            $(".add_row_container").append(
            `<form method="POST" class='add_discipline'>
                <select id = 'new_faculty_id'></select>
                <select id = 'new_direction_id'><option value='-'>Выберите направление</option></select>
                <label>Введите название дисциплины</label>
                <input required type='text' name='new_discipline_name' minlength='1' maxlength='255'>
                <input type='submit' name='new_discipline_do' value='Создать'>
                <label class = 'response' ></label>
            </form>` );
            get_faculties_ajax();
        break;
        case "6":
            $(".add_row_container").empty();
            $(".add_row_container").append(
            `<form method="POST" class='add_trial'>
                <select id = 'new_faculty_id'></select>
                <select id = 'new_direction_id'><option value='-'>Выберите направление</option></select>
                <select id = 'new_discipline_id'><option value='-'>Выберите дисциплину</option></select>
                <select id = 'new_trial'>
                    <option value='-'>Выберите испытание</option>
                    <option value='1'>Зачет</option>
                    <option value='2'>Диф. зачет</option>
                    <option value='3'>Экзамен</option>
                    <option value='4'>Курсовая работа</option>
                </select>
                <input type='submit' name='new_trial_do' value='Создать'>
                <label class = 'response' ></label>
            </form>` );
            get_faculties_ajax();
        break;
        case "7":
            $(".add_row_container").empty();
            $(".add_row_container").append(
            `<form method="POST" class='add_result'>
                <select id = 'new_faculty_id'></select>
                <select id = 'new_direction_id'><option value='-'>Выберите направление</option></select>
                <select id = 'new_discipline_id'><option value='-'>Выберите дисциплину</option></select>
                <select id = 'new_group_id'><option value='-'>Выберите группу</option></select>
                <select id = 'new_trial_id'><option value='-'>Выберите испытание</option></select>
                <select id = 'new_student_id'><option value='-'>Выберите студента</option></select>
                <label>Введите дату прохождения испытания</label>
                <input required type='date' min="2000-01-01" max="2100-12-31" name='new_result_date' >
                <select id = 'new_result_rating_id'>
                    <option value='-'>Выберите оценку</option>
                </select>
                <label>Введите попытку</label>
                <input required type='number' name='new_result_attempt' value="1" min="1">
                <input type='submit' name='new_result_do' value='Создать'>
                <label class = 'response' ></label>
            </form>` );
            get_faculties_ajax();
        break;
    }
});

function get_faculties_ajax(){
    $.ajax({
                type: 'post',
                url: '/assets/php/get_faculties.php',
                dataType: 'json',
                data: ''
            }).done(html_get_faculties).fail(console.log());
}
function get_directions_ajax(){
    let id_faculty = $("#new_faculty_id").val();
    $.ajax({
                type: 'post',
                url: '/assets/php/get_directions.php',
                dataType: 'json',
                data: {id_faculty:id_faculty}
            }).done(html_get_directions).fail(console.log());
}
function get_groups_ajax(){
    let id_direction = $("#new_direction_id").val();
    $.ajax({
                type: 'post',
                url: '/assets/php/get_groups.php',
                dataType: 'json',
                data: {id_direction:id_direction}
            }).done(html_get_groups).fail(console.log());
}
function get_disciplines_ajax(){
    let id_direction = $("#new_direction_id").val();
    $.ajax({
                type: 'post',
                url: '/assets/php/get_disciplines.php',
                dataType: 'json',
                data: {id_direction:id_direction}
            }).done(html_get_disciplines).fail(console.log());
}
function get_students_ajax(){
    let id_group = $("#new_group_id").val();
    console.log(id_group);
    $.ajax({
                type: 'post',
                url: '/assets/php/get_students.php',
                dataType: 'json',
                data: {id_group:id_group}
            }).done(html_get_students).fail(console.log());
}
function get_trials_ajax(){
    let id_discipline = $("#new_discipline_id").val();
    $.ajax({
                type: 'post',
                url: '/assets/php/get_trials.php',
                dataType: 'json',
                data: {id_discipline:id_discipline}
            }).done(html_get_trials).fail(console.log());
}
function get_rating_html(){
    let id_type = $("#new_trial_id option:selected").text();
    string ="";
    switch(id_type){
        case "Зачет":
             string+=`<option value='0'>Н/З</option>
                      <option value='1'>Зачет</option>`;
        break;
        case "Диф. зачет":
        case "Экзамен":
        case "Курсовая работа":
            string+=`<option value='2'>2</option>
                     <option value='3'>3</option>
                     <option value='4'>4</option>
                     <option value='5'>5</option>`;
        break;
    } 
    $("#new_result_rating_id").empty();
    $("#new_result_rating_id").append(string);
}
function html_get_faculties(data){
    let string = "<option value='-'>Выберите факультет</option>";
    data.forEach(function(item){
        string +="<option value="+item.id_faculty+">"+item.faculty_name+"</option>";
    });
    $("#new_faculty_id").empty();
    $("#new_faculty_id").append(string);
}
function html_get_directions(data){
    console.log(data);
    let string = "<option value='-'>Выберите направление</option>";
    data.forEach(function(item){
        string +="<option value="+item.id_direction+">"+item.direction_name+"</option>";
    });
    $("#new_direction_id").empty();
    $("#new_direction_id").append(string);
}
function html_get_groups(data){
    let string = "<option value='-'>Выберите группу</option>";
    data.forEach(function(item){
        string +="<option value="+item.id_group+">"+item.group_name+"</option>";
    });
    $("#new_group_id").empty();
    $("#new_group_id").append(string);
}
function html_get_disciplines(data){
    console.log(data);
    let string = "<option value='-'>Выберите дисциплину</option>";
    data.forEach(function(item){
        string +="<option value="+item.id_discipline+">"+item.discipline_name+"</option>";
    });
    $("#new_discipline_id").empty();
    $("#new_discipline_id").append(string);
}
function html_get_students(data){
    let string = "<option value='-'>Выберите студента</option>";
    console.log(data);
    data.forEach(function(item){
        string +="<option value="+item.id_student+">"+item.second_name+" "+item.first_name+" "+item.patronymic+" "+item.gradebook_number+"</option>";
    });
    $("#new_student_id").empty();
    $("#new_student_id").append(string);
}
function html_get_trials(data){
    let string = "<option value='-'>Выберите испытание</option>";
    data.forEach(function(item){
        string +="<option value="+item.id_trial+">";
        switch(item.trial_type){
            case 1: string+="Зачет"; break;
            case 2: string+="Диф. зачет"; break;
            case 3: string+="Экзамен"; break;
            case 4: string+="Курсовая работа"; break;
        } 
        string +="</option>";
    });
    $("#new_trial_id").empty();
    $("#new_trial_id").append(string);
}

$("body").on("change","#new_faculty_id", function(){
    get_directions_ajax();
});
$("body").on("change","#new_direction_id", function(){
    get_groups_ajax();
    get_disciplines_ajax();
});
$("body").on("change","#new_group_id", function(){
    console.log(1);
    get_students_ajax();
});
$("body").on("change","#new_discipline_id", function(){
    get_trials_ajax();
});
$("body").on("change","#new_trial_id", function(){
    get_rating_html();
});


