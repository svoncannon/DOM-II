/*==============GLOBAL===================*/

// Variables
let script = document.createElement('script');
script.setAttribute(
  'src',
  'https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TweenMax.min.js'
);
let head = document.querySelector('head');
head.appendChild(script);

let title = document.querySelector('title');
title.textContent = 'Fun Bus Travel Agency';

let allImages = document.querySelectorAll('img');
let body = document.querySelector('body');
let footer = document.querySelector('footer');

let inc = 0;
// Functions
function zombieStyling() {
    event.target.style.color = ' #8A0303';
    logoHeading.style.color = '#C89498';
    navHeader.style.background = '#260703';
    body.style.background = '#260703';
    body.style.color = '#C89498';
    footer.style.borderTop = '2px dashed #C89498';
    footer.style.background = '#260703';
    footerParagraph.style.background = '#260703';
    footerParagraph.style.color = '#C89498';
}

function navAnchorsZombie() {
    navAnchorsZombie.forEach(atr => {
        atr.style.color = '#C89498';
    });
}

function defaultStyling() {
    event.target.style.removeProperty('color');
    logoHeading.style.removeProperty('color');
    navHeader.style.removeProperty('background');
    body.style.removeProperty('background');
    body.style.removeProperty('color');
    navAnchors.forEach(atr => {
        atr.style.removeProperty('color');
    });
    footer.style.removeProperty('border-top');
    footer.style.removeProperty('background');
    footerParagraph.style.removeProperty('background');
    footerParagraph.style.removeProperty('color');
}
// PopUps

window.addEventListener('load', event => {
    window.alert(
        "OMG!!! Hi!! Welcome! How have y-Wait... Ugh, it's you. What do you want? You know what, I don't care, just... Just get out."
    );
});
// can't figure out why this isn't working for sure nvm I needed more code figured it out!!

window.addEventListener("scroll", event => {
    if(inc === 2) {
        window.alert(
            "Okay, you know what? I'm gonna start popping up TWICE now! How about that?!"
        );
    } else if (inc === 3) {
        window.alert("Omggggggggggg just get oooooooooooouuuuuuuut!!!");
    }else if (inc === 4) {
        window.alert("Alright, that's it. I've had enough of you. Goodbye.");
        TweenMax.to(body, 2, {opacity: 0, display: 'none', delay: 0.2});
        inc++;
    }
});

body.addEventListener('keypress', event => {
    window.alert("You're so annoying.");
});
body.addEventListener('wheel', event => {
    inc++;
    if (inc === 1) {
        window.alert(
            "Oh, you're not leaving? Fine. Then I'm just gonna keep popping up every time you scroll!"
        );
    }
});
allImages.forEach(atr => {
    atr.addEventListener('contextmenu',event => {
        window.alert(
            "Yesssssss. Save that photo. There's no malware hidden in it. Nope. None at all."
        );
    });
});

/*=================NAV=====================*/
// Header

// Logo Heading

// Nav Anchors

/*===================== INTRO =============*/

// Image

// h2

// Paragraph

/*============== MAIN CONTENT ===================*/

/*======= Top ========*/

// h2

// Paragraphs

// Images

/*======== Middle =======*/

// h2

// Paragraph

// Image

/*============ Bottom ===========*/

// h4

// Paragraphs

// Buttons

/*=========== Footer ==============*/

// Paragraph


