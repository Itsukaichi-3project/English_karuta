const startButton = document.getElementById('start-button');
const buttonsContainer = document.getElementById('ended-buttons');
const replayButton = document.getElementById('replay-button');
const nextButton = document.getElementById('next-button');
const subtitle = document.getElementById('subtitle');
const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let audioProgress = document.getElementById('progressBar');
let isPlaying = false;
let isAudioLoaded = false;
let audio = null;
let item = null;
startButton.addEventListener('click', () => {
    if(isPlaying) {
        audio.pause();
        isPlaying = false;
        startButton.textContent = '音声を再生';
    }else if(!isAudioLoaded){
        isPlaying = true;
        isAudioLoaded = true;
        const randomIndex = Math.floor(Math.random() * letters.length);
        item = letters.splice(randomIndex, 1)[0];
        audio = new Audio(`https://raw.githubusercontent.com/Itsukaichi-3project/English_karuta/main/audio/${item}.m4a`);
        audio.play();
        audio.addEventListener('timeupdate', () => {
            const progress = (audio.currentTime / audio.duration) * 100;
            audioProgress.value = progress;
        subtitle.textContent = `音声を再生中`;
        }); 
        audio.addEventListener('ended', () => {
            isPlaying = false;
            isAudioLoaded = false;
            audioProgress.value = 0;
            startButton.textContent = '音声を再生';
            subtitle.textContent = '音声の再生を終了しました。';
            startButton.classList.add('hidden');
            buttonsContainer.classList.remove('hidden');
        });
        startButton.textContent = '音声を停止';
    }else{
        audio.play();
        isPlaying = true;
        startButton.textContent = '音声を停止';
    }
})
replayButton.addEventListener('click', () => {
    if(audio) {
        audio.currentTime = 0;
        audio.play();
        startButton.classList.remove('hidden');
        buttonsContainer.classList.add('hidden');
        startButton.textContent = '音声を停止';
    }
});
nextButton.addEventListener('click', () => {
    if(audio) {
        audio.pause();
        audio.currentTime = 0;
        isPlaying = false;
        startButton.textContent = '音声を再生';
        buttonsContainer.classList.add('hidden');
        startButton.classList.remove('hidden');
        subtitle.textContent = `読み上げたカードは${item}でした。`;
    }
});