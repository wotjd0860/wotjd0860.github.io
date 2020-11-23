// const toggleBtn = document.querySelector('.navbar__toggleBtn');
// const menu = document.querySelector('.navbar__menu');
// const icons = document.querySelector('.navbar__icons');

// toggleBtn.addEventListener('click', () => {
//     menu.classList.toggle('active');
//     icons.classList.toggle('active');
// });

const menu = document.querySelector('.navbar__menu').offsetHeight+16;
const StartLocation = document.getElementById('Start').offsetTop-menu;
const AboutLocation = document.getElementById('About').offsetTop-menu;
const PortpolioLocation = document.getElementById('Portpolio').offsetTop-menu;
const ContactLocation = document.getElementById('Contact').offsetTop-menu;

// let arr = new Array(StartLocation, AboutLocation, PortpolioLocation, ContactLocation);


// for (let i = 0; i < menus.length; i++) {
//     menus[i].addEventListener('click', function() {
//         arr[i].scrollIntoView(true);
//     });
// };


// 위처럼 하면 왜 안되는지 알아보기
document.getElementById('Start_menu').addEventListener('click', function() {
    window.scrollTo({top: StartLocation, behavior:'smooth'});
});

document.getElementById('About_menu').addEventListener('click', function() {
    window.scrollTo({top: AboutLocation, behavior:'smooth'});
});

document.getElementById('Port_menu').addEventListener('click', function() {
    window.scrollTo({top: PortpolioLocation, behavior:'smooth'});
});

document.getElementById('Contact_menu').addEventListener('click', function() {
    window.scrollTo({top: ContactLocation, behavior:'smooth'});
});

document.getElementById('Start_menu2').addEventListener('click', function() {
    window.scrollTo({top: StartLocation, behavior:'smooth'});
});

document.getElementById('About_menu2').addEventListener('click', function() {
    window.scrollTo({top: AboutLocation, behavior:'smooth'});
});

document.getElementById('Port_menu2').addEventListener('click', function() {
    window.scrollTo({top: PortpolioLocation, behavior:'smooth'});
});

document.getElementById('Contact_menu2').addEventListener('click', function() {
    window.scrollTo({top: ContactLocation, behavior:'smooth'});
});