const input = document.querySelector('input')
const tschat_feld = document.getElementById('tschat')
const btn = document.getElementById('senden')
const geo = document.getElementById('lokation')
let karte = 'https://www.openstreetmap.org/#map=16'

const anschluss_zum_server = new WebSocket('wss://echo-ws-service.herokuapp.com')

anschluss_zum_server.onmessage = function(ereigniss){ // сервер присылает сообщение (отслеживаем момент)
	let antwort = document.createElement('p') //ereigniss это объект, который содержит ответ от сервера
	antwort.classList.add('rechts')
	antwort.innerHTML = ereigniss.data // data - ключ от события
	tschat_feld.appendChild(antwort)
	//ответ лежит в event.data
	console.log(ereigniss);
	console.log(ereigniss.data)
}

btn.addEventListener('click', function(){
	anschluss_zum_server.send(input.value) // отправили на сервер input.value
	let nachricht = document.createElement('p')
	nachricht.innerHTML = input.value
	tschat_feld.appendChild(nachricht)
	input.value = ''
})

geo.addEventListener('click', function(){
	navigator.geolocation.getCurrentPosition(function(meine_position){
		console.log(meine_position);
		let ssyl = `${karte}/${meine_position.coords.latitude}/${meine_position.coords.longitude}`
		let a = document.createElement('a')
		a.classList.add('rechts')
		a.href = ssyl // атрибут
		a.textContent = 'геопозиция'
		a.target = '_blank'
		tschat_feld.appendChild(a)
	})
})