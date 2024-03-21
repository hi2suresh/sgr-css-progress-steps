const panelDivs = document.querySelectorAll('.panel');
panelDivs.forEach((div) => {
  div.addEventListener('click', (e) => {
    // Get the currently active div
    const activeDiv = document.querySelector('.active');
    // Replace the current active div
    if (activeDiv !== e.target) {
      activeDiv.classList.remove('active');
      div.classList.add('active');
    }
  });
});
