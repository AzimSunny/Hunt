$(document).ready(function(){
     $('.venobox').venobox(); 
 });

 $('.service-slider').slick({
     vertical:true,
     slidesToShow:3,
     centerMode:true,
     centerPadding:false,
     prevArrow: '<i class="fas fa-chevron-up"></i>',
     nextArrow: '<i class="fas fa-chevron-down"></i>',
     responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            vertical:false,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            vertical:false
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]

 });

 $('.testi-slider1').slick({
     vertical:true,
     slidesToShow:3,
     centerMode:true,
     centerPadding:"0",
     prevArrow: '<i class="fas fa-chevron-up"></i>',
     nextArrow: '<i class="fas fa-chevron-down"></i>',
     asNavFor:'.testi-slider2',
      
 })

 $(".testi-slider2").slick({
      
       slidesToShow:1,
       vertical:true,
       centerMode:true,
       centerPadding:true,
       asNavFor:'.testi-slider1',
       arrows:false,
       
    })

   $('.counter').counterUp({
       delay:10,
       time:2000
   })
   
   $('.company-slider').slick({
       slidesToShow:5,
       arrows:false,
       autoplay:true,
       
        
       centerMode:true,
       centerPadding:0,
       responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
   })
       
       
        
