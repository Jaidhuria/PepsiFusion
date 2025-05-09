const video = document.getElementById('introVideo');
const videoContainer = document.getElementById('video-container');
const content = document.getElementById('content');

video.addEventListener('ended', () => {
  
  videoContainer.style.display = 'none';
  content.style.display = 'block';

  document.body.classList.remove('lock-scroll');
});
