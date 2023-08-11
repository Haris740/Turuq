const cardContainer = document.getElementsByClassName('card-container');
const image = document.getElementsByClassName('image');
const title = document.getElementsByClassName('title');

let i = 0;

setInterval(() => {
    for (let j = 0; j < cardContainer.length; j++) {
        cardContainer[j].style.opacity = '0.3';
        title[j].style.opacity = '0';
    }
    cardContainer[i % cardContainer.length].style.width = '50%';
    cardContainer[i % cardContainer.length].style.height = '50vh';
    image[i % cardContainer.length].style.height = '50vh';
    image[i % cardContainer.length].style.height = '50vh';
    i++;
    cardContainer[i % cardContainer.length].style.width = '100%';
    cardContainer[i % cardContainer.length].style.height = '100vh';
    image[i % cardContainer.length].style.height = '100vh';
    image[i % cardContainer.length].style.height = '100vh';

    setTimeout(() => {
        for (let j = 0; j < cardContainer.length; j++) {
            cardContainer[j].style.opacity = '0';
            cardContainer[j].style.zIndex = '1';
        }
        cardContainer[i % cardContainer.length].style.zIndex = '2';
        cardContainer[i % cardContainer.length].style.opacity = '1';
    }, 500);
    setTimeout(() => {
        title[i % cardContainer.length].style.opacity = '1';
    }, 1500);
}, 4000);