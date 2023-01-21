$(document).ready(function(){
    $("#slider1").owlCarousel({
        items:1,
        loop:true,
        // center:true,
        mouseDrag:true,
        nav:true,
        navSpeed:2000,
        autoplay:true,
        autoplaySpeed:0,
        autoplayTimeout:5000,
        navText:['<i class="fa-solid fa-angle-left"></i>','<i class="fa-solid fa-angle-right"></i>'],
        // animateIn:'animate__zoomIn',
        // animateOut:'animate__zoomOut'
    });
  });

  $(document).ready(function(){
    $("#slider2").owlCarousel({
       items:4,
       margin:50,
       loop:true,
       nav:true,
       autoplay:false,
       dotsEach:true,
       dotsSpeed:1000,
    });
  });

  $(document).ready(function(){
    $("#slider3").owlCarousel({
      items:1,
      loop:true,
      nav:true,
      navSpeed:0,
      navText:['<i class="fa-solid fa-angle-left"></i>','<i class="fa-solid fa-angle-right"></i>'],
    });
  });