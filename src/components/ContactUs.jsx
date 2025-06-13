import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import './ContactUs.css';

function ContactUs() {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'Yservice_nisniyf', // Replace with your EmailJS service ID
      'template_lyuygrf', // Replace with your EmailJS template ID
      form.current,
      'QnjlMQx68-FRBlhpR' // Replace with your EmailJS user ID
    ).then(
      (result) => {
        console.log(result.text);
        setStatus('Message sent successfully!');
        e.target.reset();
      },
      (error) => {
        console.log(error.text);
        setStatus('Failed to send the message. Please try again.');
      }
    );
  };

  return (
    <>
      <section className="contact-section" id="contact">
        <h2 className="contact-title">Let’s Connect</h2>
        <p className="contact-subtitle">We’d love to hear from you — reach out anytime!</p>

        <div className="contact-content">
          <form ref={form} className="contact-form" onSubmit={sendEmail}>
            <input type="text" name="user_name" placeholder="Your Name" required />
            <input type="email" name="user_email" placeholder="Your Email" required />
            <input type="text" name="subject" placeholder="Subject" />
            <textarea name="message" rows="5" placeholder="Your Message..." required></textarea>
            <button type="submit">Send Message</button>
          </form>

          {status && <p className="status-message">{status}</p>}

          <div className="contact-info">
            <h3>Reach Us At</h3>
            <p><strong>Email:</strong> angelaamandi2006@gmail.com</p>
            <p><strong>Location:</strong> Colombo, Sri Lanka</p>

            <div className="social-icons">
              <a href="https://www.facebook.com/share/16X9eTFgDt/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com/angela.guruge?igsh=aXl6NnZ3bmh1aTkz" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
  <p>
    <a
      href="https://chamikamunithunga.github.io/Chamika.M/"  // Replace with your actual URL
      target="_blank"
      rel="noopener noreferrer"
      className="footer-link"
    >
      Chamika.M
    </a> © 2025. All Rights Reserved.
  </p>
</footer>

    </>
  );
}

export default ContactUs;
