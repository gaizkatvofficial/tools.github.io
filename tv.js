const jsonURL = '//gaizkatvofficial.github.io/tools.github.io/channels.json';
        const toggleThemeButton = document.querySelector('.toggle-theme');
        const notification = document.getElementById('notification');

        // Function to show notification
        function showNotification(message) {
            notification.textContent = message;
            notification.style.display = 'block';
            setTimeout(() => {
                notification.style.display = 'none';
            }, 3000);
        }

        // Function to determine time-based theme
        function determineTimeBasedTheme() {
            const currentHour = new Date().getHours();
            return currentHour >= 18 || currentHour < 6 ? 'dark' : 'light';
        }

        // Apply saved theme or time-based theme
        const savedTheme = localStorage.getItem('theme') || determineTimeBasedTheme();
        document.body.setAttribute('data-theme', savedTheme);

        // Update button text based on theme
        function updateThemeButton(theme) {
            toggleThemeButton.textContent = theme === 'dark' ? 'Light Mode' : 'Dark Mode';
        }
        updateThemeButton(savedTheme);

        // Event listener for manual theme toggle
        toggleThemeButton.addEventListener('click', () => {
            const currentTheme = document.body.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            document.body.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeButton(newTheme);
            showNotification(`Tema diubah menjadi ${newTheme === 'dark' ? 'Dark Mode' : 'Light Mode'}`);
        });

        // Function to load channels and populate categories
        async function loadChannels() {
            const categoryList = document.getElementById('category-list');
            const channelList = document.getElementById('channel-list');
            const videoPlayer = document.getElementById('video-player');

            try {
                const response = await fetch(jsonURL);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const channels = await response.json();
                const categories = [...new Set(channels.map(channel => channel.category))];

                categories.forEach(category => {
                    const option = document.createElement('option');
                    option.value = category;
                    option.textContent = category;
                    categoryList.appendChild(option);
                });

                categoryList.addEventListener('change', (event) => {
                    const selectedCategory = event.target.value;
                    const filteredChannels = selectedCategory === 'all'
                        ? channels
                        : channels.filter(channel => channel.category === selectedCategory);

                    channelList.innerHTML = '<option value="">Pilih Channel</option>';
                    filteredChannels.forEach((channel, index) => {
                        const option = document.createElement('option');
                        option.value = JSON.stringify(channel);
                        option.textContent = channel.name;
                        channelList.appendChild(option);
                    });

                    videoPlayer.innerHTML = '';
                });

                channelList.addEventListener('change', (event) => {
                    const selectedChannel = event.target.value ? JSON.parse(event.target.value) : null;
                    if (selectedChannel) {
                        loadPlayer(selectedChannel);
                        showNotification(`Memutar: ${selectedChannel.name}`);
                    }
                });

                function loadPlayer(channel) {
                    videoPlayer.innerHTML = '';
                    const playerDiv = document.createElement('div');
                    playerDiv.id = `player-${channel.id}`;
                    videoPlayer.appendChild(playerDiv);

                    const playerConfig = {
                        file: channel.url,
                        width: "100%",
                        aspectratio: "16:9",
                        autostart: true
                    };

                    if (channel.drm && channel.drm.clearkey) {
                        playerConfig.drm = {
                            clearkey: {
                                keyId: channel.drm.clearkey.keyId,
                                key: channel.drm.clearkey.key
                            }
                        };
                    }

                    jwplayer(playerDiv.id).setup(playerConfig);
                }

                categoryList.value = 'all';
                categoryList.dispatchEvent(new Event('change'));

            } catch (error) {
                console.error("Failed to load channels:", error);
                alert("Gagal memuat daftar channel. Silakan coba lagi nanti.");
            }
        }

        document.addEventListener('DOMContentLoaded', loadChannels);
