'use strict';
const modal = document.querySelector('.modal');
const btnShowModal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
function ShowModal() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}
function hideModla() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}
for (let i = 0; i < btnShowModal.length; i++)
  btnShowModal[i].addEventListener('click', ShowModal);

btnCloseModal.addEventListener('click', hideModla);
overlay.addEventListener('click', hideModla);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    hideModla();
  }
});
