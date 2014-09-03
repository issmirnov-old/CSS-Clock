//write initial data
var clocksize;
if(!clocksize||clocksize=='SIZE')clocksize='600';

var mobile = (/iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()));  
    if (mobile) {  
        clocksize = '350';  
    } 


document.write('<ul id="clock">');
document.write('<li id="sec"></li>');
document.write('<li id="hour"></li>');
document.write('<li id="min"></li>');
document.write('</ul>');

var scaling = "scale(" + clocksize/1000 + ")";
var leftpx = .475*clocksize + "px";//, "left" : leftpx
$("#clock").css({"width" : clocksize, "height" : clocksize, "-moz-transform" : scaling, "-webkit-transform" : scaling});
$("#hour").css({"width" : clocksize/20, "height" : clocksize, "-moz-transform" : scaling, "-webkit-transform" : scaling});
$("#min").css({"width" : clocksize/20, "height" : clocksize, "-moz-transform" : scaling, "-webkit-transform" : scaling});
$("#sec").css({"width" : clocksize/20, "height" : clocksize, "-moz-transform" : scaling, "-webkit-transform" : scaling});

var containerHeight = $('#clockcontainer').height()*(clocksize/1000) + "px";
var containerWidth = $('#clockcontainer').width()*(clocksize/1000) + "px";
$('#clockcontainer').css({width: containerWidth,height: containerHeight,});
var newmargin = -(1000 - clocksize)/2 + "px";
$("#clock").css({"margin-top" : newmargin, "margin-left" : newmargin});


 $(document).ready(function() {
         
              setInterval( function() {
              var seconds = new Date().getSeconds();
              var sdegree = seconds * 6;
              var srotate = "rotate(" + sdegree + "deg)";
              
              $("#sec").css({"-moz-transform" : srotate, "-webkit-transform" : srotate});
                  
              }, 1000 );
              
         
              setInterval( function() {
              var hours = new Date().getHours();
              var mins = new Date().getMinutes();
              var hdegree = hours * 30 + (mins / 2);
              var hrotate = "rotate(" + hdegree + "deg)";
              
              $("#hour").css({"-moz-transform" : hrotate, "-webkit-transform" : hrotate});
                  
              }, 1000 );
        
        
              setInterval( function() {
              var mins = new Date().getMinutes();
              var mdegree = mins * 6;
              var mrotate = "rotate(" + mdegree + "deg)";
              
              $("#min").css({"-moz-transform" : mrotate, "-webkit-transform" : mrotate});
                  
              }, 1000 );
         
        }); 