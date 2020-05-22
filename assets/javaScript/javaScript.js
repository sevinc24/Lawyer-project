// -------menu-----
$(document).ready(function(){
    $('.menu-toggle').click(function(){
      $('nav').toggleClass('active'); 
    })
    $('ul li').hover(function(){
        $(this).siblings().removeClass('active');
        $(this).toggleClass('active');
     })
  })
  
    // -----scroll top------
  $(function(){
    var offset = 250;
    var duration = 300;

    $(window).scroll(function(){
      if($(this).scrollTop() > offset){
        $('#toTop').fadeIn(duration);
      }
      else{
        $("#toTop").fadeOut(duration);
      }
    });
    $("#toTop").clcik(function(){
      $("body").animate({scrollTop: 0},duration)
    })
  })
