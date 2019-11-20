$(function() {
  $('.menu__button').click(function() {
      $('.menu ul').slideToggle(500);
  });
  $(window).resize(function() {
    if ($(window).width() > 500) {
      $('.menu ul').removeAttr('style');
    }
  })
});