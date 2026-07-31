
    // 1. Musiqa Pleyeri
const musicBtn = document.getElementById('musicToggle');
const bgMusic = document.getElementById('bgMusic');
const musicIcon = document.getElementById('musicIcon');
let isPlaying = false;

musicBtn.addEventListener('click', () => {
    if (isPlaying) {
        bgMusic.pause();
        musicIcon.textContent = '🎵';
    } else {
        bgMusic.play();
        musicIcon.textContent = '🔊';
    }
    isPlaying = !isPlaying;
});

// 2. To'y Gacha Bo'lgan Vaqt Sanagichi (Countdown)
// Bu yerga to'y sanasini kiriting: YYYY-MM-DD
const weddingDate = new Date('2026-08-15T18:00:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const difference = weddingDate - now;

    if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        document.getElementById('days').innerText = days < 10 ? '0' + days : days;
        document.getElementById('hours').innerText = hours < 10 ? '0' + hours : hours;
        document.getElementById('minutes').innerText = minutes < 10 ? '0' + minutes : minutes;
        document.getElementById('seconds').innerText = seconds < 10 ? '0' + seconds : seconds;
    } else {
        document.getElementById('timer').innerHTML = "<b>To'y boshlandi!</b>";
    }
}

setInterval(updateCountdown, 1000);
updateCountdown();