const startButton = document.getElementById('start-button');
const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let audioProgress = document.getElementById('progressBar');
let isPlaying = false;
startButton.addEventListener('click', () => {
    if(isPlaying) {
        audio.pause();
        isPlaying = false;
        startButton.textContent = '音声を再生';
    }else{
        isPlaying = true;
        const randomIndex = Math.floor(Math.random() * letters.length);
        const item = letters.splice(randomIndex, 1)[0];
        let audio = new Audio(`https://raw.githubusercontent.com/Itsukaichi-3project/English_karuta/main/audio/${item}.m4a`);
        audio.play();
        audio.addEventListener('timeupdate', () => {
            const progress = (audio.currentTime / audio.duration) * 100;
            audioProgress.value = progress;
        }); 
        audio.addEventListener('ended', () => {
            isPlaying = false;
            audioProgress.value = 0;
        });
        startButton.textContent = '音声を停止';
    }
})