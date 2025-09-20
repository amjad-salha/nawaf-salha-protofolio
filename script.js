document.getElementById('contactForm').onsubmit = function(e) {
  e.preventDefault();
  document.getElementById('formMessage').innerText = 'تم إرسال رسالتك بنجاح! سنرد عليك قريباً.';
  this.reset();
};
