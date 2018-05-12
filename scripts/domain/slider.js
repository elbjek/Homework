import '../vendor/slick.min';

$(document).ready(function(){
  $('.slick').slick({
    autoplay:true,
    autoplaySpeed:3000,
    mobileFirst:true,
    dots:true,
    arrows:false,
    centerMode:false,
    centerPadding: '0px',
    infinite:false,
    fade:true,
    responsive: [
      {breakpoint:3000,
      settings: {slidesToShow:1,slidesToScroll:1}
      },
      {breakpoint:1000,
      settings: {slidesToShow:1,slidesToScroll:1}
      },
      {breakpoint:750,
      settings: {slidesToShow:1,slidesToScroll:1}
      },
      {breakpoint:500,
      settings: {slidesToShow:1, slidesToScroll:1}
      }
      ]
  });

});