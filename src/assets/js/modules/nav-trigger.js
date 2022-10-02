$('.menu').on('click', function(event) {
	event.preventDefault();
	const $this = $(this);
	const $target = $($this.attr('href'));

	$this.children(":first").toggleClass("is-active");
	$target.toggleClass('is-active');	
});