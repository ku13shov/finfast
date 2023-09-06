'use strict'

const themeBtn = document.querySelector('.header__theme-btn')
const burgerBtn = document.querySelector('.header__burger')
const header = document.querySelector('.header')
const headerMenu = document.querySelector('.menu')
const menuCloseBtn = document.querySelector('.menu__close')
const body = document.querySelector('body')
const menuLeftItems = document.querySelectorAll('.menu__left-item')
const menuRightContents = document.querySelectorAll('.menu__right-content')
const customCitySelect = document.querySelector("#city-select");
const realCitySelect = document.querySelector("#city-real-select");
const customPriceSelect = document.querySelector("#price-select");
const realPriceSelect = document.querySelector("#price-real-select");
const filtersWrapper = document.querySelector('.filters__wrapper')
const cardsWrapper = document.querySelector('.cards__wrapper')
const likes = document.querySelectorAll('.cards__item-likes .like')
const paginationWrapper = document.querySelector('.pagination__wrapper')
const requestFormLabel = document.querySelector('.request__form-label')

themeBtn.addEventListener('click', () => {
    if (themeBtn.classList.contains('dark')) {
        themeBtn.classList.remove('dark')
        themeBtn.classList.add('light')
        themeBtn.textContent = 'Light'
    } else {
        themeBtn.classList.remove('light')
        themeBtn.classList.add('dark')
        themeBtn.textContent = 'Dark'
    }
})

burgerBtn.addEventListener('click', () => {
    if (body.style.overflow === 'hidden') {
        body.style.overflow = 'unset'
    } else {
        body.style.overflow = 'hidden'
    }
   
    headerMenu.classList.toggle('active')
    header.classList.toggle('active')
})

menuCloseBtn.addEventListener('click', () => {
    body.style.overflow = 'unset'
    headerMenu.classList.toggle('active')
    header.classList.toggle('active')
})

menuLeftItems.forEach((item, i) => item.addEventListener('click', () => {
    menuLeftItems.forEach(item => item.classList.remove('active'))
    item.classList.add('active')

    menuRightContents.forEach(content => content.classList.remove('active'))
    menuRightContents[i].classList.add('active')
}))

customCitySelect.addEventListener("click", function () {
    realCitySelect.click();
});

realCitySelect.addEventListener("change", function () {
    const selectedOption = realCitySelect.options[realCitySelect.selectedIndex].text;
    customCitySelect.innerHTML = `<span>${selectedOption}</span>`;
});

customPriceSelect.addEventListener("click", function () {
    realPriceSelect.click();
});

realPriceSelect.addEventListener("change", function () {
    const selectedOption = realPriceSelect.options[realPriceSelect.selectedIndex].text;
    customPriceSelect.innerHTML = `<span>${selectedOption}</span>`;
});

filtersWrapper.addEventListener('click', (e) => {
    if (e.target.closest('.filters__item-box')) {
        e.target.closest('.filters__item-box').classList.toggle('active')
    }
})

const swiper = new Swiper('.swiper', {
    loop: true,

    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
    },
});

cardsWrapper.addEventListener('click', (e) => {
    const heart = e.target.closest('.cards__item-heart')

    if (heart) {
        heart.classList.toggle('active')
    }
})

likes.forEach(like => like.addEventListener('click', () => {
    likes.forEach(like => like.classList.remove('active'))
    like.classList.add('active')
}))

paginationWrapper.addEventListener('click', (e) => {
    const paginationItem = e.target.closest('.pagination__item')
    const paginationItems = paginationWrapper.querySelectorAll('.pagination__item')

    if (paginationItem) {
        paginationItems.forEach(item => item.classList.remove('active'))
        paginationItem.classList.add('active')
    }
})

requestFormLabel.addEventListener('click', () => {
    requestFormLabel.classList.toggle('active')
})