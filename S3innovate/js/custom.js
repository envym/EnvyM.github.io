
  function slowScroll (id) {
    var offset = 0;
    $('html, body').animate ({
      scrollTop: $(id).offset ().top - offset
    }, 200);
    return false;
  }




$(document).ready(function(){

  $('.reviews_box_slider_slider').slick({
       prevArrow: $('.reviews_box_arr_L'),
   nextArrow: $('.reviews_box_arr_R'),
   dots:true,
  });
})


function menuCall (){
    
  document.getElementById("menu_mobile_block").style.display = 'flex';
   document.getElementById("menu_close").style.display = 'flex';
   document.getElementById("menu_list").style.display = 'none';


  }

  function menuClose (){
    
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

    if (windWidth > 1158){
      document.getElementById("menu_mobile_block").style.display = 'none';
    document.getElementById("menu_close").style.display = 'none';
    document.getElementById("menu_list").style.display = 'none';
      
    }
    else{
         document.getElementById("menu_list").style.display = 'flex';;
      
    }

  });