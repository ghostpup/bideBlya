
$("body").on("click",".back_faculty_list", function(e){
    get_faculty_list();
    $(".back_faculty_list").css("display","none");
});

// 

// $("body").on("submit","#item-direction-form", function(e){
//     e.preventDefault();
//     let faculty =  Number($(this).find('input[name="id_faculty_form"]').val());
//     let direction = Number($(this).find('input[name="id_direction_form"]').val());
//     $.ajax({
//         type: 'post',
//         url: '/assets/php/get_directions.php',
//         dataType: 'json',
//         data: {id_direction_:direction}
//     }).done(function(dataDirection){

//     });
// });

