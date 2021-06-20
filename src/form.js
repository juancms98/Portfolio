'use strict'

const contact = document.querySelector('#contact');
const buttonMailto = document.querySelector('#send');

contact.addEventListener('submit', handleSubmit);

async function handleSubmit(e) {
  e.preventDefault();
  const form = new FormData(this);
  const response = await fetch(this.action, {
    method: this.method,
    body: form,
    headers: {
      'Accept': 'application/json'
    }
  })
  if (response.ok) {
    this.reset();
    alert('Gracias por contactarme, pronto te estaré respondiendo');
  }
}