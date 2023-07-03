import { useState } from 'react';

import '../contact/Contacts.css';

const Contacts = () => {
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [message, setMessage] = useState('');

  // const submitHandler = (e) => {
  //   e.preventDefault();

  //   if (!name || !email || !message) {
  //     alert('All feilds are mandatory');
  //   } else if (!checkMail) {
  //     alert('email invalid');
  //   }
  // };

  // const checkMail = () => {
  //   const mailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  //   return mailPattern.test(email);
  // };

  return (
    <div className='contact' id='contact'>
      <h2>Contact me</h2>
      <p>Get in touch</p>
      <article className='card'>
        <h3 className='title'>E-mail</h3>
        <a href='mailto:manojbharathi00@gmail.com'>manojbharathi00@gmail.com</a>
      </article>
      <article className='card'>
        <h3 className='title'>Whatsapp</h3>
        <p>6381552516</p>
        <a href='https://api.whatsapp.com/send/?phone=+916381552516'>
          send message
        </a>
      </article>
      <article className='card'>
        <h3 className='title'>Instagram</h3>
      </article>
      <form className='input-container'>
        <div>
          <input type='text' placeholder='Your Name' />
        </div>
        <div>
          <input type='email' placeholder='Your mail id' />
        </div>
        <div>
          <textarea
            name='message'
            rows='7'
            placeholder='Your message'
            required
          ></textarea>
        </div>
        <button type='submit'></button>
      </form>
    </div>
  );
};

export default Contacts;
