const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const cardName = document.querySelector('.name');
const cardImage = document.querySelector('.card img');
const saveButton = document.querySelector('button');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    cardName.textContent = nameInput.value;
    saveButton.setAttribute('href', cardImage.src);
    saveButton.setAttribute('download', 'greeting-card.png');
});
