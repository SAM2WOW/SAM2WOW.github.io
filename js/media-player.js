(() => {
  const player = document.querySelector("[data-wmp-player]");
  if (!player) return;

  const audio = player.querySelector("[data-wmp-audio]");
  const playButton = player.querySelector("[data-wmp-play]");
  const stopButton = player.querySelector("[data-wmp-stop]");
  const muteButton = player.querySelector("[data-wmp-mute]");
  const seek = player.querySelector("[data-wmp-seek]");
  const volume = player.querySelector("[data-wmp-volume]");
  const time = player.querySelector("[data-wmp-time]");
  const status = player.querySelector("[data-wmp-status]");
  let seeking = false;

  const formatTime = (seconds) => {
    if (!Number.isFinite(seconds)) return "0:00";
    const minutes = Math.floor(seconds / 60);
    const remainder = Math.floor(seconds % 60).toString().padStart(2, "0");
    return `${minutes}:${remainder}`;
  };

  const updateTime = () => {
    const duration = Number.isFinite(audio.duration) ? audio.duration : 0;
    time.textContent = `${formatTime(audio.currentTime)} / ${formatTime(duration)}`;
    if (!seeking && duration) {
      seek.value = Math.round((audio.currentTime / duration) * 1000);
      seek.style.setProperty("--seek-progress", `${Number(seek.value) / 10}%`);
    }
  };

  const showPlayState = () => {
    const playing = !audio.paused && !audio.ended;
    playButton.classList.toggle("is-playing", playing);
    playButton.setAttribute("aria-label", playing ? "Pause" : "Play");
    status.textContent = playing ? "Playing · 64 kbps" : audio.currentTime ? "Paused" : "Ready · 64 kbps";
  };

  playButton.addEventListener("click", async () => {
    if (audio.paused) {
      try {
        await audio.play();
      } catch {
        status.textContent = "Playback unavailable";
      }
    } else {
      audio.pause();
    }
  });

  stopButton.addEventListener("click", () => {
    audio.pause();
    audio.currentTime = 0;
    updateTime();
    showPlayState();
  });

  seek.addEventListener("input", () => {
    seeking = true;
    seek.style.setProperty("--seek-progress", `${Number(seek.value) / 10}%`);
    const preview = (Number(seek.value) / 1000) * (audio.duration || 0);
    time.textContent = `${formatTime(preview)} / ${formatTime(audio.duration)}`;
  });

  seek.addEventListener("change", () => {
    if (audio.duration) audio.currentTime = (Number(seek.value) / 1000) * audio.duration;
    seeking = false;
    updateTime();
  });

  volume.addEventListener("input", () => {
    audio.volume = Number(volume.value);
    audio.muted = false;
    muteButton.classList.remove("is-muted");
    muteButton.setAttribute("aria-label", "Mute");
  });

  muteButton.addEventListener("click", () => {
    audio.muted = !audio.muted;
    muteButton.classList.toggle("is-muted", audio.muted);
    muteButton.setAttribute("aria-label", audio.muted ? "Unmute" : "Mute");
  });

  audio.volume = Number(volume.value);
  seek.style.setProperty("--seek-progress", "0%");
  audio.addEventListener("loadedmetadata", updateTime);
  audio.addEventListener("timeupdate", updateTime);
  audio.addEventListener("play", showPlayState);
  audio.addEventListener("pause", showPlayState);
  audio.addEventListener("ended", showPlayState);
})();
