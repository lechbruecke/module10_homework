const btn = document.querySelector('.btn')
const durchsichtig = document.getElementById('durchsichtig')
const schwarz = document.getElementById('schwarz')

btn.addEventListener(
	'click',
	function(){
		btn.classList.toggle('btn--zustand');
	}
)

