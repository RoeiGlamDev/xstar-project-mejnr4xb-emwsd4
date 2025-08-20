Here's a React component for a `GlassCard` that fits the luxurious dark theme of your AirBNB website named HouseIL. This component uses styled-components for styling, which allows for a clean and elegant design. Make sure to install `styled-components` if you haven't already.

// components/ui/GlassCard.tsx

import React from 'react';
import styled from 'styled-components';

interface GlassCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const CardContainer = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: relative;
  color: white;
  width: 300px;
  margin: 20px;
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 20px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin: 0;
  color: #ff69b4; // Pink color
`;

const Description = styled.p`
  font-size: 1rem;
  color: #e0e0e0; // Light gray for better readability
`;

const GlassCard: React.FC<GlassCardProps> = ({ title, description, imageUrl }) => {
  return (
    <CardContainer>
      <Image src={imageUrl} alt={title} />
      <Content>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Content>
    </CardContainer>
  );
};

export default GlassCard;

### Usage Example

You can use the `GlassCard` component in your application like this:

import React from 'react';
import GlassCard from './components/ui/GlassCard';

const App = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', backgroundColor: '#000', padding: '20px' }}>
      <GlassCard
        title="Luxury Villa"
        description="Experience the ultimate luxury in this stunning villa."
        imageUrl="https://example.com/villa.jpg"
      />
      <GlassCard
        title="Modern Apartment"
        description="Stay in a chic and modern apartment in the heart of the city."
        imageUrl="https://example.com/apartment.jpg"
      />
    </div>
  );
};

export default App;

### Notes
- Ensure you have `styled-components` installed in your project. You can install it using:
    npm install styled-components
  npm install @types/styled-components --save-dev
  - Adjust the `imageUrl` to point to actual images you want to display.
- You can customize the styles further to match your specific design requirements.