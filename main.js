const video = document.getElementById('introVideo');
const videoContainer = document.getElementById('video-container');
const content = document.getElementById('content');

video.addEventListener('ended', () => {

  videoContainer.style.display = 'none';
  content.style.display = 'block';


  document.body.classList.remove('lock-scroll');
});

console.log("Pepsi footer script loaded.");
function toggleSidebar() {
  document.getElementById("sidebar").classList.toggle("open");
}
document.getElementById("toggleAnimations").addEventListener("change", function () {
  document.body.classList.toggle("animations-off");
});
const track = document.getElementById('carouselTrack');
let currentIndex = 0;
const cardWidth = 220; 
let moving = false;

// Clone the images to create infinite looping effect
const cloneImages = () => {
  const trackChildren = Array.from(track.children);
  trackChildren.forEach(img => {
    const clone = img.cloneNode(true);
    track.appendChild(clone);
  });
};
cloneImages();

function moveCarousel(event) {
  const totalCards = track.children.length;
  const visibleCards = Math.floor(track.parentElement.offsetWidth / cardWidth);

  const carouselRect = track.parentElement.getBoundingClientRect();
  const cursorX = event.clientX - carouselRect.left;

  // if cursor is on the left half, scroll left, otherwise scroll right
  if (cursorX < carouselRect.width / 2 && !moving) {
    moving = true;
    currentIndex = Math.max(0, currentIndex - 1);
  } else if (cursorX >= carouselRect.width / 2 && !moving) {
    moving = true;
    currentIndex = Math.min(totalCards - visibleCards, currentIndex + 1);
  }

  // move the track
  const moveX = currentIndex * cardWidth;
  track.style.transform = `translateX(-${moveX}px)`;

  // reset moving after the animation completes
  setTimeout(() => {
    moving = false;

    // Loop back to the first set of images when reaching the end
    if (currentIndex >= totalCards - visibleCards) {
      track.style.transition = 'none';
      track.style.transform = `translateX(0px)`;
      currentIndex = 0;
      setTimeout(() => {
        track.style.transition = 'transform 1s ease'; /* Restore slower transition */
      }, 50);
    }
  }, 1000); // match the slower transition time (1s)
  const video = document.getElementById('introVideo');
const videoContainer = document.getElementById('video-container');
const content = document.getElementById('content');

// Make sure video does NOT loop
video.loop = false;

// Listen for when the video ends
video.addEventListener('ended', () => {
  // Hide video container
  videoContainer.style.display = 'none';

  // Show the main content
  content.style.display = 'block';

  // Remove scroll lock on body if you have such styles
  document.body.classList.remove('lock-scroll');

  
});

}

