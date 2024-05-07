let interval;
let startTime;
const stopwatch = document.getElementById("stopwatch");

function startTimer() {
    startTime = Date.now();
    interval = setInterval(updateTimer, 1000);
}

function updateTimer() {
    const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
    const hours = Math.floor(elapsedTime / 3600);
    const minutes = Math.floor((elapsedTime % 3600) / 60);
    const seconds = elapsedTime % 60;
    stopwatch.innerHTML = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

function stopTimer() {
    clearInterval(interval);
}

function resumeTimer() {
    const storedTime = localStorage.getItem("stopwatchStartTime");
    if (storedTime) {
        startTime = parseInt(storedTime, 10);
        startTimer();
    } else {
        startTimer();
    }
}

// Save the current timer state in localStorage when navigating away from the page
window.addEventListener("beforeunload", () => {
    localStorage.setItem("stopwatchStartTime", startTime);
});

// Start or resume the timer automatically when the page loads
document.addEventListener("DOMContentLoaded", () => {
    resumeTimer(); // Start or resume the timer when the page loads
});
