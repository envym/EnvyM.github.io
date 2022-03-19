
  function slowScroll (id) {
    var offset = 0;
    $('html, body').animate ({
      scrollTop: $(id).offset ().top - offset
    }, 100);
    return false;
  }






/*_________________________________________services____________________*/


function services_list_item1(){


	document.getElementById("services_list_item_icon1").style.display = 'none';
	document.getElementById("services_list_item_iconOpen1").style.display = 'flex';
	document.getElementById("services_list_item_open1").style.display = 'flex';
	document.getElementById("services_list_item_arrowC1").style.display = 'none';
	document.getElementById("services_list_item_arrowO1").style.display = 'flex';
	document.getElementById("services_list_item_text1").style.fontWeight  = '800';

}


function services_list_item1close(){


	document.getElementById("services_list_item_icon1").style.display = 'flex';
	document.getElementById("services_list_item_iconOpen1").style.display = 'none';
	document.getElementById("services_list_item_open1").style.display = 'none';
	document.getElementById("services_list_item_arrowC1").style.display = 'flex';
	document.getElementById("services_list_item_arrowO1").style.display = 'none';
	document.getElementById("services_list_item_text1").style.fontWeight  = '400';
}


function services_list_item2(){


	document.getElementById("services_list_item_icon2").style.display = 'none';
	document.getElementById("services_list_item_iconOpen2").style.display = 'flex';
	document.getElementById("services_list_item_open2").style.display = 'flex';
	document.getElementById("services_list_item_arrowC2").style.display = 'none';
	document.getElementById("services_list_item_arrowO2").style.display = 'flex';
	document.getElementById("services_list_item_text2").style.fontWeight  = '800';
}


function services_list_item2close(){


	document.getElementById("services_list_item_icon2").style.display = 'flex';
	document.getElementById("services_list_item_iconOpen2").style.display = 'none';
	document.getElementById("services_list_item_open2").style.display = 'none';
	document.getElementById("services_list_item_arrowC2").style.display = 'flex';
	document.getElementById("services_list_item_arrowO2").style.display = 'none';
	document.getElementById("services_list_item_text2").style.fontWeight  = '400';
}


function services_list_item3(){


	document.getElementById("services_list_item_icon3").style.display = 'none';
	document.getElementById("services_list_item_iconOpen3").style.display = 'flex';
	document.getElementById("services_list_item_open3").style.display = 'flex';
	document.getElementById("services_list_item_arrowC3").style.display = 'none';
	document.getElementById("services_list_item_arrowO3").style.display = 'flex';
	document.getElementById("services_list_item_text3").style.fontWeight  = '800';
}


function services_list_item3close(){


	document.getElementById("services_list_item_icon3").style.display = 'flex';
	document.getElementById("services_list_item_iconOpen3").style.display = 'none';
	document.getElementById("services_list_item_open3").style.display = 'none';
	document.getElementById("services_list_item_arrowC3").style.display = 'flex';
	document.getElementById("services_list_item_arrowO3").style.display = 'none';
	document.getElementById("services_list_item_text3").style.fontWeight  = '400';
}

function services_list_item4(){


	document.getElementById("services_list_item_icon4").style.display = 'none';
	document.getElementById("services_list_item_iconOpen4").style.display = 'flex';
	document.getElementById("services_list_item_open4").style.display = 'flex';
	document.getElementById("services_list_item_arrowC4").style.display = 'none';
	document.getElementById("services_list_item_arrowO4").style.display = 'flex';
	document.getElementById("services_list_item_text4").style.fontWeight  = '800';
}


function services_list_item4close(){


	document.getElementById("services_list_item_icon4").style.display = 'flex';
	document.getElementById("services_list_item_iconOpen4").style.display = 'none';
	document.getElementById("services_list_item_open4").style.display = 'none';
	document.getElementById("services_list_item_arrowC4").style.display = 'flex';
	document.getElementById("services_list_item_arrowO4").style.display = 'none';
	document.getElementById("services_list_item_text4").style.fontWeight  = '400';
}

function services_list_item5(){


	document.getElementById("services_list_item_icon5").style.display = 'none';
	document.getElementById("services_list_item_iconOpen5").style.display = 'flex';
	document.getElementById("services_list_item_open5").style.display = 'flex';
	document.getElementById("services_list_item_arrowC5").style.display = 'none';
	document.getElementById("services_list_item_arrowO5").style.display = 'flex';
	document.getElementById("services_list_item_text5").style.fontWeight  = '800';
}


function services_list_item5close(){


	document.getElementById("services_list_item_icon5").style.display = 'flex';
	document.getElementById("services_list_item_iconOpen5").style.display = 'none';
	document.getElementById("services_list_item_open5").style.display = 'none';
	document.getElementById("services_list_item_arrowC5").style.display = 'flex';
	document.getElementById("services_list_item_arrowO5").style.display = 'none';
	document.getElementById("services_list_item_text5").style.fontWeight  = '400';
}



/*_________________________________________slider____________________*/



$(document).ready(function(){

	$('.slidr_box').slick({
		prevArrow: $('.slidr_box_arrowL'),
		nextArrow: $('.slidr_box_arrowR'),
		slidesToShow: 2,

		responsive: [
    {
      breakpoint: 1300,
      settings: {
        
        slidesToShow: 1,

        
      }
    }
    
  ]
	});
})



/*_______________________________________--examples__________________________*/


$(document).ready(function(){
	$("#examples_box_conteiner_item_img1").on({
		mouseenter: function() {
			document.getElementById("examples_box_conteiner_item_img1").style.display = 'none';
			document.getElementById("examples_box_conteiner_item_text1").style.display = 'flex';
		}
	})
	$("#examples_box_conteiner_item_text1").on({
		mouseleave: function() {
			document.getElementById("examples_box_conteiner_item_img1").style.display = 'flex';
			document.getElementById("examples_box_conteiner_item_text1").style.display = 'none';
		}
	})

		$("#examples_box_conteiner_item_img2").on({
		mouseenter: function() {
			document.getElementById("examples_box_conteiner_item_img2").style.display = 'none';
			document.getElementById("examples_box_conteiner_item_text2").style.display = 'flex';
		}
	})
	$("#examples_box_conteiner_item_text2").on({
		mouseleave: function() {
			document.getElementById("examples_box_conteiner_item_img2").style.display = 'flex';
			document.getElementById("examples_box_conteiner_item_text2").style.display = 'none';
		}
	})


	$("#examples_box_conteiner_item_img3").on({
		mouseenter: function() {
			document.getElementById("examples_box_conteiner_item_img3").style.display = 'none';
			document.getElementById("examples_box_conteiner_item_text3").style.display = 'flex';
		}
	})
	$("#examples_box_conteiner_item_text3").on({
		mouseleave: function() {
			document.getElementById("examples_box_conteiner_item_img3").style.display = 'flex';
			document.getElementById("examples_box_conteiner_item_text3").style.display = 'none';
		}
	})

	$("#examples_box_conteiner_item_img4").on({
		mouseenter: function() {
			document.getElementById("examples_box_conteiner_item_img4").style.display = 'none';
			document.getElementById("examples_box_conteiner_item_text4").style.display = 'flex';
		}
	})
	$("#examples_box_conteiner_item_text4").on({
		mouseleave: function() {
			document.getElementById("examples_box_conteiner_item_img4").style.display = 'flex';
			document.getElementById("examples_box_conteiner_item_text4").style.display = 'none';
		}
	})

	$("#examples_box_conteiner_item_img5").on({
		mouseenter: function() {
			document.getElementById("examples_box_conteiner_item_img5").style.display = 'none';
			document.getElementById("examples_box_conteiner_item_text5").style.display = 'flex';
		}
	})
	$("#examples_box_conteiner_item_text5").on({
		mouseleave: function() {
			document.getElementById("examples_box_conteiner_item_img5").style.display = 'flex';
			document.getElementById("examples_box_conteiner_item_text5").style.display = 'none';
		}
	})

	$("#examples_box_conteiner_item_img6").on({
		mouseenter: function() {
			document.getElementById("examples_box_conteiner_item_img6").style.display = 'none';
			document.getElementById("examples_box_conteiner_item_text6").style.display = 'flex';
		}
	})
	$("#examples_box_conteiner_item_text6").on({
		mouseleave: function() {
			document.getElementById("examples_box_conteiner_item_img6").style.display = 'flex';
			document.getElementById("examples_box_conteiner_item_text6").style.display = 'none';
		}
	})

});


/*_______________________________________--examples slider__________________________*/

$(document).ready(function(){

	$('.examples_box').slick({
		prevArrow: $('.examples_arrowL'),
		nextArrow: $('.examples_arrowR'),
		slidesToShow: 2,
		centerPadding: '38px',


		responsive: [
    {
      breakpoint: 1280,
      settings: {
      	centerPadding: '40px',
        slidesToShow: 1
      }
    }
    
  ]
	});
})



/*_______________________________________-- mobile menu__________________________*/



function menuCall(){
	
	document.getElementById("menu_mobile_block").style.display = 'flex';
	document.getElementById("menu_close").style.display = 'flex';
	document.getElementById("menu_list").style.display = 'none';



}


function menuClose(){
	document.getElementById("menu_mobile_block").style.display = 'none';
		document.getElementById("menu_close").style.display = 'none';
	document.getElementById("menu_list").style.display = 'flex';
}



/*________________________  chsnge screen size chek /// for element select menu mobile setup___________________*/



  var optimizedResize = (function() {

    var callbacks = [],
    running = false;

    // fired on resize event
    function resize() {

      if (!running) {
        running = true;

        if (window.requestAnimationFrame) {
          window.requestAnimationFrame(runCallbacks);
        } else {
          setTimeout(runCallbacks, 200);
        }
      }

    }

    // run the actual callbacks
    function runCallbacks() {

      callbacks.forEach(function(callback) {
        callback();
      });

      running = false;
    }

    // adds callback to loop
    function addCallback(callback) {

      if (callback) {
        callbacks.push(callback);
      }

    }

    return {
        // public method to add additional callback
        add: function(callback) {
          if (!callbacks.length) {
            window.addEventListener('resize', resize);
          }
          addCallback(callback);
        }
    }
}());



optimizedResize.add(function() {
    let windWidth = window.innerWidth;

    if (windWidth > 900){
      document.getElementById("menu_mobile_block").style.display = 'none';
    document.getElementById("menu_close").style.display = 'none';
    document.getElementById("menu_list").style.display = 'none';
      
    }
    else{
         document.getElementById("menu_list").style.display = 'flex';;
      
    }

  });


function menu_mobile_check(){
	var wi = window.innerWidth;
	if(wi < 900){
		 document.getElementById("menu_list").style.display = 'flex';
	}
}


/*______________submit______-*/


$(window).on("scroll", function(){
	$('input[name="scroll"]').val($(window).scrollTop());
});
 
$(document).ready(function(){
	var p = window.location.search;
	p = p.match(new RegExp('scroll=([^&=]+)'));
	if (p) {
		window.scrollTo(0, p[1]);
	}	  
}); 