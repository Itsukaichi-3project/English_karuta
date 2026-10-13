const startButton = document.getElementById('start-button');
const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
startButton.addEventListener('click', () => {
    const rondomIndex = Math.floor(Math.random() * letters.length);
    const item = letters.splice(rondomIndex, 1)[0];
    const audio = new Audio(`https://raw.githubusercontent.com/Itsukaichi-3project/English_karuta/main/audio/${item}.m4a`);
    audio.play();
})