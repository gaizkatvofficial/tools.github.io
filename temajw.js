const fallbackLink = 'https://wartakita.github.io/player.github.io/gangguan.mp4';

function toggleMenu() {
    const menu = document.querySelector('.navbar .menu');
    menu.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', () => {
    const theme = localStorage.getItem('playerTheme') || 'light';
    document.getElementById('themeSelect').value = theme;
    applyPlayerTheme();
});

function applyPlayerTheme() {
    const theme = document.getElementById('themeSelect').value.trim();
    const body = document.body;
    if (theme === 'dark') {
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
    }
    localStorage.setItem('playerTheme', theme);
}

function generateVideoLink(videoId) {
    return `https://12a001a90a8c45927f7710a6ee02e8e6.v.smtcdns.net/play1nm.hnyongshun.cn/live/ballbar_${videoId}.m3u8`;
}

function isValidVideoId(videoId) {
    return /^[0-9]{4,8}$/.test(videoId);
}

function loadPlayer() {
    const videoId = document.getElementById('videoId').value.trim();
    if (!isValidVideoId(videoId)) {
        alert('Please enter a valid numeric video ID (4-8 digits).');
        return;
    }
    const primaryLink = generateVideoLink(videoId);
    initializePlayer(primaryLink, fallbackLink);
}

function initializePlayer(primaryLink, fallbackLink) {
    const player = jwplayer('player').setup({
        file: primaryLink,
        width: '100%',
        height: '360px',
        image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiU1IXAdgrmiGv0sR8Fepm_ax-KgTuKYhh4xgH4WqwDz0GqVPMmmLJsSduCLXH8z6gp4kfXDsT53R7e8s3SUk_liyFtu7WBg0mvvR73NqQ_Nqo8F8gNjwMg_MNyEyXcWRKIceKq9G082mTjzi3fnct6qN-LNHhI-duR313rBOWPD-GROWhaNENWRhqpvAqv/s1600/Video%20player%20ID.png',
        autostart: false,
        mute: false,
        logo: {
            file: 'https://da.gd/mGMveT', // Kosongkan jika Anda hanya ingin watermark teks.
            link: '/', // Opsional: Tambahkan link jika ingin watermark dapat diklik.
            position: 'top-right', // Posisi watermark.
            text: 'vidplayerid.blogspot.com', // Tambahkan teks watermark.
            margin: 10, // Margin dari posisi.
            fontSize: 16, // Ukuran font teks.
            color: '#FFFFFF', // Warna teks watermark.
            background: 'rgba(0, 0, 0, 0.5)', // Latar belakang teks.
            padding: 5, // Padding dalam watermark.
        },
    });

    player.on('error', () => {
        alert('Primary video failed to load. Switching to fallback video.');
        player.load([{ file: fallbackLink }]);
        player.play();
        player.on('error', () => {
            alert('Both primary and fallback videos failed to load.');
            document.getElementById('player').innerHTML =
                "<p style='color: red; text-align: center;'>Unable to play the video.</p>";
        });
    });
}
