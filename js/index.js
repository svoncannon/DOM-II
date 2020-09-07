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
    event.target.style.color = '#78C165';
    logoHeading.style.color = '#DE6C6B';
    navHeader.style.background = '#64484F';
    body.style.background = '#64484F';
    body.style.color = '#DE6C6B';
    footer.style.borderTop = '2px dashed #DE6C6B';
    footer.style.background = '#64484F';
    footerParagraph.style.background = '#64484F';
    footerParagraph.style.color = '#DE6C6B';
}

function navAnchorsZombie() {
    navAnchorsZombie.forEach(atr => {
        atr.style.color = '#DE6C6B';
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
let navHeader = document.querySelector('.main-navigation');

navHeader.addEventListener('click', event => {
    event.target.style.background = '#EEDB80';
});

// Logo Heading
let logoHeading = document.querySelector('.logo-heading');

logoHeading.addEventListener('click', event => {
    event.target.textContent = 'BRAAAAAINS!';
    event.stopPropagation();
});
logoHeading.addEventListener('mouseenter', event => {
    event.target.textContent = 'ZoMbIe BuS';
    zombieStyling();
    navAnchorsZombie();
    event.target.style.color = '#78C165';
});
logoHeading.addEventListener('mouseleave', event => {
    event.target.textContent = 'Fun Bus';
    defaultStyling();
});
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


