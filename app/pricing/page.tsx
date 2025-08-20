Here's a sample `pricingpage` component for your luxury dark AirBNB website named HouseIL, designed with an elegant and high-end aesthetic in pink and black colors. This code is written in TypeScript and uses React.

// app/pricing/page.tsx

import React from 'react';
import './PricingPage.css'; // Assuming you have a CSS file for styling

const PricingPage: React.FC = () => {
  return (
    <div className="pricing-page">
      <header className="pricing-header">
        <h1>Luxury Pricing</h1>
        <p>Experience the elegance of HouseIL</p>
      </header>
      <section className="pricing-options">
        <div className="pricing-card">
          <h2>Standard Suite</h2>
          <p className="price">$200/night</p>
          <ul>
            <li>1 King Bed</li>
            <li>Free Wi-Fi</li>
            <li>Complimentary Breakfast</li>
          </ul>
          <button className="btn-book">Book Now</button>
        </div>
        <div className="pricing-card">
          <h2>Deluxe Suite</h2>
          <p className="price">$350/night</p>
          <ul>
            <li>1 King Bed + Sofa Bed</li>
            <li>Free Wi-Fi</li>
            <li>Complimentary Breakfast</li>
            <li>Private Balcony</li>
          </ul>
          <button className="btn-book">Book Now</button>
        </div>
        <div className="pricing-card">
          <h2>Presidential Suite</h2>
          <p className="price">$600/night</p>
          <ul>
            <li>2 King Beds</li>
            <li>Free Wi-Fi</li>
            <li>Complimentary Breakfast</li>
            <li>Private Pool</li>
            <li>Personal Concierge</li>
          </ul>
          <button className="btn-book">Book Now</button>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;

### CSS (PricingPage.css)

You can create a CSS file named `PricingPage.css` to style the component according to your luxury theme:

/* PricingPage.css */

body {
  background-color: #000;
  color: #fff;
  font-family: 'Arial', sans-serif;
}

.pricing-page {
  padding: 20px;
  text-align: center;
}

.pricing-header {
  margin-bottom: 40px;
}

.pricing-header h1 {
  color: #ff69b4; /* Pink color */
  font-size: 2.5em;
}

.pricing-header p {
  font-size: 1.2em;
}

.pricing-options {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.pricing-card {
  background-color: #222;
  border: 1px solid #ff69b4; /* Pink border */
  border-radius: 10px;
  padding: 20px;
  margin: 10px;
  width: 300px;
  transition: transform 0.3s;
}

.pricing-card:hover {
  transform: scale(1.05);
}

.pricing-card h2 {
  color: #ff69b4; /* Pink color */
}

.price {
  font-size: 1.5em;
  color: #ff69b4; /* Pink color */
}

.btn-book {
  background-color: #ff69b4; /* Pink button */
  color: #000;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn-book:hover {
  background-color: #ff1493; /* Darker pink on hover */
}

### Notes:
- Make sure to adjust the styles in `PricingPage.css` to fit your overall design theme.
- You can add more features or modify the component as per your requirements.