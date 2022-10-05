if (document.querySelector('.clock')) {
	const secondsArrow = document.querySelector('.arrow-seconds')
	const minutesArrow = document.querySelector('.arrow-long')
	const hoursArrow = document.querySelector('.arrow-short')
	const date = new Date();
	let seconds = date.getSeconds()*6;
	let secondsRotate = date.getSeconds()*6;
	let minutes = date.getMinutes()*6;
	let hours = (date.getHours()%12)*30;
	let cogs = document.querySelectorAll('.cog')
	let degrees = [ 45, -90, 25.71, -40, -60, -30, 24, -40, 20]
	let rotation = [ 0, 0, 0, 0, 0, 0, 0, 0, 0]

	rotateArrows()

	/* Maps each cog and rotates it via rotation from rotate aray*/

	function rotateCogs() {
		let position = 0;

		cogs.forEach(cog => {
			cog.style.transform = `rotate(${rotation[position]}deg)`
			position++;
		})
	}

	/*Calculates rotation by mapping and summing arrays*/

	function calcRotation() {
		for (let i = 0; i < degrees.length; i++) {
			rotation[i] += degrees[i]
		}
		
		return rotation
	}

	/* Calculates and rotates each arrow*/

	function rotateArrows() {

		if (seconds >= 360) {
			seconds = 0
			minutes += 6;
		}

		if (minutes >= 360) {
			minutes = 0
			hours += 30;
		}

		seconds += 6
		secondsRotate += 6
		secondsArrow.style.transform = `rotate(${secondsRotate}deg)`
		minutesArrow.style.transform = `rotate(${minutes}deg)`
		hoursArrow.style.transform = `rotate(${hours}deg)`
	}

	/* Triggering the rest */

	setInterval(function () {
		calcRotation()
		rotateCogs()
		rotateArrows()
	}, 1000);

	/* Adds transition to the transform of each piece on load*/

	setTimeout(function () {
		cogs.forEach(cog => {
			cog.classList.add('clock-transition')
		})

		secondsArrow.classList.add('clock-transition')
		minutesArrow.classList.add('clock-transition')
		hoursArrow.classList.add('clock-transition')
	}, 1000);
}