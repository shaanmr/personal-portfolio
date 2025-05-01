// Function to load and insert video background
function loadVideoBackground() {
    fetch('/components/video-background.html')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            // Insert the video background at the start of the body
            document.body.insertAdjacentHTML('afterbegin', data);
            
            // Get the video element and ensure it plays
            const video = document.getElementById('myVideo');
            if (video) {
                video.play().catch(error => {
                    console.error('Error playing video:', error);
                });
            }
        })
        .catch(error => {
            console.error('Error loading video background:', error);
            // Fallback to a static background if video fails to load
            document.body.insertAdjacentHTML('afterbegin', 
                '<div class="video-background"><div class="video-overlay"></div></div>'
            );
        });
}

// Load video background when the DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadVideoBackground);
} else {
    loadVideoBackground();
} 