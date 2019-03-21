var string = "hello";
var number = 5;
var boolean = true;

var circle = $(".circle");
var word = $(".word");
console.log (circle);
console.log (word);

$(document).on('mousemove' , function(event){ 
  
  var pageX = event.pageX;
  var pageY = event.pageY;
  console.log(pageX + ":" + pageY);
  
  circle.css({
  "opacity": (pageX/window.innerWidth),
  "right": pageX+"px",
  "bottom": pageY +"px",
  });
  
  word.css({
  "left": pageX+"px",
  "top": pageY +"px",
  });
});