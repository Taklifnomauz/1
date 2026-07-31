<!DOCTYPE html>
<html lang="uz">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To'y Taklifnomasi</title>
    <!-- Google Fonts & FontAwesome Icons -->
    <link href="https://fonts.googleapis.com/css2?family=Alex+Brush&family=Cinzel:wght@500;700&family=Montserrat:wght@300;400;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

    <style>
        :root {
            --primary-color: #c5a059; /* Oltin rang */
            --bg-color: #faf9f6;
            --text-color: #2c2c2c;
            --light-gold: #f4ece1;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            scroll-behavior: smooth;
        }

        body {
            font-family: 'Montserrat', sans-serif;
            background-color: var(--bg-color);
            color: var(--text-color);
            text-align: center;
            overflow-x: hidden;
        }

        /* Musiqa bloki va animatsiyalar */
        .audio-player {
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 1000;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .music-btn {
            background: #c5a059;
            color: #fff;
            border: none;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            cursor: pointer;
            box-shadow: 0 4px 15px rgba(0,0,0,0.3);
            font-size: 20px;
            transition: all 0.3s ease;
            flex-shrink: 0;
        }

        .music-btn.playing {
            animation: spin 4s linear infinite;
        }

        @keyframes spin {
            100% { transform: rotate(360deg); }
        }

        /* O'ng tomondagi yorqin ko'rsatkich */
        .music-hint {
            display: flex;
            align-items: center;
            gap: 8px;
            background: #ffffff;
            color: #2c2c2c;
            padding: 8px 14px;
            border-radius: 20px;
            font-size: 0.85rem;
            font-weight: 600;
            box-shadow: 0 4px 15px rgba(0,0,0,0.25);
            border: 2px solid #c5a059;
            transition: all 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55);
            transform-origin: right center;
        }

        .hint-arrow {
            color: #c5a059;
            font-size: 1rem;
            animation: bounceArrow 1s infinite alternate;
        }

        @keyframes bounceArrow {
            0% { transform: translateX(0); }
            100% { transform: translateX(-6px); }
        }

        .music-hint.hide-hint {
            opacity: 0;
            transform: scale(0) rotate(360deg);
            pointer-events: none;
        }

        /* Hero / Kirish qismi */
        .hero {
            min-height: 100vh;
            background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), 
                        url('https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80') center/cover no-repeat;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            color: #fff;
            padding: 20px;
        }

        .bismillah {
            font-family: 'Alex Brush', cursive;
            font-size: 2.5rem;
            color: var(--primary-color);
            margin-bottom: 10px;
        }

        .hero h3 {
            font-family: 'Cinzel', serif;
            letter-spacing: 3px;
            font-weight: 300;
            font-size: 0.9rem;
            text-transform: uppercase;
        }

        .names {
            font-family: 'Alex Brush', cursive;
            font-size: 4rem;
            margin: 20px 0;
            color: #fff;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
        }

        .date-badge {
            border-top: 1px solid var(--primary-color);
            border-bottom: 1px solid var(--primary-color);
            padding: 10px 25px;
            font-family: 'Cinzel', serif;
            font-size: 1.2rem;
            letter-spacing: 2px;
        }

        /* Sektsiyalar */
        section {
            padding: 60px 20px;
            max-width: 600px;
            margin: 0 auto;
        }

        .section-title {
            font-family: 'Cinzel', serif;
            color: var(--primary-color);
            font-size: 1.8rem;
            margin-bottom: 25px;
            position: relative;
        }

        .section-title::after {
            content: '✦';
            display: block;
            font-size: 1rem;
            margin-top: 5px;
        }

        .couple-img-wrapper {
            width: 200px;
            height: 200px;
            margin: 0 auto 25px;
            border-radius: 50%;
            border: 4px solid var(--primary-color);
            padding: 5px;
            overflow: hidden;
            box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        }

        .couple-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 50%;
        }

        .invitation-text {
            font-size: 1rem;
            line-height: 1.8;
            color: #555;
            margin-bottom: 20px;
            font-style: italic;
        }

        .family-names {
            font-weight: 600;
            color: var(--text-color);
            margin-top: 15px;
        }

        /* Taymer */
        .timer-container {
            background-color: var(--light-gold);
            padding: 30px 20px;
            border-radius: 15px;
            margin: 40px 0;
        }

        .countdown {
            display: flex;
            justify-content: center;
            gap: 15px;
            margin-top: 20px;
        }

        .time-box {
            background: #fff;
            padding: 10px;
            border-radius: 10px;
            min-width: 65px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.05);
        }

        .time-box span {
            display: block;
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--primary-color);
        }

        .time-box p {
            font-size: 0.7rem;
            text-transform: uppercase;
            color: #777;
        }

        /* To'yxona */
        .venue-card {
            background: #fff;
            border-radius: 15px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0,0,0,0.08);
            margin-top: 20px;
        }

        .venue-img {
            width: 100%;
            height: 220px;
            object-fit: cover;
        }

        .venue-info {
            padding: 25px;
        }

        .venue-name {
            font-family: 'Cinzel', serif;
            font-size: 1.4rem;
            color: var(--primary-color);
            margin-bottom: 10px;
        }

        .venue-address {
            font-size: 0.95rem;
            color: #666;
            margin-bottom: 20px;
        }

        /* Dynamic Buttons & Form */
        .btn-group {
            display: flex;
            flex-direction: column;
            gap: 12px;
        }

        .btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            padding: 14px 25px;
            border-radius: 30px;
            text-decoration: none;
            font-weight: 600;
            font-size: 0.95rem;
            transition: all 0.3s ease;
            border: none;
            cursor: pointer;
        }

        .btn-primary {
            background-color: var(--primary-color);
            color: #fff;
        }

        .btn-primary:hover {
            background-color: #b08d4b;
            transform: translateY(-2px);
        }

        .btn-outline {
            border: 2px solid var(--primary-color);
            color: var(--primary-color);
            background: transparent;
        }

        .rsvp-form-container {
            background: #fff;
            padding: 30px 20px;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.05);
            border: 1px solid var(--light-gold);
        }

        .guest-input {
            width: 100%;
            padding: 15px;
            border: 2px solid var(--light-gold);
            border-radius: 25px;
            outline: none;
            font-size: 1rem;
            text-align: center;
            font-family: 'Montserrat', sans-serif;
            transition: border-color 0.3s ease;
            margin-bottom: 15px;
        }

        .guest-input:focus {
            border-color: var(--primary-color);
        }

        .success-box {
            display: none;
            background-color: #e8f5e9;
            color: #2e7d32;
            padding: 20px;
            border-radius: 15px;
            border: 1px solid #a5d6a7;
            font-weight: 600;
            margin-top: 15px;
            animation: fadeIn 0.5s ease;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }

        /* Footer */
        footer {
            padding: 30px;
            background-color: var(--light-gold);
            font-size: 0.85rem;
            color: #777;
        }

        @media (max-width: 480px) {
            .names { font-size: 3.2rem; }
            .bismillah { font-size: 2rem; }
            section { padding: 40px 15px; }
        }
    </style>
</head>
<body>

    <!-- Fon Musiqasi Player va Strelka Ko'rsatkichi -->
    <div class="audio-player">
        <audio id="bgMusic" loop>
            <source src="audio.mp3" type="audio/mp3">
        </audio>

        <!-- O'ng tomondagi yorqin strelka va ko'rsatkich -->
        <div class="music-hint" id="musicHint">
            <i class="fas fa-arrow-left hint-arrow"></i>
            <span>Musiqani yoqing</span>
        </div>

        <!-- Musiqa tugmasi -->
        <button class="music-btn" id="musicToggle" onclick="toggleMusic()">
            <i class="fas fa-music"></i>
        </button>
    </div>

    <!-- HERO QISMI -->
    <div class="hero">
        <div class="bismillah">Bismillahir Rohmanir Rohiym</div>
        <h3>Bizning To'yimizga Taklif Etamiz</h3>
        <h1 class="names"> Shamsiddin & Gulshoda </h1>
        <div class="date-badge">09 . 10 . 2026</div>
    </div>

    <!-- ILIQ SO'ZLAR -->
    <section>
        <h2 class="section-title">Baxt Kechasi</h2>
        
        <div class="couple-img-wrapper">
            <img src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=500&q=80" alt="Kelin Kuyov" class="couple-img">
        </div>

        <p class="invitation-text">
            «Alloh taolo o'zining kalomida: "Uning alomatlaridan biri – sizlar orom olishingiz uchun o'zingizdan juftlar yaratgani va o'rtangizda muhabat hamda marhamat paydo qilganidir..." degan»
        </p>
        
        <p class="invitation-text">
            Hayotimizning eng quvonchli va go'zal kunlaridan biri bo'lmish nikoh to'yimizda siz azizlarni hamroh ko'rishdan behad mamnun bo'lamiz!
        </p>

        <div class="family-names">
            <p>Hurlar bilan:</p>
            <p><strong>Soibjonovlar</strong> oilasi</p>
        </div>
    </section>

    <!-- COUNTDOWN -->
    <section>
        <div class="timer-container">
            <h3 style="font-family: 'Cinzel', serif;">Tantanagacha Qoldi:</h3>
            <div class="countdown" id="countdown">
                <div class="time-box"><span id="days">00</span><p>Kun</p></div>
                <div class="time-box"><span id="hours">00</span><p>Soat</p></div>
                <div class="time-box"><span id="minutes">00</span><p>Daqiqa</p></div>
                <div class="time-box"><span id="seconds">00</span><p>Soniya</p></div>
            </div>
        </div>
    </section>

    <!-- TO'YXONA VA MANZIL -->
    <section>
        <h2 class="section-title">Tantana Joyi</h2>
        
        <div class="venue-card">
            <img src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80" alt="To'yxona" class="venue-img">
            
            <div class="venue-info">
                <h3 class="venue-name">"BRENDHALL" Restorani</h3>
                <p class="venue-address"><i class="fas fa-map-marker-alt" style="color: var(--primary-color);"></i> Toshkent shahri, Dehqonobod ko'chasi, 15/14-uy</p>
                <p style="margin-bottom: 20px; font-weight: 600;">Soat: 18:00 da</p>

                <div class="btn-group">
                    <a href="https://yandex.com/maps/?text=Toshkent+Dexkonobod+ko'chasi+15+BRENDHALL" target="_blank" class="btn btn-primary">
                        <i class="fas fa-location-arrow"></i> Xaritadan ko'rish (Navigatsiya)
                    </a>
                    <a href="tel:+998901234567" class="btn btn-outline">
                        <i class="fas fa-phone"></i> Bog'lanish: +998 (99) 841-76-20
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- TASHRIFNI TASDIQLASH (AUTOMATED RSVP VIA GOOGLE SHEETS) -->
    <section>
        <h2 class="section-title">Tashrifni Tasdiqlash</h2>
        
        <div class="rsvp-form-container">
            <p style="margin-bottom: 20px; color: #666;">Iltimos, ismingiz va familiyangizni kiriting:</p>
            
            <input type="text" id="guestName" class="guest-input" placeholder="Ism va Familiyangiz..." autocomplete="off">
            
            <button onclick="submitRSVP()" id="submitBtn" class="btn btn-primary" style="width: 100%;">
                <i class="fas fa-check-circle"></i> Tashrifni Tasdiqlash
            </button>

            <!-- Muvaffaqiyatli tasdiqlanganlik haqidagi xabar -->
            <div id="successMessage" class="success-box">
                <i class="fas fa-heart" style="font-size: 1.5rem; color: #e53935; display: block; margin-bottom: 10px;"></i>
                Rahmat! Siz to'y uchun o'z joyingizni band qildingiz!
            </div>
        </div>
    </section>

    <footer>
        <p>Sizni to'yimizda kutib qolamiz!</p>
        <p style="margin-top: 5px; font-size: 0.75rem;">© 2026 Ali & Fotima</p>
    </footer>

    <!-- SCRIPT -->
    <script>
        // 1. Musiqa Pleyeri va Strelka Yo'qolishi
        function toggleMusic() {
            const bgMusic = document.getElementById("bgMusic");
            const musicBtn = document.getElementById("musicToggle");
            const musicHint = document.getElementById("musicHint");

            if (bgMusic.paused) {
                bgMusic.play();
                musicBtn.classList.add("playing");
                if (musicHint) {
                    musicHint.classList.add("hide-hint");
                }
            } else {
                bgMusic.pause();
                musicBtn.classList.remove("playing");
            }
        }

        // 2. To'ygacha Bo'lgan Vaqt Sanagichi (Countdown)
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
                document.getElementById('countdown').innerHTML = "<h3>To'y boshlandi!</h3>";
            }
        }

        // Taymer har soniyada yangilanadi
        setInterval(updateCountdown, 1000);
        updateCountdown();

        // 3. Google Sheets Avtomatik Yuborish Funksiyasi
        function submitRSVP() {
            const nameInput = document.getElementById('guestName');
            const submitBtn = document.getElementById('submitBtn');
            const successMsg = document.getElementById('successMessage');
            const guestName = nameInput.value.trim();

            if (guestName === "") {
                alert("Iltimos, ism va familiyangizni kiriting!");
                return;
            }

            const scriptURL = "https://script.google.com/macros/s/AKfycbz8mnvzlagzRrCet5CvCHJROR51zkqmjXNNaTumBYudf51GRMSOJNM08wJoaNMDCpS0/exec";

            submitBtn.innerText = "Yuborilmoqda...";
            submitBtn.disabled = true;

            fetch(scriptURL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name: guestName })
            })
            .then(() => {
                nameInput.style.display = 'none';
                submitBtn.style.display = 'none';
                successMsg.style.display = 'block';
            })
            .catch(error => {
                console.error('Xatolik:', error);
                alert("Xatolik yuz berdi. Iltimos qaytadan urinib ko'ring.");
                submitBtn.innerText = "Tashrifni Tasdiqlash";
                submitBtn.disabled = false;
            });
        }
    </script>
</body>
</html>
