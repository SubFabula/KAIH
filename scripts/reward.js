function reward() {
  if (globalResult <= 1000.00) {
    let video = document.getElementById("rewardVideo");

    // Create the video only if it doesn't exist yet
    if (!video) {
      video = document.createElement("video");
      video.id = "rewardVideo";
      video.src = "assets/videos/reward.mp4";
      video.controls = true;
      video.width = 640;
      video.style.display = "block";
      document.body.appendChild(video);

      // Wait for video to be appended and loaded before playing
      video.addEventListener("loadeddata", () => {
        video.play();
      });
    } else {
      // If it already exists, just reset and play again
      video.style.display = "block";
      video.currentTime = 0;
      video.play();
    }
  } else {
    const video = document.getElementById("rewardVideo");
    if (video) {
      video.pause();
      video.style.display = "none";
    }
  }
}
