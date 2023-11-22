const button = document.querySelector('button');
const text = document.querySelector('textarea');

button.addEventListener('click', () => {
    const utterance = new SpeechSynthesisUtterance(text.value);
    speechSynthesis.speak(utterance)
});