$(document).ready(function(){

    $("#nav").addClass(".js");
    $("#nav").addClass(".js").before('<div id="menu"><i class="fa-solid fa-bars"></i></div>');
    $("#menu").click(function(){
        $("#nav").toggle();  

    });

    $(window).resize(function(){
        if ( $(window).innerWidth()>768){
            $("#nav").removeAttr("style");
        }
    });


  $(window).scroll(function(){

    if( $(window).scrollTop()>=50){
        $("#navbar").addClass("sticky");
        

    }
    else{
        $("#navbar").removeClass("sticky");

    }

  });






});
