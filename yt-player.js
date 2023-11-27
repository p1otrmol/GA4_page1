var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '360',
        width: '640',
        videoId: 'o3J0zuaX9M0',
        
    });
}

window.onload = function() {
    onYouTubeIframeAPIReady();
};