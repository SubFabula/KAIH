function reward() {
  if (globalResult <= 1000.00) {
    let rewardVideo = document.getElementById("rewardVideo");

    // If the video doesn't already exist
    if (!rewardVideo) {
      // First create and append the rewardVideoContainerDiv
      const rewardVideoContainerDiv = document.createElement("div");
      rewardVideoContainerDiv.id = "rewardVideoContainer";

      // Then append the container to .resultPreview
      const resultPreviewDiv = document.querySelector('#resultPreview');
      resultPreviewDiv.appendChild(rewardVideoContainerDiv);

      // Only after the first two queries - create and append the video inside the container
      rewardVideo = document.createElement("video");
      rewardVideo.id = "rewardVideo";
      rewardVideo.src = "assets/videos/reward.mp4";
      rewardVideo.controls = true;

      rewardVideoContainerDiv.appendChild(rewardVideo); // Use the expected container

      // Play only after it’s loaded
      rewardVideo.addEventListener("loadeddata", () => {
        rewardVideo.play();
      });

    } else {
      // Otherwise if tis already there, reset it
      rewardVideo.currentTime = 0;
      rewardVideo.play();
    }

  } else {
    // Hide the video if it exists and when the condition fails
    const rewardVideo = document.getElementById("rewardVideo");
    if (rewardVideo) {
      rewardVideo.pause();
      rewardVideo.style.display = "none";
    }
  }
}
