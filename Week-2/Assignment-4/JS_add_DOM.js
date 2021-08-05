const message = document.querySelector('h1.message');
const button = document.querySelector('.button');
const hideBoxDiv = document.querySelector('.hideBox');
message.addEventListener('click', () => {
    message.innerHTML = "Have a Good Time!";
});

button.addEventListener('click', () => {
    hideBoxDiv.style.display = 'block';
});
