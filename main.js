$(document).ready(function(){

var audio = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/click.mp3')

var audio2 = new Audio('https://s3-us-west-2.amazonaws.com/s.cpdn.io/242518/click.mp3')

$(.txb).mousedown(function(){
audio2.load();
audio2.play();
});

$(.txb).mousedown(function(){
audio.load();
audio.play();
  });
});
