$('.middleStrip').css('margin-left', '-100vw');
$('.outerCircle').mouseover(function() {
  $('.outerCircle').css({'width': '505px','height': '505px','box-shadow': '0px 0px 20px 10px #fff'});
  $('.innerCircle').css({'width': '455px','height': '455px'});
  $('.title').css('font-size', '72px');
});
$('.outerCircle').mouseout(function() {
  $('.outerCircle').css({'width': '500px','height': '500px','box-shadow': '0px 0px 5px 3px #fff'});
  $('.innerCircle').css({'width': '450px','height': '450px'});
  $('.title').css('font-size', '69px');
});
$('.outerCircle').mousedown(function() {
  $('.outerCircle').css({'width': '500px','height': '500px','box-shadow': '0px 0px 0px 0px #fff'});
  $('.innerCircle').css({'width': '450px','height': '450px'});
  $('.title').css('font-size', '69px');
});
$('.outerCircle').mouseup(function() {
  $('.outerCircle').css({'width': '505px','height': '505px','box-shadow': '0px 0px 20px 10px #fff'});
  $('.innerCircle').css({'width': '455px','height': '455px'});
  $('.title').css('font-size', '72px');
  $('html').animate({scrollTop: $(window).height()}, 500);
});
// $('button').mousedown(function() {
//   $(this).css('margin-top', '10px');
//   $(this).siblings('.buttonShadow').css('height', '45px');
// })
// $('button').mouseup(function() {
//   $(this).css('margin-top', '5px');
//   $(this).siblings('.buttonShadow').css('height', '50px');
// })
let scrollTop = 0;
$(window).scroll(function(){
  // console.log($(window).scrollTop());
  scrollTop = $(window).scrollTop();
  if (scrollTop > $(window).height()/9*8) {
    moveStrip(0,0,0);
  }
  else if (scrollTop > $(window).height()/9*5) {
    moveStrip(100,0,0)
  }
  else if (scrollTop > $(window).height()/9*2) {
    moveStrip(100,100,0)
  }
  else {
    moveStrip(100,100,100)
  }
});
function moveStrip(x,y,z) {
  $('.middleContainer .middleStrip:nth-child(3)').css('margin-left', '-' + x + 'vw');
  $('.middleContainer .middleStrip:nth-child(2)').css('margin-left', '-' + y + 'vw');
  $('.middleContainer .middleStrip:nth-child(1)').css('margin-left', '-' + z + 'vw');
}
