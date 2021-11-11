'use strict'

const typed = new Typed('.typed', {
  strings: [
    'Soy un frontend Developer',
    'Apasionado por el mundo de la web',
    'Soy Juan Montilla'
  ],
  typeSpeed: 75,
  startDelay: 300,
  backSpeed: 58,
  shuffle: false,
  backDelay: 1500,
  loop: true,
  loopCount: 2,
  showCursor: true,
  cursorChar: '_',
});

const typed2 = new Typed('#form-name', {
  strings: ['Juan Montilla'],
  typeSpeed: 70,
  startDelay: 300,
  backSpeed: 58,
  backDelay: 1500,
  loop: true,
  loopCount: 2,
  showCursor: false,
  attr: 'placeholder',
  bindInputFocusEvents: true,
})

const typed3 = new Typed('#form-email', {
  strings: ['juan@gmail.com'],
  typeSpeed: 70,
  startDelay: 300,
  backSpeed: 58,
  backDelay: 1500,
  loop: true,
  loopCount: 2,
  showCursor: false,
  attr: 'placeholder',
  bindInputFocusEvents: true,
})

const typed4 = new Typed('#form-message', {
  strings: ['Mensaje...'],
  typeSpeed: 70,
  startDelay: 300,
  backSpeed: 58,
  backDelay: 1500,
  loop: true,
  loopCount: 2,
  showCursor: false,
  attr: 'placeholder',
  bindInputFocusEvents: true,
})

const menuItem = document.querySelectorAll('ul li a');
menuItem.forEach(element => {
  element.addEventListener('click', function () {
    menuItem.forEach(list => list.classList.remove('is-active'));

    this.classList.add('is-active');
  })
})