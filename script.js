// Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyAKoPmShlNMYKWHwOWHak2k4CoRSXOu0l8",
//     authDomain: "portfolio-responses-b98ca.firebaseapp.com",
//     databaseURL: "https://portfolio-responses-b98ca-default-rtdb.asia-southeast1.firebasedatabase.app/",
//     projectId: "portfolio-responses-b98ca",
//     storageBucket: "portfolio-responses-b98ca.appspot.com",
//     messagingSenderId: "1050821950027",
//     appId: "1:1050821950027:web:05bc5a281e831ab4552bce"
// };

// Initialize Firebase
// firebase.initializeApp(firebaseConfig);

const firebaseConfig = {
    apiKey: "AIzaSyDoqY0sfPvcJSkl9Se8o8CMb-4NfFWlvpE",
    authDomain: "chat-room-86be3.firebaseapp.com",
    databaseURL: "https://chat-room-86be3-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "chat-room-86be3",
    storageBucket: "chat-room-86be3.appspot.com",
    messagingSenderId: "699540162323",
    appId: "1:699540162323:web:6525189a3d3414d096bce6"
};
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

window.scrollTo(0,0);

var menu = document.getElementById('menu');
var menuShow = 0;
var navMenu = document.getElementById('nav-menu');
var contactForm = document.getElementById('contact-form');
var cardSection = document.getElementById('card-section-mobile');
var cardSectionDesktop = document.getElementById('card-section-desktop');
var containerAbout = document.getElementById('container-about');
var containerImage = document.getElementById('container-about-image');
var containerContent = document.getElementById('container-about-content');
var contact = document.getElementById('contact');
var formName = document.getElementById('name');
var formEmail = document.getElementById('email');
var formMsg = document.getElementById('msg');
var aboutLast = document.getElementById('container-about-last');
var totoroCat = document.getElementById('totoro-cat');
var helloWorld = document.getElementById('hello-world');
var openForm = document.getElementById('open-bracket-form');
var closeForm = document.getElementById('close-bracket-form');

const works = [
    {
        title: 'Weather App',
        img: 'url(images/weather.png)',
        link: 'https://amirul-asyraf.github.io/Day14/'
    },

    {
        title: 'Music Player',
        img: 'url(images/music.png)',
        link: 'https://amirul-asyraf.github.io/Day9/'
    },

    {
        title: 'Piano',
        img: 'url(images/piano.png)',
        link: 'https://amirul-asyraf.github.io/Day11/'
    },

    {
        title: 'Image Slider',
        img: 'url(images/slider.png)',
        link: 'https://amirul-asyraf.github.io/Day11/Class%20Exercise/slider.html'
    },

    {
        title: 'Chat Room',
        img: 'url(images/chat.png)',
        link: 'https://amirul-asyraf.github.io/Day13/'
    },
]

window.addEventListener('scroll', onScroll);
function onScroll(evt) {
    if(window.scrollY - 500 >= helloWorld.offsetTop) {
        helloWorld.classList.add('title-grow');
        helloWorld.style.opacity = '1';
    }

    if (window.scrollY - 500 >= containerAbout.offsetTop) {
        containerAbout.classList.add('title-grow');
        containerAbout.style.opacity = '1';
    }

    if (window.scrollY + 250 >= cardSectionDesktop.offsetTop) {
        cardSectionDesktop.classList.add('title-grow');
        cardSectionDesktop.style.opacity = '1';
    }

    if (window.scrollY + 500 >= contact.offsetTop) {
        contact.classList.add('title-grow');
        contact.style.opacity = '1';
        openForm.classList.add('fadeIn-left');
        closeForm.classList.add('fadeIn-right');
    }
}

function showMenu() {
    navMenu.classList.remove('fade-out');
    navMenu.classList.add('fade-in');
    document.querySelector('html').style.overflow = 'hidden';
    // document.querySelector('body').style.overflow = 'hidden';
    navMenu.style.left = '0';
}

function hideMenu() {
    navMenu.classList.remove('fade-in');
    navMenu.classList.add('fade-out');
    document.querySelector('html').style.overflow = 'scroll';
    document.querySelector('html').style.overflowX = 'hidden';
    // document.querySelector('body').style.overflow = 'scroll';
    navMenu.style.left = '100vw';
}

function showForm() {
    contactForm.style.display = 'block';
    contactForm.style.position = "fixed";
    contactForm.classList.remove('fade-out');
    contactForm.classList.add('fade-in');
    document.querySelector('html').style.overflow = 'hidden';
    // document.querySelector('body').style.overflow = 'hidden';
    contactForm.style.left = '0';
}

function hideForm() {
    contactForm.style.position = 'absolute';
    contactForm.classList.remove('fade-in');
    contactForm.classList.add('fade-out');
    document.querySelector('html').style.overflow = 'scroll';
    document.querySelector('html').style.overflowX = 'hidden';
    // document.querySelector('body').style.overflow = 'scroll';
    contactForm.style.left = '100vw';
    setTimeout(function(){ contactForm.style.display = 'none'; }, 800);
}

function sendResponse () {
    if (formName.value !== '' || formEmail.value !== '' || formMsg.value !== '' ) {
        //push the data and store in database
        firebase.database().ref('portfolio').child('response').push({
            name: formName.value,
            email: formEmail.value,
            msg: formMsg.value,
            // time: now.toTimeString().substring(0,8),
            })
    } else {
        alert('Need to type a message!')
    }

    formName.value = '';
    formEmail.value = '';
    formMsg.value = '';
}

showCards();

function showCards() {
    for(i=0; i < works.length; i++) {
        var cardMobile = document.createElement('a');
        cardMobile.classList.add('card-mobile');
        var cardImageMobile = document.createElement('div');
        cardImageMobile.classList.add('card-image-mobile');
        var cardContent = document.createElement('div');
        cardContent.classList.add('card-content');
        var cardTitle = document.createElement('h3');

        cardTitle.innerHTML = works[i].title;
        cardImageMobile.style.backgroundImage = works[i].img;
        cardMobile.href = works[i].link;

        cardContent.append(cardTitle);
        cardMobile.append(cardImageMobile);
        cardMobile.append(cardContent);
        cardSection.append(cardMobile);
    }

    var manyMore = document.createElement('p');
    manyMore.innerHTML = "..and many more on my Github!";
    cardSection.append(manyMore);
}

