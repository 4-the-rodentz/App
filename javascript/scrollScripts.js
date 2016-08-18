// This file is just to scroll the logo out of the screen
// Create cross browser requestAnimationFrame method:
window.requestAnimationFrame = window.requestAnimationFrame
    || window.mozRequestAnimationFrame
    || window.webkitRequestAnimationFrame
    || window.msRequestAnimationFrame
    || function(f){setTimeout(f, 1000/60)};

var logo = document.getElementById('logo');
var tag =  document.getElementById('tagLine');

function parallaxbubbles(){
    var scrolltop = window.pageYOffset;
    logo.style.top = -scrolltop * .6 + 'px';

}
window.addEventListener('scroll', function(){ // on page scroll
    requestAnimationFrame(parallaxbubbles); // call parallaxbubbles() on next available screen paint
}, false);