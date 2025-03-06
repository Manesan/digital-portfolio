const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';
   btn.disabled = true;

   const serviceID = 'default_service';
   const templateID = 'template_nw22wdw';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Message';
      alert('Your message has been sent to Manesan!');
      document.getElementById('form').reset();
    }, (err) => {
      btn.value = 'Send Message';
      console.error(JSON.stringify(err));
      alert('There was an error sending your message, please try again later.');
    })
    .finally(() => {
        // Re-enable the submit button after 10 seconds
        setTimeout(() => {
          btn.disabled = false;
        }, 10000); // Disable for 10 seconds
      });
});