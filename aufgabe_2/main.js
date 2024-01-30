const btn = document.getElementById('btn')

btn.addEventListener(
	'click',
	function(){
		alert(
			`ширина ${window.screen.width}, а высота ${window.screen.height}`
		)
	}
)