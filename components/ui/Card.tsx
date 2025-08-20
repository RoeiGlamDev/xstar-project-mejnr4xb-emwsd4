Here's a simple implementation of a Card component in TypeScript for your luxury dark Airbnb website named HouseIL. This component is styled with a pink and black color scheme to match your design requirements.

// components/ui/Card.tsx

import React from 'react';
import styled from 'styled-components';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  price: string;
}

const CardContainer = styled.div`
  background-color: #1a1a1a;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 16px;
  color: #f8f8f8;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  color: #ff69b4; // Pink color
  margin: 0;
`;

const Description = styled.p`
  font-size: 1rem;
  margin: 8px 0;
`;

const Price = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  color: #ff69b4; // Pink color
`;

const Card: React.FC<CardProps> = ({ title, description, imageUrl, price }) => {
  return (
    <CardContainer>
      <Image src={imageUrl} alt={title} />
      <Content>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Price>{price}</Price>
      </Content>
    </CardContainer>
  );
};

export default Card;

### Explanation:
- **CardProps**: This interface defines the props that the Card component will accept, including `title`, `description`, `imageUrl`, and `price`.
- **Styled Components**: The component uses `styled-components` for styling. The card has a dark background with pink accents for the title and price.
- **Hover Effect**: The card has a subtle hover effect that lifts it slightly when the user hovers over it.
- **Image Handling**: The image is set to cover the card's width and has a fixed height.

### Usage:
You can use this `Card` component in your application by importing it and passing the required props:

import Card from './components/ui/Card';

// Example usage
<Card 
  title="Luxury Villa" 
  description="A beautiful luxury villa with stunning views." 
  imageUrl="https://example.com/image.jpg" 
  price="$500/night" 
/>

Make sure to install `styled-components` if you haven't already:

npm install styled-components
npm install @types/styled-components
 

This will ensure that your component is styled correctly and works seamlessly in your React application.