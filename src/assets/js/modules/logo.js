let scrollPosition = window.scrollY;
const logoA = document.getElementById('logo-a')
const logo = document.getElementById('logo')

window.addEventListener('scroll', ()=> {
	scrollPosition = window.scrollY;

	if (scrollPosition >= 300 && window.innerWidth > 1023) {
		logo.style.top = "1rem"
		logo.style.left = "6rem"
		logo.style.animation = '4s relocate 1s forwards'
		logo.classList.add('logo')
		logoA.classList.add('logo-a')
		logoA.href = '#hero';
		}

	 else if (scrollPosition == 0){
	 		logo.style.top = "90%"
			logo.style.left = "96%"
			setTimeout(() => {
				logo.style.animation = '2s fade forwards'
				logo.style.top = "-10%"
				logo.style.left = "6rem"
				logo.classList.remove('logo')
				logoA.classList.remove('logo-a')
			, 1000});
	 }
})