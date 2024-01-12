
// buttons, audio and images
const buttons = document.querySelectorAll('#keyButton button');
const audios = document.querySelectorAll('audio');
const images = document.querySelectorAll('#drumKit img');

// click event listener to buttons
buttons.forEach(button => {
    button.addEventListener('click', () => playSound(button.getAttribute('data-key')));
});

// keydown event listener for key press
document.addEventListener('keydown', event => {
    const keyCode = event.keyCode.toString();
    playSound(keyCode);
});

// function to play sound
playSound = (keyCode) => {
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    const button = document.querySelector(`button[data-key="${keyCode}"]`);
    const image = document.querySelector(`#drumKit img[data-key="${keyCode}"]`);

    // play audio and visual effect to button and image
    if (audio && image) {
        audio.currentTime = 0;
        audio.play();
        button.classList.add('playing');
        image.classList.add('playing');
    }
}

// eventlistener for key release
document.addEventListener('keyup', event => {
    const keyCode = event.keyCode.toString();
    const button = document.querySelector(`button[data-key="${keyCode}"]`);
    const image = document.querySelector(`#drumKit img[data-key="${keyCode}"]`);

    // remove visual effects
    if (button) {
        button.classList.remove('playing');
    }
    if (image) {
        image.classList.remove('playing');
    }
});

