//declare variables to access DOM elements
let backdrop = document.querySelector('.backdrop');
let modal = document.querySelector('.modal');
let modalNoButton = document.querySelector('.modal__action--negative')
let selectPlanButtons = document.querySelectorAll('.plan button');
let toggleButton = document.querySelector('.toggle-button');
let mobileNav = document.querySelector('.mobile-nav');

//loop through plan buttons to add click event listeners
for (let i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click', function() {
        modal.classList.add('open');
        backdrop.classList.add('open');
    });
}

//declare function to close modal & backdrop
function closeModal() {
    modal.classList.remove('open');
    backdrop.classList.remove('open');
}

//add click event listeners to backdrop
backdrop.addEventListener('click', function() {
    mobileNav.classList.remove('open');
    closeModal();
});

//add click event listener to modal "no" button
modalNoButton.addEventListener('click', closeModal);

//add click event listener to toggle button
toggleButton.addEventListener('click', function() {
    mobileNav.classList.add('open');
    backdrop.classList.add('open');
});