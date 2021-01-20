; (function () {
	// carousel
	$(document).ready(function () {
		$('.slider').slick({
			slidesToShow: 3,
			focusOnSelect: true,
			swipeToSlide: true,
			infinite: false,
			arrows: true,
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
})();
