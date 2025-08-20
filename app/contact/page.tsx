Here's a sample `contactpage` component for your luxury dark AirBNB website named HouseIL, designed with an elegant and high-end aesthetic in pink and black colors. This code is written in TypeScript and follows React conventions.

// app/contact/page.tsx

import React from 'react';
import styles from './ContactPage.module.css';

const ContactPage: React.FC = () => {
    return (
        <div className={styles.contactPage}>
            <h1 className={styles.title}>Contact Us</h1>
            <p className={styles.description}>
                We would love to hear from you! Please fill out the form below and we will get back to you as soon as possible.
            </p>
            <form className={styles.contactForm}>
                <div className={styles.formGroup}>
                    <label htmlFor="name" className={styles.label}>Name</label>
                    <input type="text" id="name" className={styles.input} required />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.label}>Email</label>
                    <input type="email" id="email" className={styles.input} required />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="message" className={styles.label}>Message</label>
                    <textarea id="message" className={styles.textarea} required></textarea>
                </div>
                <button type="submit" className={styles.submitButton}>Send Message</button>
            </form>
        </div>
    );
};

export default ContactPage;

### CSS Module (ContactPage.module.css)

You can create a CSS module to style the component. Here's an example of how you might style it:

/* app/contact/ContactPage.module.css */

.contactPage {
    background-color: #000;
    color: #fff;
    padding: 40px;
    border-radius: 8px;
    max-width: 600px;
    margin: auto;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
}

.title {
    color: #ff69b4; /* Pink color */
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 20px;
}

.description {
    text-align: center;
    margin-bottom: 30px;
}

.contactForm {
    display: flex;
    flex-direction: column;
}

.formGroup {
    margin-bottom: 20px;
}

.label {
    margin-bottom: 5px;
    font-weight: bold;
}

.input, .textarea {
    padding: 10px;
    border: 1px solid #ff69b4; /* Pink border */
    border-radius: 4px;
    background-color: #222;
    color: #fff;
    font-size: 1rem;
}

.input:focus, .textarea:focus {
    outline: none;
    border-color: #ff1493; /* Darker pink on focus */
}

.textarea {
    resize: vertical;
    height: 100px;
}

.submitButton {
    padding: 10px;
    background-color: #ff69b4; /* Pink background */
    color: #000;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s;
}

.submitButton:hover {
    background-color: #ff1493; /* Darker pink on hover */
}

### Usage

Make sure to import and use the `ContactPage` component in your main application or routing setup as needed. This component provides a simple contact form styled to fit the luxury aesthetic of your HouseIL website.