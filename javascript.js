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
$('button').mousedown(function() {
  $(this).css('margin-top', '10px');
  $(this).siblings('.buttonShadow').css('height', '45px');
})
$('button').mouseup(function() {
  $(this).css('margin-top', '5px');
  $(this).siblings('.buttonShadow').css('height', '50px');
})
let scrollTop = 0;
$(window).scroll(function(){
  // console.log($(window).scrollTop());
  scrollTop = $(window).scrollTop();
  if (scrollTop > $(window).height()/5*5) {
    $('.middleContainer .middleStrip:nth-child(3)').css('opacity', '1');
    $('.middleContainer .middleStrip:nth-child(2)').css('opacity', '1');
    $('.middleContainer .middleStrip:nth-child(1)').css('opacity', '1');
    console.log('third');
  }
  else if (scrollTop > $(window).height()/5*4 ) {
    $('.middleContainer .middleStrip:nth-child(3)').css('opacity', '0');
    $('.middleContainer .middleStrip:nth-child(2)').css('opacity', '1');
    $('.middleContainer .middleStrip:nth-child(1)').css('opacity', '1');
    console.log('second');
  }
  else if (scrollTop > $(window).height()/5*3) {
    $('.middleContainer .middleStrip:nth-child(3)').css('opacity', '0');
    $('.middleContainer .middleStrip:nth-child(2)').css('opacity', '0');
    $('.middleContainer .middleStrip:nth-child(1)').css('opacity', '1');
    console.log('first');
  }

});
