import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_h67kaah', 'template_6pn91eo', form.current, '-L8CRnYawO-XisnMj')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (

    
    <div className='pt-5 '>
    <h2 className='text-center'>Contact Form</h2>
    <legend className='text-center'>We'll get back to you soonest</legend>
    <form onSubmit={sendEmail} ref={form} className="mt-5 mb-3">
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name:
        </label>
        <input type="text" className="form-control" id="name" name="name" />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email:
        </label>
        <input type="email" className="form-control" id="email" name="email" />
      </div>
      <div className="mb-3">
        <label htmlFor="message" className="form-label">
          Message:
        </label>
        <textarea className="form-control" id="message" name="message"></textarea>
      </div>
      <button type="submit" className="btn btn-primary ">
        Send
      </button>
    </form>
  </div>

  );
};

export default ContactForm;
