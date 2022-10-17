'use strict';

const main = document.querySelector('main');
const mode = document.querySelector('#mode');
const check = document.querySelector('#checkbox');
const checkBox = document.querySelector('.btn__toggler');
const checkBall = document.querySelector('.btn__ball');
const headers = document.querySelectorAll('.header');
const blocks = document.querySelectorAll('.block');

check.addEventListener('click', function (e) {
  // LIGHT MODE
  if (e.target.checked) {
    mode.textContent = 'Light mode';
    main.style.backgroundImage = 'var(--col-bg-light)';
    main.style.color = 'var(--col-text-light)';
    checkBox.style.background = 'var(--col-toggle-light)';
    checkBall.style.background = 'white';
    // add bg color & hover effect on each block
    blocks.forEach((block) => {
      block.style.background = 'var(--col-card-light)';
      block.addEventListener('mouseover', function () {
        block.style.background = 'hsl(229, 27%, 92%)';
      });
      block.addEventListener('mouseout', function () {
        block.style.background = 'var(--col-card-light)';
      });
    });
    headers.forEach((header) => {
      header.style.color = 'var(--col-text-imp-light)';
    });
  } else {
    // DARK MODE
    mode.textContent = 'Dark mode';
    // clear inline styles
    main.style = '';
    main.style = '';
    checkBox.style = '';
    checkBall.style = '';

    headers.forEach((header) => {
      header.style = '';
    });
    blocks.forEach((block) => {
      block.addEventListener('mouseover', function () {
        block.style.background = '';
      });
      block.addEventListener('mouseout', function () {
        block.style.background = 'var(--col-card-dark)';
      });
      block.style = '';
    });
  }
});
