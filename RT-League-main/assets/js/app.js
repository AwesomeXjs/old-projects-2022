
let scroll = window.scrollY
const aboutMeButton = document.querySelector('.about__me-btn-arrow')
const aboutMeContent = document.querySelector('.about__me-inner')
const aboutMeClickBtn = document.querySelector('.about__me-btn')

const recentWorkBtn = document.querySelector('.recent__work-btn-arrow')

window.addEventListener('scroll', function() {
	if(scrollY > 300) {
		aboutMeContent.classList.add('active__about-me__slide')
		aboutMeButton.classList.add('active-about-btn')}
}) 

window.addEventListener('scroll', function() {
	if(scrollY > 800) {
		recentWorkBtn.classList.add('recent__work__active-btn')}
	 
}) 


//UI-design-slider
const uiDesignBtn = document.querySelector('.UI__designs-item-text')
const uiDesignArrow = document.querySelector('.UI__designs-item-text-arrow')
const uiDesignContent = document.querySelector('.UI__designs-item-content')
const uiDesignText = document.querySelector('.UI__designs-item-content-text')

uiDesignBtn.addEventListener('click', function() {
	uiDesignArrow.classList.toggle('active-ui-des-btn')
	uiDesignContent.classList.toggle('UI__designs-item-content-active')
	uiDesignText.classList.toggle('UI__designs-item-content-text-active')
})


const uiDesignBtn2 = document.querySelector('.UI__designs-item-text2')
const uiDesignArrow2 = document.querySelector('.UI__designs-item-text-arrow2')
const uiDesignContent2 = document.querySelector('.UI__designs-item-content2')
const uiDesignText2 = document.querySelector('.UI__designs-item-content-text2')

uiDesignBtn2.addEventListener('click', function() {
	uiDesignArrow2.classList.toggle('active-ui-des-btn')
	uiDesignContent2.classList.toggle('UI__designs-item-content-active')
	uiDesignText2.classList.toggle('UI__designs-item-content-text-active')
})

const uiDesignBtn3 = document.querySelector('.UI__designs-item-text3')
const uiDesignArrow3 = document.querySelector('.UI__designs-item-text-arrow3')
const uiDesignContent3 = document.querySelector('.UI__designs-item-content3')
const uiDesignText3 = document.querySelector('.UI__designs-item-content-text3')

uiDesignBtn3.addEventListener('click', function() {
	uiDesignArrow3.classList.toggle('active-ui-des-btn')
	uiDesignContent3.classList.toggle('UI__designs-item-content-active')
	uiDesignText3.classList.toggle('UI__designs-item-content-text-active')
})

const uiDesignBtn4 = document.querySelector('.UI__designs-item-text4')
const uiDesignArrow4 = document.querySelector('.UI__designs-item-text-arrow4')
const uiDesignContent4 = document.querySelector('.UI__designs-item-content4')
const uiDesignText4 = document.querySelector('.UI__designs-item-content-text4')

uiDesignBtn4.addEventListener('click', function() {
	uiDesignArrow4.classList.toggle('active-ui-des-btn')
	uiDesignContent4.classList.toggle('UI__designs-item-content-active')
	uiDesignText4.classList.toggle('UI__designs-item-content-text-active')
})



const uiItem1 = document.querySelector('.UI__designs-item1')
const uiItem2 = document.querySelector('.UI__designs-item2')
const uiItem3 = document.querySelector('.UI__designs-item3')
const uiItem4 = document.querySelector('.UI__designs-item4')


window.addEventListener('scroll', function() {
	if(scrollY > 875) {
		uiItem1.classList.add('UI__designs-item1-active')
		uiItem2.classList.add('UI__designs-item2-active')
	}	
})

window.addEventListener('scroll', function() {
	if(scrollY > 1230) {
		uiItem3.classList.add('UI__designs-item3-active')
		uiItem4.classList.add('UI__designs-item4-active')
	}	
})



const socialItem1 = document.querySelector('.social-item-scroll1')
const socialItem2 = document.querySelector('.social-item-scroll2')
const socialItem3 = document.querySelector('.social-item-scroll3')
window.addEventListener('scroll', function() {
	if(scrollY > 2350) {
		socialItem1.classList.add('social-item-scroll1-active')
		socialItem2.classList.add('social-item-scroll2-active')
		socialItem3.classList.add('social-item-scroll3-active')
	}	
})

const stillHereTitle = document.querySelector('.still-here-text-title')
const stillHereSubTitle = document.querySelector('.still-here-text-subtitle')

window.addEventListener('scroll', function() {
	if(scrollY > 3200) {
		stillHereTitle.classList.add('still-here-text-title-active')
		stillHereSubTitle.classList.add('still-here-text-subtitle-active')
		
	}	
})
const stillItemOne = document.querySelector('.still1')
const stillItemTwo = document.querySelector('.still2')
const stillItemThree = document.querySelector('.still3')
const stillItemFour = document.querySelector('.still4')

window.addEventListener('scroll', function() {
	if(scrollY > 3100) {
		stillItemOne.classList.add('still1-active')
		stillItemTwo.classList.add('still2-active')
		stillItemThree.classList.add('still3-active')
		stillItemFour.classList.add('still4-active')
		
	}	
})



$(document).ready(function() {

	$('.header__nav a').mPageScroll2id()
	$('.desktop-burger-links a').mPageScroll2id()
	$('.mobile-menu-links a').mPageScroll2id()



	$('.slider').slick( {
		arrows: true,
		dots: true,
		adaptiveHeight: true,
		slidesToShow: 1,
		speed: 1000,
		easing: 'ease',
		autoplay: true,
		pauseOnFocus: true,
		pauseOnHover: true,
		pauseOnDotsHover: true,
		waitForAnimate: true,
		centerMode: false,
		variableWidth: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
				
					//переопределение свойств
				}
			}
		]
		// rows: 1,
		
		// fade: true,
		

	});
});
console.log(scrollY);





const sponsorsOne = document.querySelector('.sponsors-1')
const sponsorsTwo = document.querySelector('.sponsors-2')
const sponsorsThree = document.querySelector('.sponsors-3')
const sponsorsFour = document.querySelector('.sponsors-4')

window.addEventListener('scroll', function() {
	if(scrollY > 4300) {
		sponsorsOne.classList.add('sponsors-1-active')
		sponsorsTwo.classList.add('sponsors-2-active')
		sponsorsThree.classList.add('sponsors-3-active')
		sponsorsFour.classList.add('sponsors-4-active')
	}
})


const footerText = document.querySelector('.footer-inner-title')

window.addEventListener('scroll', function() {
	if(scrollY > 4700) {
		footerText.classList.add('footer-inner-title-active')
	}

})

const desktopBurgerIcon = document.querySelector('.desktop-burger-menu-icon')
const desktopBurgerLinks = document.querySelector('.desktop-burger-links')

desktopBurgerIcon.addEventListener('click', function() {
	desktopBurgerLinks.classList.toggle('desktop-burger-links-active')
})





const headerHide = document.querySelector('.header')
const desktopBurgerMenu = document.querySelector('.desktop-burger-wrapper')

window.addEventListener('scroll', function () {
	if(scrollY > 100) {
		headerHide.classList.add('header-active')
		desktopBurgerMenu.classList.add('desktop-burger-wrapper-active')
	} else {
		headerHide.classList.remove('header-active')
		desktopBurgerMenu.classList.remove('desktop-burger-wrapper-active')
	}
})


const mobileBurgerMenuIcon = document.querySelector('.mobile-menu-header-menu')
const mobileBurgerMenuLinks = document.querySelector('.mobile-menu-links')

mobileBurgerMenuIcon.addEventListener('click', function() {
	mobileBurgerMenuLinks.classList.toggle('mobile-menu-links-active')
})

