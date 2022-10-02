const modeTrigger = document.querySelector('.btn-moon')
	  heroImg = document.querySelector('.hero__image')
let mode = localStorage.getItem('mode')

if (mode == 'light') {
	document.body.classList.add('light-mode')
}

modeTrigger.addEventListener('click', () => {
	document.body.classList.toggle('light-mode')
	if (document.body.classList.contains('light-mode')) {
		mode = 'light'
		localStorage.setItem('mode', mode)
	} else {
		mode = 'dark'
		localStorage.setItem('mode', mode)
	}
})