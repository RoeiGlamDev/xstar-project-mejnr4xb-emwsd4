Here's a `Footer.tsx` component for your luxury dark AirBNB website named HouseIL, designed with an elegant and high-end aesthetic in pink and black colors. This component includes links and social media icons that are commonly found in footer sections.

import React from 'react';
import './Footer.css'; // Assuming you have a CSS file for styling

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-links">
                    <h4>About Us</h4>
                    <a href="/about">Our Story</a>
                    <a href="/careers">Careers</a>
                    <a href="/contact">Contact</a>
                </div>
                <div className="footer-links">
                    <h4>Help</h4>
                    <a href="/faq">FAQ</a>
                    <a href="/support">Support</a>
                    <a href="/terms">Terms of Service</a>
                    <a href="/privacy">Privacy Policy</a>
                </div>
                <div className="footer-social">
                    <h4>Follow Us</h4>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} HouseIL. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;

### CSS (Footer.css)
You can create a `Footer.css` file to style the footer according to your luxury theme:

.footer {
    background-color: #000; /* Black background */
    color: #ff69b4; /* Pink text */
    padding: 20px;
    text-align: center;
}

.footer-content {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}

.footer-links {
    margin: 10px;
}

.footer-links h4 {
    margin-bottom: 10px;
}

.footer-links a {
    color: #ff69b4; /* Pink links */
    text-decoration: none;
}

.footer-links a:hover {
    text-decoration: underline;
}

.footer-bottom {
    margin-top: 20px;
    font-size: 14px;
}

### Notes
- Ensure you have the necessary routing set up for the links in the footer.
- You can customize the styles further to match your overall website design.
- The social media links are placeholders; replace them with actual links to your social media profiles.