const slider = document.querySelector('.slider-container');
const cards = document.getElementsByClassName('card');

var left = 0;
var clone;

slide();

function slide() {
    slider.style.left = left + "px";
    setInterval(() => {
        slider.style.transition = '1s ease-in-out';
        left = -cards[0].clientWidth - 10;
        slider.style.left = left + "px";
        clone = cards[0].cloneNode(true);
        slider.appendChild(clone);
        setTimeout(() => {
            slider.style.transition = '';
            slider.style.left = "0px";
            cards[0].remove();
        }, 1000);
    }, 2000);
}