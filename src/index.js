let currentMusic = 0;
const music = document.querySelector("#audio");
const seekBar = document.querySelector(".seek-bar");
const songName = document.querySelector(".music-name");
const artistName = document.querySelector(".artist-name");
const currentTime = document.querySelector(".current-time");
const musicDuration = document.querySelector(".song-duracion");
const playBtn = document.querySelector(".play-btn");
const forwardBtn = document.querySelector(".forward-btn");
const backwardBtn = document.querySelector(".bacward-btn");
const album = document.querySelector(".album");
const listBtn = document.querySelector(".list_btn");
const closeListBtn = document.querySelector(".close_btn");
const playList = document.querySelector(".play-list-wrapper");
const playListContainer = document.querySelector("#play-list");
const volumeSlider = document.querySelector(".volune__wrapper .slider");
const volumeProgress = document.querySelector(".volune__wrapper .slider");
playBtn.addEventListener("click", () => {
  if (playBtn.className.includes("pause")) {
    music.play();
  } else {
    music.pause();
  }
  playBtn.classList.toggle("pause");
});

const setMusic = (i) => {
  seekBar.value = 0;
  const song = songs[i];
  console.log(song);
  currentMusic = i;
  console.log(currentMusic);
  music.src = song.path;
  songName.innerHTML = song.name;
  artistName.innerHTML = song.artist;
  album.style.backgroundImage = `url('${song.cover}')`;
  currentTime.innerHTML = "00:00";
  setTimeout(() => {
    seekBar.max = music.duration;
    musicDuration.innerHTML = formatTime(music.duration);
  }, 300);
};

setMusic(0);

const formatTime = (time) => {
  let min = Math.floor(time / 60);
  if (min < 10) {
    min = `0${min}`;
  }
  let sec = Math.floor(time % 60);
  if (sec < 10) {
    sec = `0${sec}`;
  }
  return `${min} : ${sec}`;
};

setInterval(() => {
  seekBar.value = music.currentTime;
  currentTime.innerHTML = formatTime(music.currentTime);
  if (Math.floor(music.currentTime) == Math.floor(seekBar.max)) {
    forwardBtn.click();
  }
}, 400);

seekBar.addEventListener("change", () => {
  music.currentTime = seekBar.value;
});
const playMusic = () => {
  music.play();
  playBtn.classList.remove("pause");
};

forwardBtn.addEventListener("click", () => {
  if (currentMusic >= songs.length - 1) {
    currentMusic = 0;
  } else {
    currentMusic++;
  }
  setMusic(currentMusic);
  playMusic();
});

backwardBtn.addEventListener("click", () => {
  if (currentMusic <= 0) {
    currentMusic = songs.length - 1;
  } else {
    currentMusic--;
  }
  setMusic(currentMusic);
  playMusic();
});

listBtn.addEventListener("click", () => {
  playList.classList.toggle("active");
});

closeListBtn.addEventListener("click", () => {
  playList.classList.remove("active");
});
let val;
function customSlider() {
  const maxVal = volumeSlider.getAttribute("max");
  const val = (volumeSlider.value / maxVal) * 100 + "%";
 
  audio.volume = volumeSlider.value / 100;
}

customSlider();

volumeSlider.addEventListener("input", customSlider);
