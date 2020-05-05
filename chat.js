const playButton = document.querySelector('.play-btn');
const pauseButton = document.querySelector('.pause-btn');
const stopButton = document.querySelector('.stop-btn');
const textInput = document.querySelector('.text');
const speed = document.querySelector('.speed');

playButton.addEventListener('click', () => {
    playText(textInput.value);
});

pauseButton.addEventListener('click', pauseText);
stopButton.addEventListener('click', stopText);
function playText(text) {
    if(speechSynthesis.paused && speechSynthesis.speaking) {
            return speechSynthesis.resume();
    }
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = speed.value || 0.5;
    utterance.addEventListener('end', () => {
        textInput.disabled = false;
    });
    textInput.disabled = true;
    speechSynthesis.speak(utterance);
}

function pauseText() {
    if(speechSynthesis.speaking) speechSynthesis.pause();
}
function stopText() {
    speechSynthesis.resume();
    speechSynthesis.cancel();
}