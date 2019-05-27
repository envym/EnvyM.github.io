$(function(){

	





 $('.about-wrap-character__pic').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav',
   	
});
 
$('.slider-nav').slick({
	prevArrow: $('.character-list-roll-imgL'),
	nextArrow: $('.character-list-roll-imgR'),
	 
  centerPadding: '80px',
  slidesToShow: 2,
  slidesToScroll: 1,
  rows: 2,
  dots: false,
  asNavFor: '.about-wrap-character__pic',
  centerMode: false,
  
});






	$('.portfolio-slider').slick({

infinite: true,
	
 centerMode: true,
  centerPadding: '70px',
  slidesToShow: 3,

  	prevArrow: $('.gallery-list-roll-imgL'),
	nextArrow: $('.gallery-list-roll-imgR'),




  responsive: [
    {
      breakpoint: 1300,
      settings: {
        arrows: false,
        centerMode: false,
        centerPadding: '40px',
        slidesToShow: 4,
        swipe: false,
        vertical:true
      }
    }
    
  ]
});


	$('.reviews_slider').slick({

infinite: true,
	
 centerMode: true,
  centerPadding: '-20px',
  centreMargin: '10px',
  slidesToShow: 5,

  	prevArrow: $('.reviews-list-roll-imgL'),
	nextArrow: $('.reviews-list-roll-imgR'),



  responsive: [

   {
      breakpoint: 2400,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 4
      }
    },

   {
      breakpoint: 1800,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 1300,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 1000,
      settings: {
        arrows: false,
        centerMode: false,
        centerPadding: '40px',
        slidesToShow: 2
      }
    },
     {
      breakpoint: 767,
      settings: {
        arrows: false,
        centerMode: false,
        centerPadding: '40px',
        slidesToShow: 4,
        swipe: false,
        vertical:true
      }
    }
  ]
});


	
	$('.team-list1').slick({

  infinite: true,
	
 centerMode: true,
  centerPadding: '0px',
  slidesToShow: 3,
  prevArrow: $('.team-list-roll-imgL'),
	nextArrow: $('.team-list-roll-imgR'),



	responsive: [
    {
      breakpoint: 767,
      settings: {
        arrows: false,
        centerMode: false,
        centerPadding: '40px',
        slidesToShow: 3,
        swipe: false,
        vertical:true
      }
    },

    {
      breakpoint: 1300,
      settings: {
        arrows: false,
        centerMode: false,
        centerPadding: '100px',
        slidesToShow: 3
      }
    },

    {
      breakpoint: 1100,
      settings: {
        arrows: false,
        centerMode: false,
        centerPadding: '100px',
        slidesToShow: 2
      }
    }
    
  ]


	});





	$('.list_by_slider').slick({

  	prevArrow: $('.show-list-roll-imgL-slide'),
	nextArrow: $('.show-list-roll-imgR-slide'),

	responsive: [
    {
      breakpoint: 767,
      settings: {
        arrows: false,
        centerMode: false,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
	});










	$nav_tabs_slider = $('.nav-tab-list');
	settings = {
		slidesToShow: 1,
		prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right"></i></button>',
		infinite: false,
	}

	$nav_tabs_slider.on('afterChange', function(event, slick, currentSlide, nextSlide){
		$(this).parents('.tab-wrap').find('.tab-cont').addClass('hide');
		$(this).find('.slick-current').siblings().removeClass('active');
		var id = $(this).find('.slick-current a').attr('href');
		$(id).removeClass('hide');
		$(this).find('.slick-current').addClass('active');
		return false
	})


	$(window).on('resize load', function(){
		if($(window).width() > 767) {
			if($nav_tabs_slider.hasClass('slick-initialized')) {
				$nav_tabs_slider.slick('unslick')
			}
			return
		}
		if(!$nav_tabs_slider.hasClass('slick-initialized')) {
			return $nav_tabs_slider.slick(settings)
		}
	})

});


   
  function slowScroll (id) {
    var offset = 0;
    $('html, body').animate ({
      scrollTop: $(id).offset ().top - offset
    }, 100);
    return false;
  }


