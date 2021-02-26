$(function() {
    $('.scroll-down').click (function() {
      $('html, body').animate({scrollTop: $('.about-sec').offset().top }, 'slow');
      return false;
    });
  });