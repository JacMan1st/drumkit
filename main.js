
// event listener to detect a pressed key
window.addEventListener('keydown', (event) => {
    // log keycode of pressed key
    console.log('Key pressed:', event.keyCode);

    // gets the keycode of pressed key
    const keyCode = event.keyCode;

    // gets audio elemt using the keycode
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    
    // gets image element using the keycode
    const drumImg = document.querySelector(`img[data-key="${keyCode}"]`);


    // if audio and drum image elements are found
    if (audio && drumImg) {
        // it logs audio element
        console.log('Audio element found:', audio);

        // makes sure it at the start so can repeatedly press
        audio.currentTime = 0;
        // then plays
        audio.play();
        // visual effect on press
        drumImg.classList.add('playing');
    } else {
        // logs if audio not found
        console.log('Audio element not found for key code:', keyCode);
    }
});

// event listener to detect when a key is released
window.addEventListener('keyup', function (event) {
    // gets the matching image with key code
    const drumImg = document.querySelector(`img[data-key="${event.keyCode}"]`);

    // checks if image is found
    if (drumImg) {
        // stops effect by removing playing class
        drumImg.classList.remove('playing');
    }
});
