// Add js here.
let video = document.getElementById("videoplayer");
video.autoplay = false;
video.loop = false;

let playButton = document.getElementById("play");
let pauseButton = document.getElementById("pause");
playButton.addEventListener("click",function() {
    video.play()
})
pauseButton.addEventListener("click",function() {
    video.pause()
})

let slowdownButton = document.getElementById("slower");
slowdownButton.addEventListener("click",function() {
    if(video.playbackRate === 0.5){
        alert("Video is at slowest speed!")
    }else{
        video.playbackRate/=2
    }
})

let speedupButton = document.getElementById("faster");
speedupButton.addEventListener("click",function() {
    if(video.playbackRate === 2){
        alert("Video is at fastest speed")
    }else{
        video.playbackRate *=2
    }
})

let skipButton = document.getElementById("skip");
skipButton.addEventListener("click",function() {
    if(video.currentTime + 15 > video.duration){
        video.currentTime = 0
    }else{
        video.currentTime += 15
    }
})

let muteButton = document.getElementById("mute");
muteButton.addEventListener("click",function() {
    if(video.muted === true){
        video.muted = false
        muteButton.innerText = "Mute"
    }else{
        video.muted = true
        muteButton.innerText = "Unmute"
    }
})

let slider = document.getElementById("slider");
let volume = document.getElementById("volume");
slider.addEventListener("click",function() {
    video.volume = slider.value / 100
    volume.innerText = slider.value + "%"
})

