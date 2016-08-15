var logo = document.getElementById('logo');
var tag =  document.getElementById('tagLine');

function parallaxbubbles(){
    var scrolltop = window.pageYOffset // get number of pixels document has scrolled vertically
    logo.style.top = -scrolltop * .6 + 'px' // move bubble1 at 20% of scroll rate
    tag.style.top = -scrolltop * .8 + 'px' // move bubble1 at 20% of scroll rate

}


window.addEventListener('scroll', function(){ // on page scroll
    requestAnimationFrame(parallaxbubbles) // call parallaxbubbles() on next available screen paint
}, false)