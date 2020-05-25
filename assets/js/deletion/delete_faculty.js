$("body").on("click",".delete_faculty", function(e){
    e.preventDefault();
    let id_faculty = $(this).parent().find('input[name="id_faculty_form"]').val();
    let name_faculty = $(this).parent().find('input[name="name_faculty_form"]').val();
    $.ajax({
        type: 'post',
        url: '/assets/php/get_directions.php',
        dataType: 'json',
        data: {id_faculty:id_faculty}
    }).done(function(data){
        let answer;
        if(data === null){
            answer = confirm(`Вы уверены, что хотите удалить следующий элемент? '`+name_faculty+`'`);
            if(answer){        
                $.ajax({
                    type: 'post',
                    url: '/assets/php/delete_faculty.php',
                    dataType: 'json',
                    data: {id_faculty:id_faculty}
                }).done(function(){
                    alert("Факультет успешно удален.");
                    get_faculty_list();
                });
            }
        }else{
            alert("Для удаления данного факультета вам требуется удалить направления, которые к нему принадлежат.");
        }
    });
});


