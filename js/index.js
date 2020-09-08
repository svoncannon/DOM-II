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
    event.target.style.background = '#A41E1F';
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
let navAnchors = document.querySelectorAll('.nav-link');

navAnchors[0].addEventListener('mouseenter', event => {
    event.target.textContent = 'Streets';
    event.target.style.color = '#78C165';
    zombieStyling();
    navAnchors.forEach(atr => {
        if (atr != navAnchors[0]) {
            atr.style.color = '#DE6C6B';
        }
    });
});

navAnchors[0].addEventListener('mouseleave', event => {
    event.target.textContent = 'Home';
    defaultStyling();
});

navAnchors[0].addEventListener('focus', event => {
    event.target.textContent = 'Brains';
});

navAnchors[1].addEventListener('mouseenter', event => {
    event.target.textContent = 'Undead';
    event.target.style.color = '#78C165';
    zombieStyling();
    navAnchors.forEach(atr => {
        if (atr != navAnchors[1]) {
             atr.style.color = '#DE6C6B'
        }
    });
});

navAnchors[1].addEventListener('mouseleave', event => {
    event.target.textContent = 'About Us';
    defaultStyling();
});

navAnchors[2].addEventListener('mouseenter', event => {
    event.target.textContent = 'Vlog';
    event.target.style.color = '#78C165';
    zombieStyling();
    navAnchors.forEach(atr => {
        if (atr != navAnchors[2]) {
            atr.style.color = '#DE6C6B';
        }
    });
});
navAnchors[2].addEventListener('mouseleave', event => {
    event.target.textContent = 'Blog';
    defaultStyling();
});

navAnchors[3].addEventListener('mouseenter', event => {
    event.target.textContent = "Terms and Conditions";
    event.target.style.color = '#78C165';
    zombieStyling();
    navAnchors.forEach(atr => {
        if (atr != navAnchors[3]) {
            atr.style.color = '#DE6C6B';
        }
    });
});
navAnchors[3].addEventListener('mouseleave', event => {
    event.target.textContent = 'Contact';
    defaultStyling();
});

navAnchors.forEach(atr => {
    atr.addEventListener('click', event => {
        event.preventDefault();
        event.stopPropagation();
    });
});
/*===================== INTRO =============*/

// Image
let bus = document.querySelector(".intro img");

bus.addEventListener("mouseenter", event => {
  event.target.setAttribute("src", "https://www.straight.com/files/v3/styles/gs_large/public/2015/01/shutterstock_221173951.jpg?itok=SbubDx5m");
  zombieStyling();
  navAnchorsZombie();
});
bus.addEventListener("mouseleave", event => {
  event.target.setAttribute("src", 'https://fun-bus-travel-agency.netlify.app/img/fun-bus.jpg');
  defaultStyling();
});


// h2
let introHeading = document.querySelector('.intro h2');

introHeading.addEventListener('mouseenter', event => {
    event.target.textContent = 'You Are NOT Welcome Here!';
    zombieStyling();
    navAnchorsZombie();
});
introHeading.addEventListener('mouseleave', event => {
    event.target.textContent = 'Welcome To Fun Bus!';
    defaultStyling();
});
// Paragraph
let introParagraph = document.querySelector('.intro p');

introParagraph.addEventListener('mouseenter', event => {
    event.target.textContent = 'Zombie ipsum brains reversus ab cerebellum viral inferno, brein nam rick mend grimes malum cerveau cerebro. De carne cerebro lumbering animata cervello corpora quaeritis. Summus thalamus brains sit​​, morbo basal ganglia vel maleficia?';
    zombieStyling();
    navAnchorsZombie();
});
introParagraph.addEventListener('mouseleave', event => {
    event.target.textContent = 'Traveling expedition modern, clean webdesign blogger clean website theme website modern. Design pretty design, travelblogger adventure WordPress wanderlust theme blogger website expedition theme travelblogger. Adventure fun traveler pretty design website expedition.';
    defaultStyling();
});

/*============== MAIN CONTENT ===================*/

/*======= Top ========*/

// h2
let topHeading = document.querySelectorAll('.content-section h2');

topHeading[0].addEventListener('mouseenter', event => {
    event.target.textContent = 'Get Out!';
    zombieStyling();
    navAnchorsZombie();
});
topHeading[0].addEventListener('mouseleave', event => {
    event.target.textContent = "Let's Go!";
    defaultStyling();
});
topHeading[1].addEventListener('mouseenter', event => {
    event.target.textContent = 'Murder Awaits if You Stay';
    zombieStyling();
    navAnchorsZombie();
});
topHeading[1].addEventListener('mouseleave', event => {
    event.target.textContent = 'Adventure Awaits';
    defaultStyling();
});

// Paragraphs
let topParagraphs = document.querySelectorAll('.content-section p');

topParagraphs.forEach(atr => {
    if (atr === topParagraphs[0] || atr === topParagraphs[2]) {
        atr.addEventListener('mouseenter', event => {
            event.target.textContent = " Hi brains mindless mortuis limbic cortex soulless creaturas optic nerve, imo evil braaiinns stalking monstra hypothalamus adventus resi hippocampus dentevil vultus brain comedat cerebella pitiutary gland viventium.";
            zombieStyling();
            navAnchorsZombie();
        });
        atr.addEventListener('mouseleave', event => {
            event.target.textContent = "Adventure webdesign pretty design design, excursion cute WordPress blogger design webdesign adventure. Pretty simple traveling fun WordPress wanderlust darn simple organized.";
            defaultStyling();
        });
    }else {
        atr.addEventListener('mouseenter', event => {
            event.target.textContent = 'De braaaiiiins apocalypsi gorger omero prefrontal cortex undead survivor fornix dictum mauris.The medulla voodoo sacerdos locus coeruleus flesh eater, lateral geniculate nucleus suscitat mortuos braaaains comedere carnem superior colliculus virus';
            zombieStyling();
            navAnchorsZombie();
        });
        atr.addEventListener('mouseleave', event => {
            event.target.textContent =  "Expedition colorful design simple excursion blogger blogger design WordPress design, design organized website theme.";
            defaultStyling();
        });
    }
});
// Images
let topImages = document.querySelectorAll('.img-content img');

topImages[0].addEventListener('mouseenter', event => {
    event.target.setAttribute('src', 'https://arc-anglerfish-arc2-prod-advancelocal.s3.amazonaws.com/public/ZAWPKQQGYZBPPLEVL5CVNUOGAY.jpg');
    zombieStyling();
    navAnchorsZombie();
});
topImages[0].addEventListener('mouseleave', event => {
    event.target.setAttribute('src', 'https://fun-bus-travel-agency.netlify.app/img/adventure.jpg');
    defaultStyling();
});

topImages[1].addEventListener('mouseenter', event => {
    event.target.setAttribute('src', 'https://i.guim.co.uk/img/media/605964dd561b2c3ce53deca5d6e976a9fe58e0a6/0_225_3600_2159/master/3600.jpg?width=620&quality=45&auto=format&fit=max&dpr=2&s=03d5c6f30ce16406b65357114a8dd577');
    zombieStyling();
    navAnchorsZombie();
});
topImages[1].addEventListener('mouseleave', event => {
    event.target.setAttribute('src', 'https://fun-bus-travel-agency.netlify.app/img/fun.jpg');
    defaultStyling();
});
topImages[1].addEventListener('dblclick', event => {
    window.alert("You're silly!");
});
/*======== Middle =======*/

// h2
let destinationHeading = document.querySelector('.content-destination h2');

destinationHeading.addEventListener('mouseenter', event => {
    event.target.textContent = 'Leave Immediately!';
    zombieStyling();
    navAnchorsZombie();
});
destinationHeading.addEventListener('mouseleave', event => {
    event.target.textContent = "Pick Your Destination";
    defaultStyling();
});

// Paragraph
let destinationParagraph = document.querySelector('.content-destination p');

destinationParagraph.addEventListener('mouseenter', event => {
    event.target.textContent = 'Zonbi cerebellum tattered for brein solum oculi cerveau eorum defunctis cerebro go lum cerebro. Nescio brains an Undead cervello zombies. Sicut thalamus malus putrid brains voodoo horror.';
    zombieStyling();
    navAnchorsZombie();
});
destinationParagraph.addEventListener('mouseleave', event => {
    event.target.textContent = 'Expedition excursion design darn excursion fun, clean simple organized WordPress Travel colorful webdesign. Traveler blogger website design expedition clean excursion traveling.';
    defaultStyling();
});
// Image
let destinationImage = document.querySelector('.content-destination img');

destinationImage.addEventListener('mouseenter', event => {
    event.target.setAttribute('src', 'https://boatific.com/wp-content/uploads/2018/10/1-z-1280x640.jpg');
    zombieStyling();
    navAnchorsZombie();
});
destinationImage.addEventListener('mouseleave', event => {
    event.target.setAttribute('src', 'https://fun-bus-travel-agency.netlify.app/img/destination.jpg');
    defaultStyling();
});
/*============ Bottom ===========*/

// h4
let pickHeadings = document.querySelectorAll('.content-pick h4');

pickHeadings[0].addEventListener('mouseenter', event => {
    event.target.textContent = 'I Will Look For You';
    zombieStyling();
    navAnchorsZombie();
});
pickHeadings[0].addEventListener('mouseleave', event => {
    event.target.textContent = 'Fun In The Sun';
    defaultStyling();
});
pickHeadings[1].addEventListener('mouseenter', event => {
    event.target.textContent = 'I Will Find You';
    zombieStyling();
    navAnchorsZombie();
});
pickHeadings[1].addEventListener('mouseleave', event => {
    event.target.textContent = 'Mountain Excursion';
    defaultStyling();
});
pickHeadings[2].addEventListener('mouseeneter', event => {
    event.target.textContent = 'And I Will Kill You';
    zombieStyling();
    navAnchorsZombie();
});
pickHeadings[2].addEventListener('mouseleave', event => {
    event.target.textContent = 'Island Getaway';
    defaultStyling();
});

// Paragraphs
let pickParagraphs = document.querySelectorAll('.content-pick p');

pickParagraphs.forEach(atr => {
    atr.addEventListener('mouseenter', event =>{
        event.target.textContent = 'Zonbi cerebellum tattered for brein solum oculi cerveau eorum defunctis cerebro go lum cerebro. Nescio brains an Undead cervello zombies. Sicut thalamus malus putrid brains voodoo horror.';
        zombieStyling();
        navAnchorsZombie();
    });
    atr.addEventListener('mouseleave', event => {
        event.target.textContent = 'Expedition excursion design excursion fun, clean simple organized WordPress Travel colorful webdesign. Traveler blogger website design expedition clean excursion traveling.';
        defaultStyling();
    });
});
// Buttons
let pickButtons = document.querySelectorAll('.content-pick .btn');

pickButtons.forEach(atr => {
    atr.addEventListener('mouseenter', event => {
        zombieStyling();
        navAnchorsZombie();
        event.target.style.color = '#DE6C6B';
        event.target.style.background = '#78C165';
        event.target.style.borderColor = '#DE6C6B';
        event.target.textContent = 'Braaainns!!';
    });

    atr.addEventListener('mouseleave', event => {
        defaultStyling();
        event.target.style.removeProperty('background-color');
        event.target.textContent = 'Sign Me Up!';
    });
});
/*=========== Footer ==============*/

// Paragraph
let footerParagraph = document.querySelector('footer p');

footerParagraph.addEventListener('mouseenter', event => {
    event.target.textContent = 'Copyright Brains 0000';
    zombieStyling();
    navAnchorsZombie();
    event.target.style.color = '#78C165';
});
footerParagraph.addEventListener('mouseleave', event => {
    event.target.textContent = 'Copyright Fun Bus 2020';
    defaultStyling();
});

