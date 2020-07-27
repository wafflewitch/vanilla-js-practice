const toggleBtn = document.getElementById('toggle-btn');
const openModalBtn = document.getElementById('open-modal-btn');
const closeModalBtn = document.getElementById('close-modal-btn');
const modal = document.getElementById('modal');

// Toggle side menu
toggleBtn.addEventListener('click', () =>
  document.body.classList.toggle('show-nav')
);

// Show modal
openModalBtn.addEventListener('click', () => modal.classList.add('show-modal'));

// Hide modal
closeModalBtn.addEventListener('click', () =>
  modal.classList.remove('show-modal')
);

// Hide modal on outside click
window.addEventListener('click', (e) =>
  e.target == modal ? modal.classList.remove('show-modal') : false
);
