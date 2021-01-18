;(function () {
	// carousel
	$(document).ready(function(){
		$('.slider').slick({
			slidesToShow: 3,
			slidesToScroll: 3,
			focusOnSelect: true,
			swipeToSlide: true,
		});
	});
	// main.js
	const locale = document.querySelectorAll('.language ul li a'); // 語言選擇
	const languageText = document.querySelector('.language .text'); // 語言選擇
	const featureList = document.querySelectorAll('.features a'); // feature 動畫
	const panels = document.querySelectorAll('.panel h5');

	let langNow = languageText.text.trim();
	locale.forEach(lang => {
		let langChoose = lang.outerText;
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

	function slideToggle(e) {
		e.preventDefault();
		console.log(virtualEl);
	};

	function listToggle() {
		this.nextElementSibling.classList.toggle('active');
		console.dir(this.nextElementSibling)
	}
})();
