// get DOM elements
const header = document.getElementById('header');
const nav = document.getElementById('nav');

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        header.style.top = "0";
    } else {
        header.style.top = "-75px";
    }
    prevScrollpos = currentScrollPos;
}