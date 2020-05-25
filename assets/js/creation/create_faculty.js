$("body").on("submit",".add_faculty", function(e){
    e.preventDefault();
    let new_faculty = $('.add_faculty').find('input[name="new_faculty"]').val();
    if(new_faculty.length>0){
        $.ajax({
            type: 'post',
            url: '/assets/php/get_faculties.php',
            dataType: 'json',
            data: ''
        }).done(function(data){
            dataCheck = data.map(function(item){
                return item.faculty_name;
            });
            if(!dataCheck.includes(new_faculty)){
                $.ajax({
                    type: 'post',
                    url: '/assets/php/add_faculty.php',
                    dataType: 'json',
                    data: {faculty_name:new_faculty}
                }).done(function(response){
                    if(response>0){
                        $(".response").removeClass("error");
                        $(".response").addClass("confirm");
                        $(".response").text("Новый факультет успешно добавлен. ");
                        get_faculty_list();

                    }else{
                        $(".response").removeClass("confirm");
                        $(".response").addClass("error");
                        $(".response").text("Факультет добавлен не был. ");
                    }
                }).fail(function(response){
                    $(".response").removeClass("confirm");
                    $(".response").addClass("error");
                    $(".response").text("Факультет добавлен не был. Подробности в консоли разработчика. ");
                    console.log(response.responseText)
                });
            }else{
                $(".response").removeClass("confirm");
                $(".response").addClass("error");
                $(".response").text("Такой факультет уже существует. ");
            }

        }).fail(console.log());
    }else{
        $(".response").removeClass("confirm");
        $(".response").addClass("error");
        $(".response").text("Название факультета не может быть пустым. ");
    }
    setTimeout(function(){
        $(".response").removeClass("confirm");
        $(".response").removeClass("error");
        $(".response").text('');
    },3000)
});