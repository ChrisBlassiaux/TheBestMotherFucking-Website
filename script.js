$("#invmode").click(function(){
    if ($("body").hasClass("dark")){
        $("body").removeClass("dark");
    }
    else{
        $("body").addClass("dark");
    }
});

$("#contrast").click(function(){
    if ($("body").hasClass("contrast")){
        $("body").removeClass("contrast");
    }
    else{
        $("body").addClass("contrast");
    }
});