import { useState } from 'react';
import '../contact/Contacts.css';

const Contacts = () => {
  const [users, setUsers] = useState({ name: '', email: '', message: '' });

  const { name, email, message } = users;

  function handleOnchange(event) {
    const value = event.target.value;
    const key = event.target.name;
    setUsers({ ...users, [key]: value });
  }
  function submitHandler() {
    setUsers({ name: '', email: '', message: '' });
  }

  return (
    <div className='contact' id='contact'>
      <h2 className='title-contact'>Contact me</h2>
      <div className='contact-container'>
        <div className='total-cards'>
          <article className='card'>
            <h3 className='title'>E-mail</h3>
            <a href='mailto:manojbharathi00@gmail.com'>
              manojbharathi00@gmail.com
            </a>
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
        </div>
        <form
          className='form'
          action='https://formsubmit.co/manojbharathi00@gmail.com'
          method='POST'
          onChange={(event) => handleOnchange(event)}
        >
          <div>
            <input
              type='text'
              placeholder='Your Name'
              name='name'
              onChange={(event) => handleOnchange(event)}
              value={name}
              required
            />
          </div>
          <div>
            <input
              type='email'
              name='email'
              value={email}
              placeholder='Your mail id'
              onChange={(event) => handleOnchange(event)}
              required
            />
          </div>
          <div>
            <textarea
              type='text'
              name='message'
              rows='7'
              placeholder='Your message'
              onChange={(event) => handleOnchange(event)}
              value={message}
              required
            ></textarea>
          </div>
          <div>
            <button className='btn-submit' type='submit'>
              submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
