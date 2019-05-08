$('.outerCircle').mouseover(function() {
  $('.outerCircle').css('width', '505px');
  $('.outerCircle').css('height', '505px');
  $('.innerCircle').css('width', '455px');
  $('.innerCircle').css('height', '455px');
  // $('.innerCircle').css('background-color', 'white');
})
$('.outerCircle').mouseout(function() {
  $('.outerCircle').css('width', '500px');
  $('.outerCircle').css('height', '500px');
  $('.innerCircle').css('width', '450px');
  $('.innerCircle').css('height', '450px');
  // $('.innerCircle').css('background-color', '#eeeeee');
})
let scroll;
$(window).scroll(function (event) {
    scroll = $(window).scrollTop();
    if (scroll >= $(window).height()) {
      // alert('yes');
    }
    scroll = (100-((((scroll - 0) * (100 - 0)) / ($(window).height() - 0)) + 0))/100;
    $('.top').css('opacity', scroll);

});
