// get DOM elements
const header = document.getElementById('header');
const nav = document.getElementById('nav');
const articleArea = document.querySelector('.article-area');
const articleContent = document.getElementById('article-content');

// seperate lines
var paras = articleContent.innerText.split(/\r?\n/);

for (let i = 0; i < paras.length; i++) {
    var para = document.createElement('div');
    para.classList.add('article-content');
    para.id = 'article-content-'+i;
    para.innerText = paras[i];
    articleArea.appendChild(para);
}

// add images

var prevScrollpos = window.pageYOffset;
var height = window.innerHeight;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        header.style.top = "0";
    } else {
        header.style.top = "-75px";
    }
    prevScrollpos = currentScrollPos;
    if (currentScrollPos > height) {
        header.style.color = 'black';
    } else {
        header.style.color = 'white';
    }

    for (let i = 0; i < paras.length; i++) {
        // get bounding rect
        const arCont = document.getElementById('article-content-'+i);
        var bodyRect = document.body.getBoundingClientRect();
        var ar1Rect = arCont.getBoundingClientRect();

        if (currentScrollPos > ar1Rect.top - bodyRect.top - height + 10) {
            arCont.style.opacity = '1';
            arCont.style.transform = 'translate(0,0)';
        }
    }
}
