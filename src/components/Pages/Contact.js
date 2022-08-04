
import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`Text required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  return (
    <section className='contactItems'>
      <h2 id="about" className="d-flex justify-content-center">Contact me</h2>
      <form id="contact-form" className='form d-flex align-items-start justify-content-center' onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input className='mx-1' type="text" name="name" defaultValue="Name" onBlur={handleChange} />
        </div>
        <br></br>
        <div>
          <label htmlFor="email">Email:</label>
          <input className='mx-1 ' type="email" name="email" defaultValue="Email" onBlur={handleChange} />
        </div>
        <br></br>
        <div className="mb-3 d-flex position-relative">
          <label htmlFor="message">Message:</label>
          <textarea name="message" className='mx-1 ' rows="5" defaultValue="Message" onBlur={handleChange} />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <br></br>
        <button data-testid="button" type="submit">Submit</button>
      </form>
    </section>
  );
}
export default Contact;
