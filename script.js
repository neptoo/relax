const container = document.querySelector(".container");
const text = document.querySelector("#text");

// 3s吸气 1.5s屏住呼吸 3s吐气
const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

// 声音
var music = "/audio/music.mp3";
var bgmusic = new Audio();
var breatheIn = document.querySelector(".breathe-in");
var hold = document.querySelector(".hold");
var breatheOut = document.querySelector(".breathe-out");
bgmusic.src = music;
bgmusic.volume = 0.6;
bgmusic.autoplay = true;

breatheAnimation();

function breatheAnimation() {
  text.innerHTML = "Breathe In";
  container.className = "container grow";
  breatheIn.play();

  setTimeout(() => {
    text.innerHTML = "Hold";
    hold.play();

    setTimeout(() => {
      text.innerHTML = "Breathe Out";
      container.className = "container shrink";
      breatheOut.play();
    }, holdTime);
  }, breatheTime);
}

setInterval(breatheAnimation, totalTime);
