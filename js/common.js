$(function() {

	$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    dots: true,
    // nav: true,
    responsiveClass:true, 
    autoplay:true,
    navigation:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,    
    // animateOut: 'fadeOut',
    responsive:{
        0:{
            items:1,
            dots: true,
            dotsEach: true,
            // nav:true
        },
        600:{
            items:1,
            dots: true,
             dotsEach: true,
            // nav:false
        },
        1000:{
            items:1,
            dots: true,
             dotsEach: true,
            // nav:true,
            loop:true		
        }
    }
})
});