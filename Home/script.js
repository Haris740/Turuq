// get DOM elements
const header = document.getElementById('header');
const nav = document.getElementById('nav');
const content = document.querySelectorAll('.content');
const articleArea = document.querySelector('.article-area');
const articleContent = document.getElementById('article-content');
const shareButton = document.querySelector('.fa-share');
const sharePost = document.querySelector('.share-post');
const posts = document.querySelectorAll('.post');
const menuBtn = document.querySelector('.icon');

// variables
var prevScrollpos = window.pageYOffset;
var height = window.innerHeight;

// Post Content
var postContent = "ഫര്‍ഹ എന്ന അറബി വാക്കിനര്‍ഥം സന്തോഷമെന്നാണ്.അറബി പെണ്‍കുട്ടികളില്‍, പ്രത്യേകിച്ചും ഫലസ്തീനികളില്‍ പ്രചാരത്തിലുള്ള പേര് കൂടിയാണ് ഫര്‍ഹ.അധിനിവേശവും ആക്രമണവും സ്വൈര്യജീവിതത്തിന്‍റെ നിറം കെടുത്തിയൊരു ജനത ഏറെ കൊതിക്കുന്നൊരു അമൂര്‍ത്തസംജ്ഞയെ മക്കള്‍ക്ക് പേരായി നല്‍കുന്നതില്‍ അതിശയിക്കാനൊന്നുമില്ല.ദാരീന്‍ ജെ.സല്ലാം സംവിധാനം ചെയ്ത ഫര്‍ഹ എന്ന ജോര്‍ദാനീ സിനിമ കാണുമ്പോള്‍ ഏതൊരാളുടെയും ഉള്ളില്‍ കൊളുത്തുന്നത് ഈ പേരും അതിന്റെ അര്‍ഥാനര്‍ഥങ്ങളുമായിരിക്കും.പോയനൂറ്റാണ്ടിലെ നാല്‍പ്പതുകളില്‍ ജീവിച്ച ഫര്‍ഹ എന്നൊരു പതിനാലുകാരി ഫലസ്തീനിയുടെ കഥയാണ് സിനിമയുടെ ഇതിവൃത്തം.പരസഹസ്രം ഫലസ്തീനികളെ ഭവനരാഹിത്യത്തിലേക്കും അഭയാര്‍ഥിത്വത്തിലേക്കും തള്ളിവിട്ട് ബ്രിട്ടീഷ് സഹായത്തോടെ ഇസ്രയേല്‍ നടപ്പിലാക്കിയ നക്ബയുടെ നേര്‍ക്കാഴ്ചയാണ് സിനിമ അനാവരണം ചെയ്യുന്നത്. ഫലസ്തീനിന്റെ പ്രകൃതി സൗന്ദര്യവും തദ്ദേശീയരുടെ സ്വൈര്യജീവിതവും കാണിച്ചുകൊണ്ടാണ് സിനിമ തുടങ്ങുന്നത്.അത്തിപ്പഴവും വെള്ളവും ശേഖരിക്കുന്ന പെണ്‍കുട്ടികള്‍, നോവല്‍ വായിച്ചിരിക്കുന്ന ഫര്‍ഹ, പള്ളിക്കൂടത്തിലെ കൊച്ചുകുട്ടികളുടെ വികൃതികള്‍, ആഘോഷം പോലെയുള്ള കല്യാണരാവ് എന്നിങ്ങനെ സന്തോഷത്തിന്റെ ഷോട്ടുകള്‍ കോര്‍ത്തിണക്കി നീളുന്ന പ്രാരംഭ സീനുകളില്‍ ഫര്‍ഹയുടെ ഉപരിപഠന സ്വപ്നങ്ങള്‍ തെളിഞ്ഞ് നില്‍ക്കുന്നു.ഉറ്റതോഴിയും പട്ടണത്തിലെ സ്ഥിരതാമസക്കാരിയും താരതമ്യേന പരിഷ്‌കാരിയുമായ അമ്മാവന്റെ മകള്‍ ഫരീദയാണ് അവളുടെ പ്രചോദനം.നാട്ടുകാരണവരായ പിതാവിന് കഴിവതും വേഗം ഫര്‍ഹയെ കെട്ടിച്ച് വിടാനാണ് പദ്ധതിയെങ്കിലും നിരന്തരശ്രമങ്ങള്‍ക്കൊടുവില്‍ അവള്‍ അദ്ദേഹത്തെ തന്റെ വഴിക്ക് നടത്തുന്നുണ്ട്.പട്ടണത്തിലെ സ്‌കൂളില്‍ അഡ്മിഷനെടുത്തതിന്റെ പിറ്റേന്ന് ഫരീദയുമായി സന്തോഷം പങ്കിട്ടിരിക്കുമ്പോഴാണ് പെടുന്നനെ ഗ്രാമം ആക്രമിക്കപ്പെടുന്നത്.അധിനിവേശം തുടങ്ങിയതോടെ ഫര്‍ഹയെ അമ്മാവനോടൊപ്പം പട്ടണത്തിലേക്ക് രക്ഷപ്പെടുത്താന്‍ പിതാവ് ശ്രമിക്കുന്നുണ്ടെങ്കിലും അവളദ്ദേഹത്തെ വിട്ട് പോകാന്‍ തയ്യാറാകുന്നില്ല.ഗത്യന്തരമില്ലാതെ അവളെ വീട്ടിലെ ധാന്യപുരയില്‍ ഒളിപ്പിച്ചിരുത്തി ഗ്രാമത്തെ അധിനിവേശത്തില്‍നിന്ന് രക്ഷിക്കാന്‍ പോവുകയാണ് പിതാവ്. ഇനിയുള്ള രംഗങ്ങളില്‍, ആ ധാന്യപുരയിലെ വാതില്‍പഴുതിലൂടെ ഫര്‍ഹ കാണുന്ന കാഴ്ചയും അവള്‍ കേള്‍ക്കുന്ന ശബ്ദങ്ങളും മാത്രമെ നമുക്ക് സംവിധായിക അനുവദിക്കുന്നൊള്ളൂ.ഉള്ളലിയിക്കാന്‍ അതുതന്നെ ധാരാളം.പുറത്തുനിന്ന് പൂട്ടിയ മുറിക്കകത്തിരുന്ന് അസ്വസ്ഥതയാകുന്ന ഫര്‍ഹ ഓരോ നിമിഷത്തിലും പിതാവിന്റെ തിരിച്ചുവരവിന് കാതോര്‍ത്തിരിക്കുന്നു.എന്നാല്‍, അപരിചതരായൊരു അഭയാര്‍ഥി കുടുംബം വീട്ടിലേക്ക് വരുന്നതാണ് അവള്‍ കാണുന്നത്.പൂര്‍ണ ഗര്‍ഭിണിയായൊരു സ്ത്രീയും അവരുടെ ഭര്‍ത്താവും രണ്ട് പെണ്‍മക്കളും.അവിടെ വെച്ച് അവര്‍ മൂന്നാമത്തെ കുഞ്ഞിന് ജന്മം നല്‍കുന്നു.പേറെടുക്കുകയും പേരിടുകയും ചെയ്യുന്ന ആ പിതാവിന് പക്ഷേ തന്റെ കുടുംബത്തെ നിമിഷനേരത്തേക്ക് മാത്രമെ കാണാന്‍ കഴിയുന്നൊള്ളൂ.അടച്ചിട്ട മുറിയില്‍നിന്ന് പുറത്ത് കടക്കാന്‍ അദ്ദേഹത്തോട് ഫര്‍ഹ സഹായമഭ്യര്‍ഥിക്കുമ്പോഴേക്ക് പുറത്ത് ഇസ്രയേല്‍ സൈന്യം പരിശോധനക്കെത്തുന്നു.ആ കുടുംബം പിടിക്കപ്പെടുകയും ഒന്നടങ്കം വധിക്കപ്പെടുകയും നവജാതശിശു മുറ്റത്ത് ഉപേക്ഷിക്കപ്പെടുകയും ചെയ്യുന്നു.അനുഭവിച്ചുകൊണ്ടിരിക്കുന്ന ഏകാന്തതയുടെയും കണ്ട് കരളലിഞ്ഞ കാഴ്ചയുടെയും മരവിപ്പില്‍ ഫര്‍ഹ വീണ്ടും തനിച്ചാകുന്നു, ആ വേദനയൊടൊപ്പം അവള്‍ ഋതുമതിയാകുന്നു.ധാന്യപുരയിലാകെ പരതുമ്പോള്‍ അവള്‍ക്കൊരു റൈഫിള്‍ കിട്ടുന്നു.അതുപയോഗിച്ച് വാതില്‍ തകര്‍ത്ത് അവള്‍ പുറത്ത് വരുമ്പോള്‍ അവളെ സ്വീകരിക്കാന്‍ വിശന്ന് മരിച്ച മുഹമ്മദെന്ന കുഞ്ഞുപൈതലിന്റെ ഏകാന്തജഡവും വിചനമായ ഗ്രാമവും മാത്രമെയൊള്ളൂ.ഫരീദയോടൊപ്പം തമാശപറഞ്ഞിരിക്കാറുണ്ടായിരുന്ന ഊഞ്ഞാലും, അത്തിപ്പഴ മരങ്ങളും, അരുവിയും അവള്‍ക്ക് അപരിചതമാകുന്നു.നോവ് പടരുന്ന പാദങ്ങളുമായി അവള്‍ നടന്നകലുന്നിടത്ത് സിനിമ അവസാനിക്കുന്നു."
var showContent = postContent.slice(0, 133);
for (let i = 0; i < content.length; i++) {
    content[i].innerText = showContent + "...";
}

// seperate lines
var paras = [];
if (articleContent != undefined) paras = articleContent.innerText.split(/\r?\n/);

for (let i = 0; i < paras.length; i++) {
    var para = document.createElement('div');
    para.classList.add('article-content');
    para.id = 'article-content-' + i;
    para.innerText = paras[i];
    articleArea.appendChild(para);
}

// add images
var images = ['./img/farhacover.jpg', './img/kannikkadal.png'];
if (paras.length > 0) {
    for (let i = 0; i < images.length; i++) {
        var image = document.createElement('img');
        image.src = images[i];
        image.classList.add('article-image');
        image.id = 'article-image-' + i;
        document.getElementById('article-content-' + i * 2).after(image);
    }
}

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
        header.style.background = 'rgba(255, 255, 255, 0.75)';
    } else {
        header.style.color = 'white';
        header.style.background = 'transparent';
    }

    if (paras.length > 0) {
        for (let i = 0; i < paras.length; i++) {
            // get bounding rect
            var arCont = document.getElementById('article-content-' + i);
            var bodyRect = document.body.getBoundingClientRect();
            var ar1Rect = arCont.getBoundingClientRect();

            if (currentScrollPos > ar1Rect.top - bodyRect.top - height + 10) {
                arCont.style.opacity = '1';
                arCont.style.transform = 'translate(0,0)';
            }
        }
        
            for (let i = 0; i < images.length; i++) {
                var img = document.getElementById('article-image-' + i);
                var bodyRect = document.body.getBoundingClientRect();
                var imgRect = img.getBoundingClientRect();
        
                if (currentScrollPos > imgRect.top - bodyRect.top - height + 10) {
                    img.style.opacity = '1';
                    img.style.transform = 'translate(0,0)';
                }
            }
    }

    if (posts.length > 0) {
        for (let i = 0; i < posts.length; i++) {
            var bodyRect = document.body.getBoundingClientRect();
            var imgRect = posts[i].getBoundingClientRect();

            if (currentScrollPos > imgRect.top - bodyRect.top - height + 10) {
                posts[i].style.opacity = '1';
                posts[i].style.transform = 'translate(0,0)';
            }
        }
    }
}

menuBtn.addEventListener('click', function () {
    nav.classList.toggle('opened-menu');
});

posts[0].addEventListener('click', function () {
    window.open('./post.html', '_self');
});
