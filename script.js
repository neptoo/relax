const container = document.querySelector(".container");
const text = document.querySelector("#text");

// 4s吸气 6s屏住呼吸 8s吐气
const totalTime = 18000;
const breatheTime = (totalTime / 9) * 2;
const holdTime = (totalTime / 9) * 3;

breatheAnimation();

function breatheAnimation() {
  text.innerHTML = "Breathe In";
  container.className = "container grow";

  setTimeout(() => {
    text.innerHTML = "Hold";

    setTimeout(() => {
      text.innerHTML = "Breathe Out";
      container.className = "container shrink";
    }, holdTime);
  }, breatheTime);
}

setInterval(breatheAnimation, totalTime);
