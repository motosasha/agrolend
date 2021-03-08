'use strict';

$(document).ready(function() {
	let $menuTrigger = $('.js-menu-trigger, .page__darker');
	$menuTrigger.click(function () {
		$('body').toggleClass('nav-open')
	});

	let cbpAnimatedHeader = (function() {
		let docElem = document.documentElement,
			header = document.querySelector( '.page__header' ),
			didScroll = false,
			changeHeaderOn = 200;
		function init() {
			window.addEventListener( 'scroll', function( event ) {
				if( !didScroll ) {
					didScroll = true;
					setTimeout( scrollPage, 250 );
				}
			}, false );
		}
		function scrollPage() {
			let sy = scrollY();
			if ( sy >= changeHeaderOn ) {
				header.classList.add('page__header_bg');
			}
			else {
				header.classList.remove('page__header_bg');
			}
			didScroll = false;
		}
		function scrollY() {
			return window.pageYOffset || docElem.scrollTop;
		}
		init();
	})();

	const sliderYield = new Swiper('.production__slider_yield', {
		grabCursor: true,
		navigation: {
			nextEl: '.production__slider-button_next.production__slider-button_yield',
			prevEl: '.production__slider-button_prev.production__slider-button_yield',
		},
		slidesPerView: 1,
		spaceBetween: 32,
		breakpoints: {
			992: {
				slidesPerView: 2,
				spaceBetween: 32,
			},
			1336: {
				slidesPerView: 3,
				spaceBetween: 32,
			},
		},
		observer: true,
		observeParents: true
	});
	const sliderHealth = new Swiper('.production__slider_health', {
		grabCursor: true,
		navigation: {
			nextEl: '.production__slider-button_next.production__slider-button_health',
			prevEl: '.production__slider-button_prev.production__slider-button_health',
		},
		slidesPerView: 1,
		spaceBetween: 32,
		breakpoints: {
			992: {
				slidesPerView: 2,
				spaceBetween: 32,
			},
			1336: {
				slidesPerView: 3,
				spaceBetween: 32,
			},
		},
		observer: true,
		observeParents: true
	});
	const sliderCalf = new Swiper('.production__slider_calf', {
		grabCursor: true,
		navigation: {
			nextEl: '.production__slider-button_next.production__slider-button_calf',
			prevEl: '.production__slider-button_prev.production__slider-button_calf',
		},
		slidesPerView: 1,
		spaceBetween: 32,
		breakpoints: {
			992: {
				slidesPerView: 2,
				spaceBetween: 32,
			},
			1336: {
				slidesPerView: 3,
				spaceBetween: 32,
			},
		},
		observer: true,
		observeParents: true
	});
	const sliderLicense = new Swiper('.license__slider', {
		grabCursor: true,
		navigation: {
			nextEl: '.license__slider-button_next',
			prevEl: '.license__slider-button_prev',
		},
		slidesPerView: 1,
		spaceBetween: 16,
		breakpoints: {
			768: {
				slidesPerView: 2,
				spaceBetween: 16,
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 16,
			},
		}
	});

	let tabLinks = document.querySelectorAll('.production__caption-item');
	let tabContent = document.querySelectorAll('.production__tabcontent');
	tabLinks.forEach(function(el) {
		el.addEventListener("click", openTabs);
	});
	function openTabs(el) {
		let btnTarget = el.currentTarget;
		let target = btnTarget.dataset.target;
		tabContent.forEach(function(el) {
			el.classList.remove('production__tabcontent_active');
		});
		tabLinks.forEach(function(el) {
			el.classList.remove('production__caption-item_active');
		});
		document.querySelector("#" + target).classList.add('production__tabcontent_active');
		btnTarget.classList.add('production__caption-item_active');
	}

	$('input[type="tel"]').mask("+7 (999) 999-99-99");

	$('.popup-img').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom',
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300
		}
	});

	$('.faq__collapse-header').click(function (){
		$('.faq__collapse-item').slideUp();
		if($(this).hasClass('active')){
			$(this).next().slideUp();
			$(this).removeClass('active');
		}
		else{
			$(this).next().slideDown();
			$('.faq__collapse-header').removeClass('active');
			$(this).addClass('active');
		}
	});

	$('body').magnificPopup({
		delegate: '.js-popup',
		fixedBgPos: true,
		fixedContentPos: true,
		mainClass: 'mfp-fade',
		midClick: true,
		overflowY: 'auto',
		preloader: false,
		removalDelay: 300,
		type: 'inline',
	});

	$('.header a.nav__link').on('click', function(event) {
		if (this.hash !== "") {
			event.preventDefault();
			let hash = this.hash;
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 800, function(){
				window.location.hash = hash;
			});
		}
	});
	$('.sidenav a.nav__link').on('click', function(event) {
		if (this.hash !== "") {
			event.preventDefault();
			let hash = this.hash;
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 800, function(){
				window.location.hash = hash;
			});
		}
		$('body').toggleClass('nav-open');
	});
});
