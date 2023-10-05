const burgerBtn = document.querySelector('.icons');
const burgerLinks = document.querySelector('.burger__links');

burgerBtn.addEventListener('click', function() {
    burgerLinks.classList.toggle('active__burger');
});