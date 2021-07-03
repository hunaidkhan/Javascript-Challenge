const video_container = document.querySelector(".player");
const video_player = document.querySelector(".player__video")
const toggle = document.querySelector('.toggle');
const volume_slider = document.querySelector(".volume");
const playback_speed = document.querySelector(".playbackRate");
const backward = document.querySelector(".backward");
const forward = document.querySelector(".forward");
const progress = document.querySelector(".progress")
const progress_bar = document.querySelector(".progress__filled")
const fullscreen = docuemnt.querySelector(".fullscreen");
//my functions
function playPause(){
    if(video_player.paused === false){
        video_player.pause();
        toggle.textContent = "❚ ❚";
        return;
    }
    video_player.play();
    toggle.textContent= "►";
}

function updateVolume(){
    video_player.volume = volume_slider.value;
    video_player.play();
}
function updateSpeed(){
    video_player.playbackRate = playback_speed.value;
    video_player.play();
}
function rewindVideo(){
    video_player.currentTime -= 10;
    video_player.play();
}
function forwardVideo(){
    video_player.currentTime += 25;
    video_player.play();
}
function videoProgress(){
    const percent_prog = (video_player.currentTime / video_player.duration) * 100;
    progress_bar.style.flexBasis = `${percent_prog}%`;
}
function goFullscreen(){
    video_player.requestFullscreen();
}
function scrub(e){
    const jumpTo = (e.offsetX  / progress.offsetWidth) * video_player.duration;
    video_player.currentTime = jumpTo;
    video.play();
}
//My event listeners
let mousedown = false;
video_container.addEventListener("click", playPause);
volume_slider.addEventListener("input", updateVolume);
playback_speed.addEventListener("input", updateSpeed);
backward.addEventListener("click", rewindVideo);
forward.addEventListener("click", forwardVideo);
fullscreen.addEventListener("click", goFullscreen);
video_player.addEventListener("timeupdate", videoProgress);
progress.addEventListener("click", scrub);
progress.addEventListener("mousedown",  mousedown=true);
progress.addEventListener("mouseup",  mousedown=false);
progress.addEventListener("mousemove",  () => {
    if(mousedown){
        scrub(e);
    }
});