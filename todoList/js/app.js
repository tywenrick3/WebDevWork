//help source https://jsbeginners.com/todo-list-javascript-project-v1/ and https://www.youtube.com/watch?v=h7gZY3_3Dqs
$(".txtb").on("keyup", function(e){

//if enter key is hit 
if(e.keyCode === 13 && $(".txtb").val() != ""){
    let task = $("<div class='task'></div>").text($(".txtb").val());
    let del = $("<i class='fas fa-trash-alt'></i>").click(function(){
        let p = $(this).parent();
        p.fadeOut(function(){
            //gets rid of task
            p.remove();
        });
        
    });
    let done = $("<i class='fas fa-check'></i>").click(function(){
        let p = $(this).parent();
        p.fadeOut(function(){
            //move it to the completed section
            $(".comp").append(p);
            p.fadeIn();
        });
       $(this).remove();
    });

    task.append(del, done);
    $(".notcomp").append(task);
    //clears input
    $(".txtb").val("");
}

});