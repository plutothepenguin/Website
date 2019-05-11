$('.outerCircle').mouseover(function() {
  $('.outerCircle').css('width', '505px');
  $('.outerCircle').css('height', '505px');
  $('.innerCircle').css('width', '455px');
  $('.innerCircle').css('height', '455px');
  $('.title').css('font-size', '72px');
  $('.outerCircle').css('box-shadow', '0px 0px 20px 10px #fff');
});
$('.outerCircle').mouseout(function() {
  $('.outerCircle').css('width', '500px');
  $('.outerCircle').css('height', '500px');
  $('.innerCircle').css('width', '450px');
  $('.innerCircle').css('height', '450px');
  $('.title').css('font-size', '69px');
  $('.outerCircle').css('box-shadow', '0px 0px 5px 3px #fff');
});
$('.outerCircle').mousedown(function() {
  $('.outerCircle').css('width', '500px');
  $('.outerCircle').css('height', '500px');
  $('.innerCircle').css('width', '450px');
  $('.innerCircle').css('height', '450px');
  $('.title').css('font-size', '69px');
  $('.outerCircle').css('box-shadow', '0px 0px 0px 0px #fff');
});
$('.outerCircle').mouseup(function() {
  $('.outerCircle').css('width', '505px');
  $('.outerCircle').css('height', '505px');
  $('.innerCircle').css('width', '455px');
  $('.innerCircle').css('height', '455px');
  $('.title').css('font-size', '72px');
  $('.outerCircle').css('box-shadow', '0px 0px 20px 10px #fff');
  $('html').animate({scrollTop: $(window).height()}, 500);
});
