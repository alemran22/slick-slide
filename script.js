
$(document).ready(function(){
  $('.container').slick({
    // dots
    dots: true,
    // multiple item
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // center mode
    centerMode: false,
    // centerPadding:"60px",
   
    // lazy load
    // lazyLoad: "ondemand",
    // autoplay
      
    // slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
   
   // fade
    // infinite: true,
    speed: 500,
    fade: false,
    cssEase: 'linear',
    // arrows
    arrows :true,
    prevArrow: ".backbutton",
    nextArrow: ".nextbutton",
    // drag by mouse
    draggable: true,
    // focusOnSelect
    focusOnSelect: true,
    // initialSlide
    initialSlide: 0,
    
    
  });
 
});
	