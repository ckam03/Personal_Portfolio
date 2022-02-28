const modeSwitch = document.getElementById('switch');
const menuButton = document.getElementById('menuButton');
const projectnavlink = document.getElementById('projectnav');
const aboutnavlink = document.getElementById('aboutnav');
const contactnavlink = document.getElementById('contactnav');
const homenavlink = document.getElementById('homenav');
const menuToggle = document.getElementById('menu-toggle')
const menu = document.getElementById('menuul');
const header = document.getElementById('header');
const terminal = document.querySelector('#terminal');
const logo = document.querySelector('#logo')

const checkMode = () => {
    if (modeSwitch.checked) {   
        darkModeOn();
        localStorage.setItem('toggle', 'enabled');
    }
    else {
        darkModeOff();
        localStorage.removeItem('toggle');
    }
}
modeSwitch.addEventListener('click', checkMode);

let htmlClasses = document.querySelector('html').classList;

const darkModeOn = () => {
    htmlClasses.add('dark');
    localStorage.theme = 'dark';

}

const darkModeOff = () => {
    if (localStorage.theme == 'dark') {
        htmlClasses.remove('dark');
        localStorage.removeItem('theme')
    }
}

if (localStorage.theme == 'dark') {
    if (localStorage.getItem('toggle') === 'enabled') {
        modeSwitch.checked = true;
    }
}
