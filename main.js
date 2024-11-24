// Ambil elemen dari DOM
const categoryMenu = document.getElementById("category-menu");
const channelMenu = document.getElementById("channel-menu");
const descriptionDiv = document.getElementById("description");
const playerDiv = document.getElementById("player");
const searchBar = document.getElementById("search-bar"); // Input pencarian

// Cek channel terakhir yang diputar di localStorage
const lastPlayedChannel = localStorage.getItem("lastPlayedChannel");

/**
 * Fungsi untuk memuat daftar kategori ke dalam dropdown
 */
function loadCategories() {
    const categories = [...new Set(videoChannels.map(channel => channel.category))];

    categories.forEach(category => {
        const option = document.createElement("option");
        option.value = category;
        option.textContent = category;
        categoryMenu.appendChild(option);
    });
}

/**
 * Fungsi untuk memuat daftar channel berdasarkan kategori dan kata kunci pencarian
 * @param {string} selectedCategory - Kategori yang dipilih
 * @param {string} searchQuery - Kata kunci pencarian
 */
function loadChannels(selectedCategory = "all", searchQuery = "") {
    channelMenu.innerHTML = ""; // Kosongkan menu channel

    const filteredChannels = videoChannels
        .map((channel, originalIndex) => ({
            ...channel,
            originalIndex
        })) // Tambahkan indeks asli
        .filter(channel =>
            (selectedCategory === "all" || channel.category === selectedCategory) &&
            channel.name.toLowerCase().includes(searchQuery.toLowerCase())
        );

    if (!filteredChannels.length) {
        const noChannelMessage = document.createElement("p");
        noChannelMessage.textContent = "Tidak ada channel yang ditemukan.";
        noChannelMessage.style.color = "#fff";
        channelMenu.appendChild(noChannelMessage);
        return;
    }

    filteredChannels.forEach((channel) => {
        const channelItem = document.createElement("a");
        channelItem.classList.add("channel-item");
        channelItem.textContent = channel.name;
        channelItem.setAttribute("href", "#");
        channelItem.setAttribute("data-index", channel.originalIndex); // Simpan indeks asli

        const icon = document.createElement("img");
        icon.src = channel.icon || "https://da.gd/w5SoNu";
        channelItem.prepend(icon);

        channelMenu.appendChild(channelItem);
    });
}


/**
 * Fungsi untuk mengganti channel yang sedang diputar
 * @param {number} index - Index channel dalam array videoChannels
 */
function changeChannel(index) {
    try {
        const channel = videoChannels[index];
        let isFallback = false; // Indikator untuk mengecek apakah menggunakan fallback

        // Fungsi untuk memutar video
        const setupPlayer = (fileUrl) => {
            jwplayer("player").setup({
                file: fileUrl,
                drm: channel.drm?.clearkey ?
                    {
                        clearkey: {
                            keyId: channel.drm.clearkey.keyId,
                            key: channel.drm.clearkey.key
                        }
                    } :
                    null,
                width: "100%",
                aspectratio: "16:9",
                autostart: true,
                controls: true,
                preload: "auto"
            });

            // Event handler jika terjadi error
            jwplayer("player").on("error", () => {
                if (!isFallback && channel.fallbackFile) {
                    console.warn(`Video utama gagal dimuat. Beralih ke video fallback untuk ${channel.name}.`);
                    isFallback = true;
                    setupPlayer(channel.fallbackFile); // Memutar video fallback
                } else {
                    console.error(`Gagal memuat video untuk ${channel.name}. Tidak ada fallback.`);
                    playerDiv.innerHTML = `
                        <p>Gagal memuat video untuk ${channel.name}.</p>
                        <p><a href="${fileUrl}" target="_blank">Klik di sini untuk mencoba memutar video secara langsung</a></p>
                    `;
                }
            });
        };

        // Mulai memutar video utama
        setupPlayer(channel.file);

        // Perbarui deskripsi channel
        descriptionDiv.textContent = channel.description || "Tidak ada deskripsi.";
        descriptionDiv.style.display = "block";

        // Tandai channel yang sedang aktif
        document.querySelectorAll(".channel-item").forEach(item => item.classList.remove("active"));
        document.querySelector(`.channel-item[data-index="${index}"]`).classList.add("active");

        // Simpan channel terakhir yang diputar ke localStorage
        localStorage.setItem("lastPlayedChannel", index);
    } catch (error) {
        console.error("Gagal memuat channel:", error);
        playerDiv.innerHTML = "<p>Channel tidak dapat dimuat.</p>";
    }
}

// Event listener untuk perubahan kategori
categoryMenu.addEventListener("change", () => {
    const searchQuery = searchBar.value.trim();
    loadChannels(categoryMenu.value, searchQuery);
});

// Event listener untuk input pencarian
searchBar.addEventListener("input", () => {
    const searchQuery = searchBar.value.trim();
    loadChannels(categoryMenu.value, searchQuery);
});

// Event listener untuk klik pada channel
channelMenu.addEventListener("click", (event) => {
    const target = event.target.closest(".channel-item");
    if (target) {
        event.preventDefault();
        changeChannel(target.getAttribute("data-index"));
    }
});

// Inisialisasi awal
loadCategories();
loadChannels();

// Jika ada channel terakhir yang diputar, otomatis muat kembali
if (lastPlayedChannel && videoChannels[lastPlayedChannel]) {
    changeChannel(lastPlayedChannel);
}
