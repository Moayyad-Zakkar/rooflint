jQuery(document).ready(function($) {
  $('#telephone').selectmenu();
  $('#telephone-button .ui-icon').fadeTo('slow', '0.5');

  // $( ".lang ul li " ).hover(
  //   function() {
  //     $( this ).css( 'background-image','url("http://new.rooflint.com/wp-content/themes/pullsky/img/circle2.png")' );
  //   }, function() {
  //   $( this ).css( 'background-image','none' );
  //   }
  // );
  var url = document.location.href;
  $.each($('.header-menu li a:not(.sub-menu li a)'), function() {
    if (this.href == url) {
      $(this).addClass('a-active');
    }
  });

  $('.show-form').click(function() {
    $('.back').css('display', 'block');
    $('.float-window').css('display', 'block');
  });

  $('.exit').click(function() {
    $('.back').css('display', 'none');
    $('.float-window').css('display', 'none');
  });

  $('.show-form1').click(function() {
    $('.back1').css('display', 'block');
    $('.float-window1').css('display', 'block');
  });

  $('.exit1').click(function() {
    $('.back1').css('display', 'none');
    $('.float-window1').css('display', 'none');
  });

  $('.all').click(function() {
    $('.visible-none').css('display', 'block');
    $('.all').css('display', 'none');
    $('.all-back').css('display', 'block');
  });

  $('.all-back').click(function() {
    $('.visible-none').css('display', 'none');
    $('.all').css('display', 'block');
    $('.all-back').css('display', 'none');
  });

  var url = document.location.href;
  $.each($('#menu-nav-actions li a'), function() {
    if (this.href == url) {
      $(this).addClass('sub-active');
    }
  });

  var url = document.location.href;
  $.each($('#menu-nav-news li a'), function() {
    if (this.href == url) {
      $(this).addClass('sub-active');
    }
  });

  var url = document.location.href;
  $.each($('#static-menu li a'), function() {
    if (this.href == url) {
      $(this).addClass('sub-active');
    }
  });

  $('.fancybox1').fancybox();
  $('.fancybox2').fancybox();
  $('.fancybox3').fancybox();
  $('.fancybox4').fancybox();
  $('.fancybox5').fancybox();

  $('.fancybox').fancybox();

  $('.cp-insert-button').click(function() {
    var bl = $(this).attr('id');
    var tx = $(this).text();
    tx = tx.trim();

    if (tx == 'Показать все') {
      $(this).text('Скрыть');
    } else if (tx == 'Показати всі') {
      $(this).text('Сховати');
    } else if (tx == 'Show all') {
      $(this).text('Hide');
    } else if (tx == 'Сховати') {
      $(this).text('Показати всі');
    } else if (tx == 'Скрыть') {
      $(this).text('Показать все');
    } else if (tx == 'Hide') {
      $(this).text('Show all');
    }

    $('.' + bl).slideToggle('slow');

    // $('.cp-show').css('display', 'none');
    // $('.cp-hide').css('display', 'block');
    // $('.mnu').slideToggle("slow");
  });
  $('.phone-page , .phone').mask('+(999) (999) (999 999)');
});
