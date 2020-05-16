$(document).ready(function () {
	$('.slider__inner').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		fade: true,
		autoplay: true,
		autoplaySpeed: 3000,
		asNavFor: '.slider-nav'
	});
	$('.slider-nav').slick({
		slidesToScroll: 1,
		asNavFor: '.slider__inner',
		dots: false,
		arrows: false,
		variableWidth: true,
		focusOnSelect: true,
		responsive: [{
				breakpoint: 960,
				settings: {
					variableWidth: false,
					slidesToShow: 5,
					infinite: true,
				}
			},
			{
				breakpoint: 850,
				settings: {
					variableWidth: false,
					slidesToShow: 4,
					infinite: true,
				}
			},
			{
				breakpoint: 760,
				settings: {
					variableWidth: false,
					slidesToShow: 3,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 650,
				settings: {
					variableWidth: false,
					slidesToShow: 2,
					slidesToScroll: 1
				}
			}
		]
	});
	$('.works__inner').slick({
		dots: false,
		arrows: false,
		infinite: true,
		variableWidth: true,
		autoplay: true,
		autoplaySpeed: 1000,
		slidesToScroll: 1,
		responsive: [{
				breakpoint: 960,
				settings: {
					variableWidth: false,
					slidesToShow: 4,
					infinite: true,
				}
			},
			{
				breakpoint: 850,
				settings: {
					variableWidth: false,
					slidesToShow: 3,
					infinite: true,
				}
			},
			{
				breakpoint: 600,
				settings: {
					variableWidth: false,
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 450,
				settings: {
					variableWidth: false,
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	$('.header-btn').on('click', function () {
		$('.header__menu').slideToggle();
	});
	$('.header-btn').on('click', function () {
		$(this).toggleClass('active');
	});

});