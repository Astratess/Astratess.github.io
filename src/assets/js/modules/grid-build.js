if (document.querySelector('.widgets')) {
	const widgets = document.querySelectorAll('.widget')
	let gridCols = getComputedStyle(document.querySelector('.widgets')).gridTemplateColumns.split(' ')

	let row = 1;
	let col = 1;

	widgets.forEach(widget => {
		widget.style.gridColumn = `${col}`
		widget.style.gridRow = `${row}`
		col +=2;
  
	if (col > gridCols.length) {
		col = col - gridCols.length
			row++;
		}
	})
}