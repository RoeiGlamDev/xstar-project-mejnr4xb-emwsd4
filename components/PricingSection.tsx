Here's a React component for a pricing section tailored for your luxury Airbnb website, HouseIL. This component is designed with an elegant and high-end aesthetic in mind, using pink and black colors.

// components/PricingSection.tsx

import React from 'react';
import './PricingSection.css'; // Importing CSS for styling

const PricingSection: React.FC = () => {
  const pricingOptions = [
    {
      title: 'Standard Room',
      price: '$150/night',
      description: 'A cozy room with luxurious amenities and a beautiful view.',
    },
    {
      title: 'Deluxe Suite',
      price: '$250/night',
      description: 'Spacious suite with premium furnishings and a private balcony.',
    },
    {
      title: 'Luxury Villa',
      price: '$500/night',
      description: 'An exquisite villa with a private pool and top-notch services.',
    },
  ];

  return (
    <section className="pricing-section">
      <h2 className="pricing-title">Our Pricing</h2>
      <div className="pricing-cards">
        {pricingOptions.map((option, index) => (
          <div className="pricing-card" key={index}>
            <h3 className="card-title">{option.title}</h3>
            <p className="card-price">{option.price}</p>
            <p className="card-description">{option.description}</p>
            <button className="card-button">Book Now</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;

### CSS (PricingSection.css)

You can create a CSS file named `PricingSection.css` to style the component. Here's an example of how you might style it:

/* components/PricingSection.css */

.pricing-section {
  background-color: black;
  color: pink;
  padding: 50px 20px;
  text-align: center;
}

.pricing-title {
  font-size: 2.5rem;
  margin-bottom: 40px;
}

.pricing-cards {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.pricing-card {
  background-color: #222;
  border: 2px solid pink;
  border-radius: 10px;
  padding: 20px;
  width: 300px;
  transition: transform 0.3s;
}

.pricing-card:hover {
  transform: scale(1.05);
}

.card-title {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.card-price {
  font-size: 1.25rem;
  margin: 10px 0;
}

.card-description {
  font-size: 1rem;
  margin-bottom: 20px;
}

.card-button {
  background-color: pink;
  color: black;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;
}

.card-button:hover {
  background-color: #ff69b4; /* A lighter pink for hover effect */
}

### Usage

To use the `PricingSection` component, simply import it into your main application file or any other component where you want to display the pricing section:

import PricingSection from './components/PricingSection';

// Inside your main component
<PricingSection />

This setup provides a luxurious and elegant pricing section for your HouseIL website, aligning with the high-end design you are aiming for.