$("body").on("submit",".add_direction", function(e){
    e.preventDefault();
    let new_direction = $('.add_direction').find('input[name="new_direction_name"]').val();
    let faculty = $('.add_direction').find('input[name="new_faculty_id"]').val();
        $.ajax({
            type: 'post',
            url: '/assets/php/get_directions.php',
            dataType: 'json',
            data: ''
        }).done(function(data){
            data = data.map(function(item){
                return item.direction_name;
            });
            if(!data.includes(new_direction)){
                $.ajax({
                    type: 'post',
                    url: '/assets/php/add_direction.php',
                    dataType: 'json',
                    data: {direction_name:new_direction,faculty_id:faculty}
                }).done(function(response){
                    if(response>0){
                        $(".response").removeClass("error");
                        $(".response").addClass("confirm");
                        $(".response").text("Новое направление успешно добавлено. ");
                        get_directions_list(faculty);
                    }else{
                        $(".response").removeClass("confirm");
                        $(".response").addClass("error");
                        $(".response").text("Направление добавлено не было. ");
                    }
                }).fail(function(response){
                    $(".response").removeClass("confirm");
                    $(".response").addClass("error");
                    $(".response").text("Направление добавлено не было. Подробности в консоли разработчика. ");
                    console.log(response.responseText);
                });
            }else{
                $(".response").removeClass("confirm");
                $(".response").addClass("error");
                $(".response").text("Такое направление уже существует. ");
            }
        }).fail(console.log());
    setTimeout(function(){
        $(".response").removeClass("confirm");
        $(".response").removeClass("error");
        $(".response").text('');
    },3000)
});