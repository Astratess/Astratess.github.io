$('.btn-moon').on('click', function(event){
	$('.hero__image').toggleClass('img-light-mode')
}) 

let mode = localStorage.getItem('mode')

if (mode == 'light') {
	$('.hero__image').toggleClass('img-light-mode')
}
