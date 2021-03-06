const video = document.getElementById('video');
const playBtn = document.getElementById('play');
const stopBtn = document.getElementById('stop');
const progressBar = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

// // // Functions // // //

// Play and pause video using HTML5 video tag API
function toggleVideoStatus() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

// Update play/pause button
function updatePlayBtn() {
  if (video.paused) {
    playBtn.innerHTML = '<i class="fa fa-play fa-2x"></i>';
  } else {
    playBtn.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
  }
}

// Update progress and timestamp
function updateProgressBar() {
  progressBar.value = (video.currentTime / video.duration) * 100;

  // Get minutes
  let minutes = Math.floor(video.currentTime / 60);
  if (minutes < 10) {
    minutes = '0' + String(minutes);
  }

  // Get seconds
  let seconds = Math.floor(video.currentTime % 60);
  if (seconds < 10) {
    seconds = '0' + String(seconds);
  }

  timestamp.innerHTML = `${minutes}:${seconds}`;
}

// Set video time to progress
function setVideoProgress() {
  video.currentTime = (+progress.value * video.duration) / 100;
}

// Stop video
function stopVideo() {
  video.currentTime = 0;
  video.pause();
}

// // // Event Listeners // // //

// Video listeners
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayBtn);
video.addEventListener('play', updatePlayBtn);
video.addEventListener('timeupdate', updateProgressBar);

playBtn.addEventListener('click', toggleVideoStatus);

stopBtn.addEventListener('click', stopVideo);

progressBar.addEventListener('change', setVideoProgress);
