$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY >20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });


    var typed = new Typed(".typing", {
        strings:["Programador","Analista de Dados","Auxiliar Contábil","Freelancer"], 
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })

    //toggle menu/navbar script//

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

});