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




      <div className="container my-4">
      
      <div className="text-center">
        <p>If you have any questions or inquiries, feel free to reach out!</p>
        <a href="mailto:info@elfumarsltd.co.uk" className="btn btn-primary">
          Email Us
        </a>
      </div>
      <div className="text-center mt-4">
        <p>Email: <a href="mailto:info@elfumarsltd.co.uk">info@elfumarsltd.co.uk</a></p>
      </div>
    </div>






      <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card text-center shadow-sm border-light hover-effect">
            <div className="card-body">
              <h5 className="card-title text-primary">Our Address</h5>
              <div className="mt-3">
                
                <p>46a Wilford Crescent East, 46a Wilford Crescent East, Nottingham, England, NG2 2ED</p>
                
              </div>

              

              

              


              <div className="mt-3">

              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2404.5060702756914!2d-1.1466429229508168!3d52.93931650510006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879c3cc13466e1d%3A0x895e3ead015d9b21!2s46a%20Wilford%20Cres%20E%2C%20Nottingham%20NG2%202ED%2C%20UK!5e0!3m2!1sen!2s!4v1729001325944!5m2!1sen!2s" width="600" height="300" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>


              </div>


            </div>
          </div>
        </div>
      </div>
    </div>




      <Footer />
    </>
  );
};

export default ContactPage;
