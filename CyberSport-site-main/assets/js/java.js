const burgerBtn = document.getElementById('btn')
const menuBurger = document.querySelector('.burger__menu__links')
burgerBtn.addEventListener('click', function() {
    menuBurger.classList.toggle('active__burger')
    burgerBtn.classList.toggle('active__btn')
})

