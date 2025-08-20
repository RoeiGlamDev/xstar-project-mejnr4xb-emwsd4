Here's a React component for the About section of your luxury dark Airbnb website named HouseIL. This component is styled with an elegant design in pink and black colors.

// components/AboutSection.tsx

import React from 'react';
import './AboutSection.css'; // Assuming you have a CSS file for styles

const AboutSection: React.FC = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <h1 className="about-title">Welcome to HouseIL</h1>
        <p className="about-description">
          Experience luxury like never before. At HouseIL, we offer exquisite accommodations that blend elegance with comfort. Our properties are designed to provide a unique and unforgettable stay, tailored to your every need.
        </p>
        <p className="about-description">
          Discover the perfect getaway in our meticulously curated homes, where every detail is crafted to ensure a high-end experience. Whether you're looking for a romantic escape or a lavish family vacation, HouseIL is your ultimate destination.
        </p>
        <p className="about-description">
          Join us in redefining luxury travel. Your dream stay awaits.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;

And here is a simple CSS file to style the component (`AboutSection.css`):

/* components/AboutSection.css */

.about-section {
  background-color: #000; /* Black background */
  color: #ff69b4; /* Pink text */
  padding: 50px 20px;
  text-align: center;
}

.about-title {
  font-size: 2.5rem;
  margin-bottom: 20px;
  font-weight: bold;
}

.about-description {
  font-size: 1.2rem;
  margin: 10px 0;
  line-height: 1.6;
}

Make sure to adjust the styles as needed to fit your overall design aesthetic. This component provides a clean and elegant presentation suitable for a luxury brand.