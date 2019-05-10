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
        modal.style.display = 'block';
        backdrop.style.display = 'block';
    });
}

//declare function to close modal & backdrop
function closeModal() {
    modal.style.display = 'none';
    backdrop.style.display = 'none';
}

//add click event listeners to backdrop
backdrop.addEventListener('click', function() {
    mobileNav.style.display = 'none';
    closeModal();
});

//add click event listener to modal "no" button
modalNoButton.addEventListener('click', closeModal);

//add click event listener to toggle button
toggleButton.addEventListener('click', function() {
    mobileNav.style.display = 'block';
    backdrop.style.display = 'block';
});