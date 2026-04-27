const display = document.getElementById("timeDisplay");
const startButton = document.getElementById("startBtn");
const stopButton = document.getElementById("stopBtn");
const clearButton = document.getElementById("clearBtn");
const lapButton = document.getElementById("lapBtn");
const clearLapsButton = document.getElementById("clearLapsBtn");
const laps = document.getElementById("lapsList");
let totalTime = 0;
let running = false;
let interval = 0;
function showTime() {
    const minutes = Math.floor(totalTime / 60000);
    const seconds = Math.floor((totalTime % 60000) / 1000);
    const hundredths = Math.floor((totalTime % 1000) / 10);
    let minuteText = minutes.toString();
    let secondText = seconds.toString();
    let hundredthsText = hundredths.toString();
    if (minutes < 10) {
        minuteText = "0" + minuteText;
    }
    if (seconds < 10) {
        secondText = "0" + secondText;
    }
    if (hundredths < 10) {
        hundredthsText = "0" + hundredthsText;
    }
    display.textContent = minuteText + ":" + secondText + "." + hundredthsText;
}
startButton.onclick = function () {
    if (!running) {
        running = true;
        interval = setInterval(function () {
            totalTime += 10;
            showTime();
        }, 10);
    }
};
stopButton.onclick = function () {
    if (running) {
        clearInterval(interval);
        running = false;
    }
};
clearButton.onclick = function () {
    clearInterval(interval);
    running = false;
    totalTime = 0;
    showTime();
};
lapButton.onclick = function () {
    const lap = document.createElement("li");
    lap.textContent = display.textContent;
    laps.appendChild(lap);
};
clearLapsButton.onclick = function () {
    laps.innerHTML = "";
};
showTime();
