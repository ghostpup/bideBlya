// $("body").on("submit",".add_faculty", function(e){
//     e.preventDefault();
//     let new_faculty = $('.add_faculty').find('input[name="new_faculty"]').val();
//     if(new_faculty.length>0){
//         $.ajax({
//             type: 'post',
//             url: '/assets/php/get_faculties.php',
//             dataType: 'json',
//             data: ''
//         }).done(function(data){
//             data = data.map(function(item){
//                 return item.faculty_name;
//             });
//             if(!data.includes(new_faculty)){
//                 $.ajax({
//                     type: 'post',
//                     url: '/assets/php/add_faculty.php',
//                     dataType: 'json',
//                     data: {faculty_name:new_faculty}
//                 }).done(function(response){
//                     if(response>0){
//                         $(".response").removeClass("error");
//                         $(".response").addClass("confirm");
//                         $(".response").text("Новый факультет успешно добавлен. ");
//                     }else{
//                         $(".response").removeClass("confirm");
//                         $(".response").addClass("error");
//                         $(".response").text("Факультет добавлен не был. ");
//                     }
//                 }).fail(function(response){
//                     $(".response").removeClass("confirm");
//                     $(".response").addClass("error");
//                     $(".response").text("Факультет добавлен не был. Подробности в консоли разработчика. ");
//                     console.log(response.responseText)
//                 });
//             }else{
//                 $(".response").removeClass("confirm");
//                 $(".response").addClass("error");
//                 $(".response").text("Такой факультет уже существует. ");
//             }

//         }).fail(console.log());
//     }else{
//         $(".response").removeClass("confirm");
//         $(".response").addClass("error");
//         $(".response").text("Название факультета не может быть пустым. ");
//     }
    
// });
// $("body").on("submit",".add_direction", function(e){
//     e.preventDefault();
//     let new_direction = $('.add_direction').find('input[name="new_direction"]').val();
//     let faculty = $('.add_direction #new_faculty_id').val();
//     if(new_direction.length>1 && faculty != "-"){
//         $.ajax({
//             type: 'post',
//             url: '/assets/php/get_directions.php',
//             dataType: 'json',
//             data: ''
//         }).done(function(data){
//             data = data.map(function(item){
//                 return item.direction_name;
//             });
//             if(!data.includes(new_direction)){
//                 $.ajax({
//                     type: 'post',
//                     url: '/assets/php/add_direction.php',
//                     dataType: 'json',
//                     data: {direction_name:new_direction,faculty_id:faculty}
//                 }).done(function(response){
//                     if(response>0){
//                         $(".response").removeClass("error");
//                         $(".response").addClass("confirm");
//                         $(".response").text("Новое направление успешно добавлено. ");
//                     }else{
//                         $(".response").removeClass("confirm");
//                         $(".response").addClass("error");
//                         $(".response").text("Направление добавлено не было. ");
//                     }
//                 }).fail(function(response){
//                     $(".response").removeClass("confirm");
//                     $(".response").addClass("error");
//                     $(".response").text("Направление добавлено не было. Подробности в консоли разработчика. ");
//                     console.log(response.responseText)
//                 });
//             }else{
//                 $(".response").removeClass("confirm");
//                 $(".response").addClass("error");
//                 $(".response").text("Такое направление уже существует. ");
//             }
//         }).fail(console.log());
//     }else{
//         let errorstring="";
//         if(new_direction.length<=0)
//             errorstring+="Название направления не может быть пустым. ";
//         if(faculty == "-")
//             errorstring+="Вы не выбрали факультет. "; 
//         $(".response").removeClass("confirm");
//         $(".response").addClass("error");
//         $(".response").text(errorstring);   
//     }
// });
$("body").on("submit",".add_group", function(e){
    e.preventDefault();
    let faculty = $('.add_group #new_faculty_id').val();
    let direction = $('.add_group #new_direction_id').val();
    let new_group_name = $('.add_group').find('input[name="new_group_name"]').val();
    let new_group_year = $('.add_group').find('input[name="new_group_year"]').val();
    let new_group_model = $('.add_group #new_learning_model').val();
    
    if(faculty != "-" && direction != "-" && new_group_name.length>0 && new_group_year.length>0 ){
        $.ajax({
            type: 'post',
            url: '/assets/php/get_groups.php',
            dataType: 'json',
            data: {id_direction:direction}
        }).done(function(data){
            data = data.map(function(item){
                return item.group_name;
            });
            if(!data.includes(new_group_name)){
                $.ajax({
                    type: 'post',
                    url: '/assets/php/add_group.php',
                    dataType: 'json',
                    data: {direction_id:direction,
                           group_name:new_group_name,
                           group_year:new_group_year,
                           group_model:new_group_model}
                }).done(function(response){
                    if(response>0){
                        $(".response").removeClass("error");
                        $(".response").addClass("confirm");
                        $(".response").text("Новая группа успешно добавлено. ");
                    }else{
                        $(".response").removeClass("confirm");
                        $(".response").addClass("error");
                        $(".response").text("Группа добавлена не была. ");
                    }
                }).fail(function(response){
                    $(".response").removeClass("confirm");
                    $(".response").addClass("error");
                    $(".response").text("Группа добавлена не была. Подробности в консоли разработчика. ");
                    console.log(response.responseText)
                });
            }else{
                $(".response").removeClass("confirm");
                $(".response").addClass("error");
                $(".response").text("Такая группа на данном направлении уже существует.");
            }
        }).fail(console.log());
    }else{
        let errorstring="";
        if(new_group_name.length<=0)
            errorstring+="Название группы не может быть пустым. ";
        if(new_group_year.length<=0)
            errorstring+="Введите год создания группы. ";    
        if(faculty == "-")
            errorstring+="Вы не выбрали факультет. ";
        if(direction == "-")
            errorstring+="Вы не выбрали направление. ";      
        $(".response").removeClass("confirm");
        $(".response").addClass("error");
        $(".response").text(errorstring);   
    }
});
$("body").on("submit",".add_student", function(e){
    e.preventDefault();
    let faculty = $('.add_student #new_faculty_id').val();
    let direction = $('.add_student #new_direction_id').val();
    let group = $('.add_student #new_group_id').val();
    let new_student_second_name = $('.add_student').find('input[name="new_student_second_name"]').val();
    let new_student_first_name = $('.add_student').find('input[name="new_student_first_name"]').val();
    let new_student_patronymic = $('.add_student').find('input[name="new_student_patronymic"]').val();
    let new_student_birth_date = $('.add_student').find('input[name="new_student_birth_date"]').val();
    let new_student_sex = $('.add_student #new_sex').val();
    let new_student_gradebook = $('.add_student').find('input[name="new_student_gradebook"]').val();
    let new_student_passport = $('.add_student').find('input[name="new_student_passport"]').val();
    
    if( faculty != "-" && 
        direction != "-" &&
        group != "-" &&
        new_student_second_name.length >0 &&
        new_student_first_name.length >0 &&
        new_student_patronymic.length >0 &&
        new_student_sex != "-" &&
        new_student_gradebook.length >0 &&
        new_student_passport.length >0){

         $.ajax({
            type: 'post',
            url: '/assets/php/get_students.php',
            dataType: 'json',
            data:""
        }).done(function(data){
            let passport = data.map(function(item){
                return item.passport;
            });
            let gradebook = data.map(function(item){
                return item.gradebook_number;
            });
            if(!data.includes(new_student_passport) && !data.includes(new_student_gradebook)){
                $.ajax({
                    type: 'post',
                    url: '/assets/php/add_student.php',
                    dataType: 'json',
                    data: {id_group:group,
                        second_name:new_student_second_name,
                        first_name:new_student_first_name,
                        patronymic:new_student_patronymic,
                        sex:new_student_sex,
                        birth_date:new_student_birth_date,
                        gradebook:new_student_gradebook,
                        passport:new_student_passport}
                }).done(function(response){
                    if(response>0){
                        $(".response").removeClass("error");
                        $(".response").addClass("confirm");
                        $(".response").text("Новый студент успешно добавлен. ");
                    }else{
                        $(".response").removeClass("confirm");
                        $(".response").addClass("error");
                        $(".response").text("Студент добавлен не был. ");
                    }
                }).fail(function(response){
                    $(".response").removeClass("confirm");
                    $(".response").addClass("error");
                    $(".response").text("Студент добавлен не был. Подробности в консоли разработчика. ");
                    console.log(response.responseText)
                });
            }else{
                $(".response").removeClass("confirm");
                $(".response").addClass("error");
                let errorstring = "";
                if(!data.includes(new_student_passport))
                    errorstring+= "Такой номер паспорта уже зарегистрирован в системе. ";
                if(!data.includes(new_student_gradebook))
                    errorstring+= "Такой номер зачетной книжки уже зарегистрирован в системе. ";
                $(".response").text("string");
            }
        }).fail(console.log());
    }else{
        let errorstring="";  
        if(faculty == "-")
            errorstring+="Вы не выбрали факультет. ";
        if(direction == "-")
            errorstring+="Вы не выбрали направление. "; 
        if(group == "-")
            errorstring+="Вы не выбрали группу. ";     
        $(".response").removeClass("confirm");
        $(".response").addClass("error");
        $(".response").text(errorstring);   
    }


});
$("body").on("submit",".add_discipline", function(e){
    e.preventDefault();
    let faculty = $('.add_discipline #new_faculty_id').val();
    let direction = $('.add_discipline #new_direction_id').val();
    let new_discipline = $('.add_discipline').find('input[name="new_discipline_name"]').val();
    if(faculty != "-" && direction != "-" && new_discipline.length>0){
        $.ajax({
            type: 'post',
            url: '/assets/php/get_disciplines.php',
            dataType: 'json',
            data: {id_direction:direction}
        }).done(function(data){
            data = data.map(function(item){
                return item.discipline_name;
            });
            if(!data.includes(new_discipline)){
                $.ajax({
                    type: 'post',
                    url: '/assets/php/add_discipline.php',
                    dataType: 'json',
                    data: {direction_id:direction,
                           discipline_name:new_discipline}
                }).done(function(response){
                    if(response>0){
                        $(".response").removeClass("error");
                        $(".response").addClass("confirm");
                        $(".response").text("Новая дисциплина успешно добавлено. ");
                    }else{
                        $(".response").removeClass("confirm");
                        $(".response").addClass("error");
                        $(".response").text("Дисциплина добавлена не была. ");
                    }
                }).fail(function(response){
                    $(".response").removeClass("confirm");
                    $(".response").addClass("error");
                    $(".response").text("Дисциплина добавлена не была. Подробности в консоли разработчика. ");
                    console.log(response.responseText)
                });
            }else{
                $(".response").removeClass("confirm");
                $(".response").addClass("error");
                $(".response").text("Такая дисциплина на данном направлении уже существует.");
            }
        }).fail(console.log());
    }else{
        let errorstring="";
        if(faculty == "-")
            errorstring+="Вы не выбрали факультет. ";
        if(direction == "-")
            errorstring+="Вы не выбрали направление. ";      
        $(".response").removeClass("confirm");
        $(".response").addClass("error");
        $(".response").text(errorstring);   
    }

});
$("body").on("submit",".add_trial", function(e){
    e.preventDefault();
    let faculty = $('.add_trial #new_faculty_id').val();
    let direction = $('.add_trial #new_direction_id').val();
    let discipline = $('.add_trial #new_discipline_id').val();
    let new_trial = Number($('.add_trial #new_trial').val());
    if(faculty != "-" && direction != "-" && discipline != "-" &&  new_trial != "-"){
        $.ajax({
            type: 'post',
            url: '/assets/php/get_trials.php',
            dataType: 'json',
            data: {id_discipline:discipline}
        }).done(function(data){
            data = data.map(function(item){
                return item.trial_type;
            });
            if(!data.includes(new_trial)){
                $.ajax({
                    type: 'post',
                    url: '/assets/php/add_trial.php',
                    dataType: 'json',
                    data: {discipline_id:discipline,
                            trial_id:new_trial}
                }).done(function(response){
                    if(response>0){
                        $(".response").removeClass("error");
                        $(".response").addClass("confirm");
                        $(".response").text("Новое испытание успешно добавлено. ");
                    }else{
                        $(".response").removeClass("confirm");
                        $(".response").addClass("error");
                        $(".response").text("Испытание добавлена не было. ");
                    }
                }).fail(function(response){
                    $(".response").removeClass("confirm");
                    $(".response").addClass("error");
                    $(".response").text("Испытание добавлена не было. Подробности в консоли разработчика. ");
                    console.log(response.responseText)
                });
            }else{
                $(".response").removeClass("confirm");
                $(".response").addClass("error");
                $(".response").text("Такое испытание для данной дисциплины уже существует.");
            }
        }).fail(console.log());
    }else{
        let errorstring="";
        if(faculty == "-")
            errorstring+="Вы не выбрали факультет. ";
        if(direction == "-")
            errorstring+="Вы не выбрали направление. ";   
        if(discipline == "-")
            errorstring+="Вы не выбрали дисциплину. ";   
        $(".response").removeClass("confirm");
        $(".response").addClass("error");
        $(".response").text(errorstring);   
    }

});
$("body").on("submit",".add_result", function(e){
    e.preventDefault();
    let faculty = $('.add_result #new_faculty_id').val();
    let direction = $('.add_result #new_direction_id').val();
    let discipline = $('.add_result #new_discipline_id').val();
    let group = $('.add_result #new_group_id').val();
    let trial = Number( $('.add_result #new_trial_id').val());
    let student = Number( $('.add_result #new_student_id').val());
    let new_result_rating = $('.add_result #new_result_rating_id').val();
    let new_result_date = $('.add_result').find('input[name="new_result_date"]').val();
    let new_result_attempt =  $('.add_result').find('input[name="new_result_attempt"]').val();

if( faculty != "-" &&
    direction != "-" &&
    discipline != "-" &&
    trial != "-" &&
    student != "-" &&
    new_result_rating != "-"){
        $.ajax({
            type: 'post',
            url: '/assets/php/get_results.php',
            dataType: 'json',
            data: {id_student:student,
                    id_trial:trial}
        }).done(function(data){
            if(data ===null){
                $.ajax({
                    type: 'post',
                    url: '/assets/php/add_result.php',
                    dataType: 'json',
                    data: { student_id:discipline,
                            trial_id:trial,
                            result_rating:new_result_rating,
                            result_date:new_result_date,
                            result_attempt:new_result_attempt}
                }).done(function(response){
                    if(response>0){
                        $(".response").removeClass("error");
                        $(".response").addClass("confirm");
                        $(".response").text("Новый результат успешно добавлен. ");
                    }else{
                        $(".response").removeClass("confirm");
                        $(".response").addClass("error");
                        $(".response").text("Результат добавлен не был. ");
                    }
                }).fail(function(response){
                    $(".response").removeClass("confirm");
                    $(".response").addClass("error");
                    $(".response").text("Результат добавлен не был. Подробности в консоли разработчика. ");
                    console.log(response.responseText)
                });
            }else{
                $(".response").removeClass("confirm");
                $(".response").addClass("error");
                $(".response").text("Такой результат для данного испытания и студента уже существует. Измените его. ");
            }
        }).fail(console.log());
    }else{
        let errorstring="";
        if(faculty == "-")
            errorstring+="Вы не выбрали факультет. ";
        if(direction == "-")
            errorstring+="Вы не выбрали направление. ";   
        if(discipline == "-")
            errorstring+="Вы не выбрали дисциплину. "; 
        if(group == "-")
            errorstring+="Вы не выбрали группу. "
        if(trial == "-")
            errorstring+="Вы не выбрали испытание. "
        if(student   == "-")
            errorstring+="Вы не выбрали студента. "
        $(".response").removeClass("confirm");
        $(".response").addClass("error");
        $(".response").text(errorstring);   
     }
});