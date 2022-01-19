$(document).ready(function(){
    $(".band").click(function(){
        $(".band__iframe").removeClass("show");
        $(".band__name").removeClass("selected");
        $(this).find(".band__iframe").toggleClass("show");
        $(this).find(".band__name").toggleClass("selected");
    });
});