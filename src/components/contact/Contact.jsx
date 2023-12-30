import React, { useRef } from "react";
import "./contact.css";
import emailjs from '@emailjs/browser';


export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_snuvl0q', 'template_idb0vkd', form.current, 'mAOviH54GWCYsfP_G')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className="contact section" id="contact">
      <h1 className="title">Get in touch</h1>
      <div className="section-subtitle">Contact Me</div>

      <div className="contact-container">
        <div className="contact-content">
          <h3 className="contact-title"> Talk to me</h3>
          <div className="contact-info">
            <div className="contact-card">
              <i className="uil uil-fast-mail contact-card-icon"></i>

              <h3 className="contact-card-title">Email</h3>
              <span className="contact-card-data">ayush190511@gmail.com</span>
              <a href="mailto:ayush190511@gmail.com" className="contact-button">
              Write Me<i class="uil uil-arrow-right contact-button-icon"></i>
              </a>
            </div>

            <div className="contact-card">
              <i className="uil uil-whatsapp contact-card-icon"></i>

              <h3 className="contact-card-title">Whatsapp</h3>
              <span className="contact-card-data">+91-9588502075</span>
              <a
                href="https://api.whatsapp.com/send?phone=919588502075&text=Hello"
                className="contact-button"
              >Write Me<i class="uil uil-arrow-right contact-button-icon"></i>
              </a>
            </div>

            <div className="contact-card">
              <i className="uil uil-instagram contact-card-icon"></i>

              <h3 className="contact-card-title">Instagram</h3>
              <span className="contact-card-data">ayush190511</span>
              <a
                href="http://www.instagram.com/ayush190511"
                className="contact-button"
              >Write Me<i class="uil uil-arrow-right contact-button-icon"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact-content">
          <h3 className="contact-title"> Write me your project</h3>

          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <div className="contact-form-div">
              <label className="contact-form-tag">Name</label>
              <input
                type="text"
                name="name"
                className="contact-form-input"
                placeholder="Insert your name"
                required
              />
            </div>

            <div className="contact-form-div">
              <label className="contact-form-tag">Email</label>
              <input
                type="email"
                name="email"
                className="contact-form-input"
                placeholder="Insert your email"
                required
              />
            </div>

            <div className="contact-form-div contact-form-area">
              <label className="contact-form-tag">Project</label>
              <textarea
                name="project"
                cols="30"
                rows="10"
                className="contact-form-input"
                placeholder="Write your project"
                required
              ></textarea>
            </div>
            <div className="buttons sendmebutton">
              <a href="#contact">
                <button>Send Message<i class="uil uil-message"></i></button>
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
