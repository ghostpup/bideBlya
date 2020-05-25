$("body").on("click",".delete_direction", function(e){
    e.preventDefault();
    let id_faculty = $(this).parent().find('input[name="id_faculty_form"]').val();
    let id_direction = $(this).parent().find('input[name="id_direction_form"]').val();
    let name_direction = $(this).parent().find('input[name="name_direction_form"]').val();
    $.ajax({
        type: 'post',
        url: '/assets/php/get_groups.php',
        dataType: 'json',
        data: {id_direction:id_direction}
    }).done(function(dataGroups){
        $.ajax({
            type: 'post',
            url: '/assets/php/get_disciplines.php',
            dataType: 'json',
            data: {id_direction:id_direction}
        }).done(function(dataDisciplines){
            if(dataGroups === null && dataDisciplines === null){
                let answer = confirm(`Вы уверены, что хотите удалить следующий элемент? '`+name_direction+`'`);
                if(answer){        
                    $.ajax({
                        type: 'post',
                        url: '/assets/php/delete_direction.php',
                        dataType: 'json',
                        data: {id_direction:id_direction}
                    }).done(function(){
                        alert("Направление успешно удалено.");
                        get_directions_list(id_faculty);
                    });
                }
            }else{
                alert("Для удаления данного направления вам требуется удалить группы и дисциплины, которые к нему принадлежат или изменить их принадлежность.");
            }
        });
    });
});


