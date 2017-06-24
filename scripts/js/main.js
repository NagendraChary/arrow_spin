$(document).ready(function(){
console.log("document loaded")
$("#click").unbind("click").bind("click",function(){
		
	spin(340);
});
});

function spin(num) {
  var $myElm = $("#arrow_rotator");

  function rotate(degrees) {
    $myElm.css({
      '-webkit-transform': 'rotate(' + degrees + 'deg)',
      '-moz-transform': 'rotate(' + degrees + 'deg)',
      '-ms-transform': 'rotate(' + degrees + 'deg)',
      'transform': 'rotate(' + degrees + 'deg)'
    });
  }
  $({
    deg: 0
  }).animate({
    deg: num * 3
  }, {
    duration: 3000,
    step: function() {
      var deg = this.deg;
      rotate(deg);
    }
  });
}

spin();