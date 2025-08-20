Here's a React component for a contact section that fits the luxurious and elegant design of your HouseIL website. This component is styled with a dark theme using pink and black colors.

// components/ContactSection.tsx

import React from 'react';
import './ContactSection.css'; // Assuming you will create a CSS file for styles

const ContactSection: React.FC = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Get in Touch</h2>
        <p className="contact-description">
          We would love to hear from you! Please fill out the form below or reach out to us directly.
        </p>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={4} required></textarea>
          </div>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;

### CSS (ContactSection.css)

You can create a CSS file named `ContactSection.css` to style the component according to your luxurious theme:

/* ContactSection.css */

.contact-section {
  background-color: #000; /* Black background */
  color: #ff69b4; /* Pink text */
  padding: 50px 20px;
  text-align: center;
}

.contact-container {
  max-width: 600px;
  margin: 0 auto;
}

.contact-title {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.contact-description {
  font-size: 1.2rem;
  margin-bottom: 30px;
}

.contact-form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 20px;
}

label {
  font-weight: bold;
  margin-bottom: 5px;
  display: block;
}

input, textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ff69b4; /* Pink border */
  border-radius: 5px;
  background-color: #222; /* Dark background for inputs */
  color: #fff; /* White text */
}

input:focus, textarea:focus {
  outline: none;
  border-color: #ff1493; /* Brighter pink on focus */
}

.submit-button {
  background-color: #ff69b4; /* Pink button */
  color: #000; /* Black text */
  padding: 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;
}

.submit-button:hover {
  background-color: #ff1493; /* Darker pink on hover */
}

### Usage

You can import and use the `ContactSection` component in your main application file or any other component as follows:

import React from 'react';
import ContactSection from './components/ContactSection';

const App: React.FC = () => {
  return (
    <div>
      {/* Other components */}
      <ContactSection />
      {/* Other components */}
    </div>
  );
};

export default App;

This setup provides a luxurious contact section that aligns with your high-end design vision for HouseIL.