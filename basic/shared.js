//declare variables to access DOM elements
let backdrop = document.querySelector('.backdrop');
let modal = document.querySelector('.modal');
let modalNoButton = document.querySelector('.modal__action--negative')
let selectPlanButtons = document.querySelectorAll('.plan button');

//loop through buttons to add click event listeners
for (let i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click', function() {
        modal.style.display = 'block';
        backdrop.style.display = 'block';
    });
}

//declare function to close modal
function closeModal() {
    modal.style.display = 'none';
    backdrop.style.display = 'none';
}

//add click event listeners to backdrop and modal "no" button
backdrop.addEventListener('click', closeModal);
modalNoButton.addEventListener('click', closeModal);