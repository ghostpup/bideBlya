$("body").on("submit",".change_faculty", function(e){
    e.preventDefault();
    let id_faculty =  Number($(this).find('input[name="change_faculty_id"]').val());
    let name_faculty =  $(this).find('input[name="change_faculty_name"]').val();
    let current_faculty;
    $.ajax({
        type: 'post',
        url: '/assets/php/get_faculties.php',
        dataType: 'json',
        data: {id_faculty:id_faculty}
    }).done(function(data){
        current_faculty=data.shift();
    });
    $.ajax({
        type: 'post',
        url: '/assets/php/get_faculties.php',
        dataType: 'json',
        data: ''
    }).done(function(data){
        if(name_faculty != current_faculty.faculty_name){
            console.log(name_faculty,current_faculty.faculty_name);
            data = data.map(function(item){
                return item.faculty_name;
            });
            console.log(data);
            if(data.includes(name_faculty)){
                alert("Факультет с таким названием уже существует.  ")
            }else{
                answer = confirm(`Вы уверены, что хотите внести изменения? '`+current_faculty.faculty_name+`' заменить на'`+name_faculty+`'`);
                if(answer){        
                    $.ajax({
                        type: 'post',
                        url: '/assets/php/change_faculty.php',
                        dataType: 'json',
                        data: {id_faculty:id_faculty,
                                faculty_name:name_faculty}
                    }).done(function(){
                        alert("Изменения внесены.");
                        get_directions_forms(id_faculty,name_faculty);
                    });
                }
            }
        }
    });
    
    setTimeout(function(){
        $(".response").removeClass("confirm");
        $(".response").removeClass("error");
        $(".response").text('');
    },3000)
});