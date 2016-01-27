
function cycleImages(){
      var $active = $('#cycler .active');
      var $next = ($active.next().length > 0) ? $active.next() : $('#cycler img:first');
      $next.css('z-index',-1);
      $active.fadeOut(1500,function(){
    $active.css('z-index',-2).show().removeClass('active');
          $next.css('z-index',0).addClass('active');
      });
    }


function cycleImages2(){
      var $active = $('#FotoShow .active');
      var $next = ($active.next().length > 0) ? $active.next() : $('#FotoShow img:first');
      $next.css('z-index',-1);
      $active.fadeOut(1500,function(){
    $active.css('z-index',-2).show().removeClass('active');
          $next.css('z-index',0).addClass('active');
      });
    }

$(document).ready(function(){

setInterval('cycleImages()', 6000);
setInterval('cycleImages2()', 4000);
})

