import emailjs from '@emailjs/browser';
import { useRef } from 'react';


const App = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Verificar reCaptcha antes de enviar el formulario
    const recaptchaValue = document.querySelector('[name="g-recaptcha-response"]').value;
    if (!recaptchaValue) {
      alert('Por favor, marca la casilla de reCaptcha antes de enviar el formulario.');
      return;
    }

    emailjs.sendForm('service_wbcvfpc', 'template_wnfkk9p', form.current, 'mq3rHMWQRFUsXOFw2')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };
  return (
    <form ref={form} onSubmit={sendEmail} className='flex flex-col  max-w-md'>
      <label>Name</label>
      <input type="text" name="user_name" className='border border-zinc-800' />
      <label>Email</label>
      <input type="text" name="user_email" className='border border-zinc-800' />
      <label>Phone</label>
      <input type="text" name="user_phone" className='border border-zinc-800' />
      <label>Message</label>
      <textarea name="message" className='border border-zinc-800' />

      <div class="g-recaptcha" data-sitekey="6LcKQCEoAAAAAIrj-g-UdDBTfYdeQX3pW1wpbtgL"></div>

      <button type='submit' value="Submit"> Send</button>
    </form>
  )
}

export default App