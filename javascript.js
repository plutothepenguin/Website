$('.outerCircle').mouseover(function() {
  $('.outerCircle').css('width', '505px');
  $('.outerCircle').css('height', '505px');
  $('.innerCircle').css('width', '455px');
  $('.innerCircle').css('height', '455px');
  $('.title').css('font-size', '72px');
  $('.outerCircle').css('box-shadow', '0px 0px 20px 10px #fff');
  // $('.innerCircle').css('background-color', 'white');
})
$('.outerCircle').mouseout(function() {
  $('.outerCircle').css('width', '500px');
  $('.outerCircle').css('height', '500px');
  $('.innerCircle').css('width', '450px');
  $('.innerCircle').css('height', '450px');
  $('.title').css('font-size', '69px');
  $('.outerCircle').css('box-shadow', '0px 0px 5px 3px #fff');
  // $('.innerCircle').css('background-color', '#eeeeee');
})
$('.outerCircle').mousedown(function() {
  $('.outerCircle').css('width', '500px');
  $('.outerCircle').css('height', '500px');
  $('.innerCircle').css('width', '450px');
  $('.innerCircle').css('height', '450px');
  $('.title').css('font-size', '69px');
  $('.outerCircle').css('box-shadow', '0px 0px 0px 0px #fff');

  // $(window).scrollTop($(window).height());
})
$('.outerCircle').mouseup(function() {
  $('.outerCircle').css('width', '505px');
  $('.outerCircle').css('height', '505px');
  $('.innerCircle').css('width', '455px');
  $('.innerCircle').css('height', '455px');
  $('.title').css('font-size', '72px');
  $('.outerCircle').css('box-shadow', '0px 0px 20px 10px #fff');
  $('html').animate({scrollTop: $(window).height()}, 500);
})
let scroll;
// $(window).scroll(function (event) {
//     scroll = $(window).scrollTop();
//     if (scroll >= $(window).height()) {
//       // alert('yes');
//     }
//     scroll = ((((scroll - 0) * (100 - 0)) / ($(window).height() - 0)) + 0);
//     $('.top').css('opacity', (100-scroll)/100);
//     $('.middle').css('opacity', (200-scroll)/100)
//
// });
