let fallbackLink = "https://wartakita.github.io/player.github.io/gangguan.mp4";

    function toggleMenu() {
        const menu = document.querySelector('.navbar .menu');
        menu.classList.toggle('active');
    }

    document.addEventListener('DOMContentLoaded', () => {
        const savedTheme = localStorage.getItem('playerTheme') || 'light';
        document.getElementById('themeSelect').value = savedTheme;
        applyPlayerTheme();
    });

    function applyPlayerTheme() {
        const theme = document.getElementById('themeSelect').value;
        const bodyElement = document.body;

        if (theme === 'dark') {
            bodyElement.classList.add('dark-mode');
        } else {
            bodyElement.classList.remove('dark-mode');
        }
        localStorage.setItem('playerTheme', theme);
    }

    function generateVideoLink(videoId) {
        return `https://12a001a90a8c45927f7710a6ee02e8e6.v.smtcdns.net/play1nm.hnyongshun.cn/live/ballbar_${videoId}.m3u8`;
    }

    function isValidVideoId(id) {
        return /^[0-9]{4,8}$/.test(id);
    }

    function loadPlayer() {
        const videoId = document.getElementById('videoId').value.trim();

        if (!isValidVideoId(videoId)) {
            alert('Please enter a valid numeric video ID (4-8 digits).');
            return;
        }

        const videoLink = generateVideoLink(videoId);
        initializePlayer(videoLink, fallbackLink);
    }

    function initializePlayer(primaryLink, fallbackLink) {
        const playerInstance = jwplayer('player').setup({
            file: primaryLink,
            width: '100%',
            height: '360px',
            autostart: false,
            mute: false,
            sharing: {
                link: window.location.href,
                sites: ["facebook", "twitter", "email", "whatsapp"]
            }
        });

        playerInstance.on('error', function () {
            alert('Primary video failed to load. Switching to fallback video.');
            playerInstance.load([{ file: fallbackLink }]);
            playerInstance.play();

            playerInstance.on('error', function () {
                alert('Both primary and fallback videos failed to load.');
                document.getElementById('player').innerHTML = 
                  "<p style='color: red; text-align: center;'>Unable to play the video.</p>";
            });
        });
    }
