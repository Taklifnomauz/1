
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
    function toggleMusic() {
    const music = document.getElementById("bgMusic");
    const btn = document.getElementById("musicToggle");
    const hint = document.getElementById("musicHint");
    
    if (music.paused) {
        music.play();
        btn.classList.add("playing");
        // Strelkani aylanib tugma ichiga kirib yo'qolishi uchun klass qo'shamiz
        if (hint) {
            hint.classList.add("hide-hint");
        }
    } else {
        music.pause();
        btn.classList.remove("playing");
    }
}
});

// 2. To'y Gacha Bo'lgan Vaqt Sanagichi (Countdown)
// Bu yerga to'y sanasini kiriting: YYYY-MM-DD
const weddingDate = new Date('2026-10-09T18:00:00').getTime();

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
