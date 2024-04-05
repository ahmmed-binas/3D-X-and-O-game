let isSettingsOpen = false;
const settingsButton = document.getElementById("settingsButton");
const modal = document.getElementById("settingsModal");
const closeButton = document.querySelector(".close");

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
}

function closeSettings() {
    isSettingsOpen = false;
    modal.style.display = "none";
}

function handleKeyPress(event) {
    if (event.key === "Escape" && isSettingsOpen) {
        closeSettings();
        applySettings();
    }
}
