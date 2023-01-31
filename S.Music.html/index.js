
// initializing the variable
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItem = Array.from(document.getElementsByClassName('songName'));
let masterSongName = document.getElementById('masterSongName');



let songs = [
    { songName: "lut gaye", filePath: "1.mp3", coverPath: "musicImage.jpg" },
    { songName: "let me love you", filePath: "2.mp3", coverPath: "letMeLoveYou.jpg" },
    { songName: "lut gaye", filePath: "1.mp3", coverPath: "musicImage.jpg" },
    { songName: "let me love you", filePath: "2.mp3", coverPath: "letMeLoveYou.jpg" },
]
songItem.forEach((element, i) => {
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('sName')[0].innerText = songs[i].songName;
})

// add event listener 
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;

    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
audioElement.addEventListener('timeupdate', () => {
    // console.log('timeupdate');
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = ((myProgressBar.value * audioElement.duration) / 100);

})
let makeAllPlay = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle')
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlay()
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `${songIndex}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterSongName.innerText = songs[songIndex + 1].songName
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})
document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 2) {
        songIndex = 0
    }
    else {
        songIndex += 1;
        audioElement.src = `${songIndex}.mp3`;
        masterSongName.innerText = songs[songIndex + 1].songName
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

    }

})
document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 1) {
        songIndex = 3
    }
    else {
        songIndex -= 1;
        audioElement.src = `${songIndex}.mp3`;
        masterSongName.innerText = songs[songIndex + 1].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

    }

})


