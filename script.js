document.getElementById('contactForm').onsubmit = function(e) {
  e.preventDefault();
  let name = this.name.value.trim();
  let email = this.email.value.trim();
  let msg = this.message.value.trim();
  let msgDiv = document.getElementById('formMessage');
  if (name.length < 2) {
    msgDiv.innerText = "يرجى كتابة الاسم بشكل صحيح.";
    msgDiv.style.color = "#d32626";
    return;
  }
  if (!email.match(/^[\w\.-]+@[\w\.-]+\.\w{2,4}$/)) {
    msgDiv.innerText = "يرجى إدخال بريد إلكتروني صحيح.";
    msgDiv.style.color = "#d32626";
    return;
  }
  if (msg.length < 5) {
    msgDiv.innerText = "يرجى كتابة رسالة واضحة.";
    msgDiv.style.color = "#d32626";
    return;
  }
  msgDiv.innerText = 'تم إرسال رسالتك بنجاح! سنرد عليك قريباً.';
  msgDiv.style.color = "#389e3d";
  this.reset();
};
