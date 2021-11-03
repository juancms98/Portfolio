'use strict'

const typed = new Typed('.typed', {
  strings: [
    'Soy Juan Montilla',
    'Soy un frontend Developer',
    'Apasionado por el mundo de la web'
  ],
  typeSpeed: 70,
  startDelay: 300,
  backSpeed: 58,
  shuffle: false,
  backDelay: 1500,
  loop: true,
  loopCount: false,
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