const container = document.getElementById('imageContainer');
const popOut = document.getElementById('popOutImg');
const videoContainer = document.getElementById('videoContainer');
const introVideo = document.getElementById('introVideo');


introVideo.onended = () => {
  videoContainer.style.display = "none";
  container.style.display = "block";

  setTimeout(() => {
    container.classList.add("show-pop");
  }, 300);
};

container.addEventListener("mouseleave", () => {
  popOut.style.transition = "transform 0.3s ease";
  popOut.style.transform = "translate(-50%, -50%) scale(0)";

  setTimeout(() => {
    container.classList.remove("show-pop");
    popOut.style.transition = "transform 1s ease";
  }, 300);
});

// Re-center image vertically when window loads
window.onload = function () {
  const leftImg = document.getElementById("leftImg");
  const rightImg = document.getElementById("rightImg");

  leftImg.onload = rightImg.onload = () => {
    leftImg.style.marginTop = ((300 - leftImg.naturalHeight) / 2) + "px";
    rightImg.style.marginTop = ((300 - rightImg.naturalHeight) / 2) + "px";
  };

  // Show "Get started" button after 4 seconds
  setTimeout(() => {
    document.getElementById('getStartedBtn').style.display = 'block';
  }, 4000);
};
const video = document.getElementById("introVideo");
const imageContainer = document.getElementById("imageContainer");
const getStartedBtn = document.getElementById("getStartedBtn");

// Show can (pop-out) after 2 seconds
setTimeout(() => {
  imageContainer.style.display = "block";
  imageContainer.classList.add("show-pop");
}, 2000); // 2000 ms = 2 sec

// Show 'Get Started' button when video ends
video.addEventListener("ended", () => {
  getStartedBtn.style.display = "block";
});
