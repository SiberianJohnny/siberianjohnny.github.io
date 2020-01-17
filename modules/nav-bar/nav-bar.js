$(function() {
  $('.menu__button').click(function() {
    $(this).next('.menu').find('ul').slideToggle(500);
  });
  $(window).resize(function() {
    if ($(window).width() > 500) {
      $('.menu ul').removeAttr('style');
    }
  })
});