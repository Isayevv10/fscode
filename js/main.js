let contactHeader = document.querySelector('.contact-header');
let checkBoxChanged = document.querySelector('.checkbox-label');

// console.log(contactHeader.textContent);
// console.log(checkBoxChanged.textContent);

let x = window.matchMedia('(max-width: 425px)');
x.addEventListener('change', () => {
    if (x.matches) {
        contactHeader.textContent = "Contact us";
        checkBoxChanged.textContent = 'I want to be aware of future updates';
    }else {
        contactHeader.textContent = "Contact";
        checkBoxChanged.textContent = 'I am here to be aware of future updates';
    }
})


let btnHamurger = document.querySelector('.icon-hamburger');
let menu = document.querySelector('.menu');
let sideMenu = document.querySelector('.side-menu');

btnHamurger.addEventListener('click', onbtnHamburgerClick);
document.addEventListener('click', offbtnHamburgerClick);

function offbtnHamburgerClick(e) {
    if (e.target.className !== 'side-menu' && e.target.className !== 'icon-hamburger') {
        menu.classList.add('hidden'); 
    }
    else {
        menu.classList.remove('hidden');
    }
};

function onbtnHamburgerClick() {
    menu.classList.remove('hidden');
};