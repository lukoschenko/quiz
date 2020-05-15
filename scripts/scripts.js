
$(document).ready(function () {
  var isMobile = {
      Android:        function() { return navigator.userAgent.match(/Android/i) ? true : false; },
      BlackBerry:     function() { return navigator.userAgent.match(/BlackBerry/i) ? true : false; },
      iOS:            function() { return navigator.userAgent.match(/iPhone|iPad|iPod/i) ? true : false; },
      Windows:        function() { return navigator.userAgent.match(/IEMobile/i) ? true : false; },
      any:            function() { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Windows());  }
  };
  if ( isMobile.any() ) {
    if($(window).width() == '375') {
      $('.overlay').height(function () {
        return $(document).height();
      });
      $('.overlayThanks').height(function () {
        return $(document).height();
      });
    } else {
      $('.overlay').height(function () {
        return $(document).height() + 1;
      });
      $('.overlayThanks').height(function () {
        return $(document).height() + 1;
      });
    }
  }
  let data = {};
	$('.main-center__btn').on("click", function(){
		$('.overlay').show();
	});
  $('.main-footer__btn').on("click", function(){
    $('.overlay').show();
    $('html, body').animate({scrollTop: 0},500);
        return false;
  });
	$('.step-header__close').on("click", function(){
		$('.overlay').hide();
	});

	$(document).on('click', '.step input', function () {
	        var
	          $this = $(this),
	          id = $this.data('id'),
	          condition = $this.closest('.step').find('input').toArray().some(function (i) {
	            return $(i).is(':checked');
	          });
            
            $this.closest('.step').find('.button').toggleClass('disabled', !condition);
            $this.closest('.step').find('.step4-center__repairname[data-id=' + id + ']').toggleClass('active');
            $this.closest('.step').find('.step5-center__budget[data-id=' + id + ']').toggleClass('active');
            $this.closest('.step').find('.step6-center__way[data-id=' + id + ']').toggleClass('active');
            // $this.closest('.step').find('.step1-center__area input[data-id="8"]').not(this).toggleClass('active');;

	        if ($this.closest('.step').hasClass('step1')) {
	          $('#q1m' + id).toggleClass('active');
            $('#a' + id).toggleClass('active');
	        }
	       	$('#nothing').change(
						    function(){
						        if ($(this).is(':checked')) {
						            $('.map-part').removeClass('active');
                        $('.step1-center__area input::after').css('background-color', '#a1a2a6');
						        }
						    });
	      });

	$(document).on('mouseenter', '.text-container', function () {
	 var id = $(this).data('id');
	 $('#q1m' + id).addClass('hover');
   if ( !isMobile.any() ) {
      $('#a' + id).toggleClass('active');
      $('#ch' + id).toggleClass('active');
   }
	});
	$(document).on('mouseleave', '.text-container', function () {
	 var id = $(this).data('id');
	 $('#q1m' + id).removeClass('hover');
   if ( !isMobile.any() ) {
    $('#a' + id).toggleClass('active');
    $('#ch' + id).toggleClass('active');
   }
	});


	$('.step1-center__btn').on("click", function(){
    $('.step2').show();
    $('.step1').hide();
    $('html, body').animate({scrollTop: 0},500);
        return false;
  });
  $('.step2-center__prev').on("click", function () {
    $('.step2').hide();
    $('.step1').show();
    $('html, body').animate({scrollTop: 0},500);
        return false;
  })
  $('.step2-center__btn').on("click", function(){
      $('.step3').show();
      $('.step2').hide();
      $('html, body').animate({scrollTop: 0},500);
          return false;
  });
  $('.step3-center__prev').on("click", function () {
    $('.step3').hide();
    $('.step2').show();
    $('html, body').animate({scrollTop: 0},500);
        return false;
  })
  $('.step3-center__btn').on("click", function(){
      $('.step4').show();
      $('.step3').hide();
      $('html, body').animate({scrollTop: 0},500);
          return false;
  });
  $('.step4-center__prev').on("click", function () {
    $('.step4').hide();
    $('.step3').show();
    $('html, body').animate({scrollTop: 0},500);
        return false;
  })
 $('.step4-center__btn').on("click", function(){
    $('.step5').show();
    $('.step4').hide();
    $('html, body').animate({scrollTop: 0},500);
        return false;
 });
  $('.step5-center__prev').on("click", function () {
    $('.step5').hide();
    $('.step4').show();
    $('html, body').animate({scrollTop: 0},500);
        return false;
  })
  $('.step5-center__btn').on("click", function(){
      $('.step6').show();
      $('.step5').hide();
      $('html, body').animate({scrollTop: 0},500);
          return false;
  });
  $('.step6-center__prev').on("click", function () {
    $('.step6').hide();
    $('.step5').show();
    $('html, body').animate({scrollTop: 0},500);
        return false;
  })
  $('.step6-center__btn').on("click", function(){
      $('.main').hide();
      $('.step6').hide();
      $('html, body').animate({scrollTop: 0},500);
      $('.overlay').animate({opacity: "hide"}, 1000);
      $('.result').show();
          return false;
  });
  $('.result-center__btn').prop('disabled', true);

  $('.result-center__btn').on("click", function () {
  })
  $('.thanks-btn').on("click", function () {
    $('.overlayThanks').hide();
    $('html, body').animate({scrollTop: 0},500);
        return false;
  })
  
  $(function(){
  $("#tel").mask("+7 (999) 999-99-99", {
    completed: function(){ 
  	   $('.result-center__btn').prop('disabled', false);
  				$('.result-center__btn').css({"background-color": '#df2151'});
    }
  });
});

  var rep1, rep2, rep3, rep4;
  rep1 = false;
  rep2 = false;
  rep3 = false;
  rep4 = false;

  $('#repairsFirst').change(
  function(){
      if ($(this).is(':checked')) {
          $('.result-center__img').prop('src', 'img/result/Nothing.png');
          rep1 = true;
      }
  });
  $('#repairsSecond').change(
  function(){
      if ($(this).is(':checked')) {
          $('.result-center__img').prop('src', 'img/result/Clear.png');
          rep2 = true;
      }
  });   
  $('#repairsThird').change(
  function(){
      if ($(this).is(':checked')) {
          $('.result-center__img').prop('src', 'img/result/Russia.png');
          rep3 = true;
      }
  });
  $('#repairsFourth').change(
  function(){
      if ($(this).is(':checked')) {
          $('.result-center__img').prop('src', 'img/result/Now.png');
          rep4 = true;
      }
  });
  $('.step4-center__repair').change(
    function() {
      if( rep1==true && rep2==true && rep3==true && rep4==true ||
          rep1==true && rep2==true && rep3==true ||
          rep1==true && rep2==true ||
          rep2==true && rep3==true && rep4==true ||
          rep2==true && rep3==true ||
          rep3==true && rep4==true
          ) {
          $('.result-center__img').prop('src', 'img/result/Now.png');
      }
  });

});