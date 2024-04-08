const settingsButton = document.getElementById("settingsButton");
const modal = document.getElementById("settingsModal");
const closeButton = document.querySelector(".close");
const volumeInput = document.getElementById("volume");
let isSettingsOpen = false;



settingsButton.addEventListener("click", toggleSettings);
closeButton.addEventListener("click", closeSettings);
document.addEventListener("keydown", handleKeyPress);


function toggleSettings() {
    isSettingsOpen = !isSettingsOpen;
    if (isSettingsOpen) {
        openSettings();

    } else {
        closeSettings();
        applySettings();
    }
}

function openSettings() {
    modal.style.display = "block";
    const overlay = document.getElementById("overlay");

}

function closeSettings() {
    isSettingsOpen = false;
    modal.style.display = "none";
    const overlay = document.getElementById("overlay");
    overlay.style.display = "none";
}

function handleKeyPress(event) {
    if (event.key === "Escape" && isSettingsOpen) {
        closeSettings();
        applySettings();
    }
}

function updateVolume() {
    const volume = volumeInput.value / 100;
    const sources = document.querySelectorAll("audio");
    sources.forEach(source => {
        const gainNode = audioContext.createGain();
        source.connect(gainNode);
        gainNode.connect(audioContext.destination);
        gainNode.gain.value = volume;
    });
}