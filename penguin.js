

$(document).mousemove(function(e){
  let x = e.pageX - ($(window).width()/2);
  let y = $(window).height() - e.pageY - ($(window).height()/2 + 138);
  // console.log("X Axis : " + x + " Y Axis : " + y);
  let a = (Math.atan2(y, x) * 180 / Math.PI + 180);
  if (a >= 270) {
    a += 270;
  }
  else {
    a -= 90;
  }
  // console.log(a);

  // console.log(a + ' degrees');
  x = Math.round(7 * Math.sin(a  * Math.PI / 180.0));
  y = Math.round(7 * Math.cos(a  * Math.PI / 180.0));
  // console.log("X: " + x);
  console.log("Y: " + y);
  $('.pupil').css('margin-left', (x + 12)+ 'px');
  $('.pupil').css('margin-top', (y + 12)+ 'px');
});
