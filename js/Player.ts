const playBTN = document.querySelector('.audio-control');


let isPlay = 1;

const audio = new Audio();
playBTN.addEventListener('click', () => {playAudio()});

export function playAudio() {
    audio.src =`../assets/audio/audio.mp3`;
    
    if (isPlay === 0) {
        isPlay = 1;
        audio.play();
        playBTN.classList.add('active');
    } else {
        playBTN.classList.remove('active')
        isPlay = 0;
        audio.pause(); 
    }
}