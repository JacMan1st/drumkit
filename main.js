// event listener to detect a pressed key
window.addEventListener('keydown', (event) => {
    // log keycode of pressed key
    console.log('Key pressed:', event.keyCode);

    // gets the keycode of pressed key
    const keyCode = event.keyCode;

    // gets audio elemt using the keycode
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);

    // if audio element is found
    if (audio) {
        // it logs audio element
        console.log('Audio element found:', audio);

        // makes sure it at the start so can repeatedly press
        audio.currentTime = 0;
        // then plays
        audio.play();
    } else {
        // logs if audio not found
        console.log('Audio element not found for key code:', keyCode);
    }
});

