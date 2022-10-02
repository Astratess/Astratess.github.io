const audioTrigger = document.querySelector('.audio-trigger')
	  playerButton = document.querySelector('.socials__btn-play')
	  audio = document.querySelector('audio')
	  audio.volume = 0.1;

	function toggleAudio () {
		if (audio.paused) {
			audio.play();
			playerButton.classList.add('is-active')
		} else {
			audio.pause();
			playerButton.classList.remove('is-active')
		}
	}

	audioTrigger.addEventListener('click', toggleAudio);