$(function() {

	$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    dots: true,
    responsiveClass:true, 
    autoplay:true,
    navigation:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,    
    responsive:{
        0:{
            items:1,
            dots: true,
            dotsEach: true,
        },
        600:{
            items:1,
            dots: true,
             dotsEach: true,
        },
        1000:{
            items:1,
            dots: true,
             dotsEach: true,
            loop:true		
        }
    }
    })

    $("#search_button").click(function(){
        $(this).toggleClass("times");
        $("#search-form").slideToggle(500);
    });
     $(".navbar-toggler").click(function(){
        $(".bar_icon").toggleClass("close");
    });

});