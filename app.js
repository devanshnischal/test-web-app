const button = document.getElementById('demoButton');
const message = document.getElementById('message');
const form = document.getElementById('nameForm');
const nameInput = document.getElementById('nameInput');
const greeting = document.getElementById('greeting');

button?.addEventListener('click', () => {
  message.textContent = 'The button works!';
});

form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = nameInput.value.trim();
  greeting.textContent = name
    ? `Hello, ${name}!` 
    : 'Please enter your name.';
});
