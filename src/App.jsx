import emailjs from '@emailjs/browser';
import { useRef } from 'react';


const App = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

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
      <input type="text" name="user_phone" className='border border-zinc-800'/>
      <label>Message</label>
      <textarea name="message" className='border border-zinc-800'/>

      <div class="g-recaptcha" data-sitekey="6LcKQCEoAAAAAIrj-g-UdDBTfYdeQX3pW1wpbtgL"></div>

      <button type='submit'> Send</button>
    </form>
  )
}

export default App