import React, { useRef, useState } from "react";
import { Footer, Navbar } from "../components";

import emailjs from '@emailjs/browser';



const ContactPage = () => {


  const [success, setSuccess] = useState('')
  const [error, setError] = useState('')


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    
    const formData = new FormData(form.current);
    
    
    const name = formData.get('from_name')
    const email = formData.get('from_email')
    const message = formData.get('message')
    

    if (!name || !email || !message) {
      setError('All fields are required!');
      return;
    }

    emailjs
      .sendForm('service_txh90rd', 'template_4uy1a6v', form.current, {
        publicKey: 'yvwxfMx8RiGY7BTwW',
      })
      .then(
        () => {
          form.current.reset()
          console.log('SUCCESS!');
          setSuccess(`Message send successfully! We'll get back to you soon!`);
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };







































  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Contact Us</h1>
        <hr />
        <div class="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
          <form ref={form} onSubmit={sendEmail}>
              <div class="form my-3">
                <label for="from_name">Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="from_name"
                  name="from_name"
                  placeholder="Enter your name"
                />
              </div>
              <div class="form my-3">
                <label for="Email">Email</label>
                <input
                  type="email"
                  class="form-control"
                   id="from_email"
                  name="from_email"
                  placeholder="name@example.com"
                />
              </div>
              <div class="form  my-3">
                <label for="message">Message</label>
                <textarea
                  rows={5}
                  class="form-control"
                  id="message"
                  name="message"
                  placeholder="Enter your message"
                />
              </div>
              <div className="text-center">
                <button class="my-2 px-4 mx-auto btn btn-dark" type="submit" > Send </button>
              </div>
            </form>

            {
              success && (<p className="text-success">{success}</p>)
              
            }


            {
              error && (<p className="text-danger">{error}</p>)
            }
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
