function loadVideo(videoId) {
    const element = document.getElementById('video-container');

    element.innerHTML = `
        <iframe
            width="100%"
            height="240"
            src="https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1"
            title="YouTube Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
        </iframe>
    `;
}