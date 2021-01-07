const locale = document.querySelectorAll('.language ul li a');
const languageText = document.querySelector('.language .text');

let langNow = languageText.text.trim();
console.dir(langNow);
locale.forEach(lang => {
	let langChoose = lang.outerText;
	if(langNow === langChoose) {
		lang.classList.add('active');
	}
});














const panels = document.querySelectorAll('.panel h5');

panels.forEach(panel => {
	panel.addEventListener('click', listToggle);
});

function listToggle() {
	this.nextElementSibling.classList.toggle('active');
	console.dir(this.nextElementSibling)
}