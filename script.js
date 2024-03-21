const progress = document.querySelector('.progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circleDivs = document.querySelectorAll('.circle');
let nextActiveDivNumber = document.querySelectorAll('.active').length;

next.addEventListener('click', (e) => {
  if (nextActiveDivNumber < circleDivs.length) {
    prev.removeAttribute('disabled');
    // Change Progress BarStyle
    progress.style.backgroundColor = '#3498db';
    progress.style.width = `${nextActiveDivNumber * 33.33}%`;
    circleDivs[nextActiveDivNumber].classList.add('active');
    nextActiveDivNumber++;
  }
  if (nextActiveDivNumber === circleDivs.length) {
    next.setAttribute('disabled', true);
  }
});

prev.addEventListener('click', () => {
  if (nextActiveDivNumber > 1) {
    next.removeAttribute('disabled');
    nextActiveDivNumber--;
    progress.style.width = `${(nextActiveDivNumber - 1) * 33.33}%`;
    circleDivs[nextActiveDivNumber].classList.remove('active');
  }
  if (nextActiveDivNumber === 1) {
    progress.style.backgroundColor = '#e0e0e0';
    prev.setAttribute('disabled', true);
  }
});
