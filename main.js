; (function () {
	// carousel
	$(document).ready(function () {
		$('.slider').slick({
			slidesToShow: 3,
			focusOnSelect: true,
			swipeToSlide: true,
			infinite: false,
			arrows: true,
			responsive: [
				{
				  breakpoint: 1024,
				  settings: {
					slidesToShow: 2,
				  }
				},
				{
				  breakpoint: 768,
				  settings: {
					arrows: false,
					slidesToShow: 1,
					dots: true,
				  }
				}
			  ]
		});
		$('.product-type li').click(function () {
			$(this).find('button').addClass('active');
			$(this).siblings().find('button').removeClass('active');
			let text = $(this).text().toLowerCase();
			switch (text) {
				case 'ram':
					$('.ram').addClass('open');
					$('.graphics').removeClass('open');
					$('.motherboard').removeClass('open');
					break;
				case 'graphics':
					$('.graphics').addClass('open');
					$('.ram').removeClass('open');
					$('.motherboard').removeClass('open');
					break;
				case 'motherboard':
					$('.motherboard').addClass('open');
					$('.ram').removeClass('open');
					$('.graphics').removeClass('open');
					break;
				default:
					console.error('Error!');
			}
		});
		$('.arrow-down').click(function(event){
			event.preventDefault();
			$(this).toggleClass('arrow-animation');
			$('.anchor').toggleClass('open');
		});
		$('.anchor a').click(function(){
			$('.anchor').removeClass('open');
			$('.arrow-down').removeClass('arrow-animation');
		});
		$('#toggler').click(function() {
			if($(this).prop('checked')){
				$('.rk-navbar').addClass('open');
				$('.rk-navbar > li > a').click(function(e){
					$(this).siblings().toggleClass('open');
				})
				$('.rk-navbar ul > li > a').click(function(){
					$(this).siblings().toggleClass('open');
				})
			} else{
				$('.rk-navbar').removeClass('open');
				$('.rk-navbar > li > a').click(function(e){
					$(this).siblings().toggleClass('open');
				})
				$('.rk-navbar ul > li > a').click(function(){
					$(this).siblings().toggleClass('open');
				})
			}
		})
		
	});
	// main.js
	const locale = document.querySelectorAll('.language li a'); // 語言選擇
	const languageText = document.querySelector('.language .text'); // 語言選擇
	const featureList = document.querySelectorAll('.features a'); // feature 動畫
	const panels = document.querySelectorAll('.panel h5');
	const productObj = {
		ram: [],
		graphics: [],
		motherboard: [],
	}
	locale.forEach(lang => {
		let langNow = languageText.text.trim();
		let langChoose = lang.textContent;
		if (langNow === langChoose) {
			lang.classList.add('active');
		}
	});
	featureList.forEach(feature => {
		feature.addEventListener('click', (e) => {
			e.preventDefault ? e.preventDefault() : (e.returnValue = false);
			feature.classList.toggle('no-after');
			if (feature.classList) {
				feature.nextElementSibling.classList.toggle('active');
			}
		});
	});

	panels.forEach(panel => {
		panel.addEventListener('click', listToggle);
	});

	function listToggle() {
		this.nextElementSibling.classList.toggle('active');
		console.dir(this.nextElementSibling)
	};
	window.addEventListener('scroll', function(e){
		let windowTop = window.scrollY;
		if (windowTop >= 100) {
			$('.title-link').addClass('fixed');
		} else{
			$('.title-link').removeClass('fixed');
		}
	});
})();
