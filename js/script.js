$(document).ready(function() {


	$('.slider').slick({
  dots: false,
  speed: 1000,
  arrows: true,
  slidesToShow: 1,
  slidesToScroll: 2,
  centerMode: true,
  centerPadding: '0.1px', 
  infinite: false,
  draggable: true,
  edgeFriction: '0.01',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 2,
        infinite: true,
        dots: false,
        draggable: true,
      }
    },
    
   
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
	
	/*$('.slick-next').on('click', function(){
     $('.slick-line_next').animate({
       marginLeft: '50%',
     },700);
  });
  $('.slick-prev').on('click', function(){
     $('.slick-line_prev').animate({
       marginLeft: '0',
     },700);
  });*/

});

