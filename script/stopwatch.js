let interval;
let startTime;
const stopwatch = document.getElementById("stopwatch");

function startTimer() {
    startTime = Date.now();
    interval = setInterval(updateTimer, 1000); // Default interval: 1 second
}

function updateTimer() {
    const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
    let intervalDuration = 10000; // Set a larger interval duration to make the timer go very slow (e.g., 5 seconds)

    const hours = Math.floor(elapsedTime / 3600);
    const minutes = Math.floor((elapsedTime % 3600) / 60);
    const seconds = elapsedTime % 60;
    stopwatch.innerHTML = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

    // Clear previous interval and set a new interval with updated duration
    clearInterval(interval);
    interval = setInterval(updateTimer, intervalDuration);
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

function setSlowSpeed() {
    clearInterval(interval); // Clear any existing interval

    // Set a new interval with a longer duration (e.g., 5000 milliseconds = 5 seconds)
    interval = setInterval(updateTimer, 5000); // Update every 5 seconds for slow motion
}

// Start or resume the timer automatically when the page loads
document.addEventListener("DOMContentLoaded", () => {
    resumeTimer(); // Start or resume the timer when the page loads
});
