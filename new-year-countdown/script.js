const remainingDays = document.getElementById('days');
const remainingHours = document.getElementById('hours');
const remainingMinutes = document.getElementById('minutes');
const remainingSeconds = document.getElementById('seconds');
const countdownContainer = document.getElementById('countdown');
const yearElement = document.getElementById('year');
const loadingImg = document.getElementById('loading');

const nextYear = new Date().getFullYear() + 1;

const newYearTime = new Date(`January 01 ${nextYear} 00:00:00`);

yearElement.innerText = nextYear;

// // // Functions // // //

// Update values for days, hours, minutes, seconds in countdown container
function updateCountdown() {
  const currentTime = new Date();
  const diff = newYearTime - currentTime;

  // Convert milliseconds to seconds, then minutes, then hours, then days
  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;

  // Add values to DOM
  remainingDays.innerHTML = d;
  remainingHours.innerHTML = h < 10 ? '0' + h : h;
  remainingMinutes.innerHTML = m < 10 ? '10' + m : m;
  remainingSeconds.innerHTML = s < 10 ? '10' + s : s;
}

// Show spinner before countdown
setTimeout(() => {
  loading.remove();
  countdownContainer.style.display = 'flex';
}, 1000);

// Invoke updateCountdown every second
setInterval(updateCountdown, 1000);
