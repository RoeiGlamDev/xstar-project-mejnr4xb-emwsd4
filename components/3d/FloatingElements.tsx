Certainly! Below is a React component written in TypeScript for a floating element that could be used in a luxury dark-themed Airbnb website named HouseIL. The component is styled with pink and black colors to match your design theme.

// components/3d/FloatingElements.tsx

import React from 'react';
import styled from 'styled-components';

const FloatingContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #000; /* Dark background */
`;

const FloatingElement = styled.div<{ size: number; delay: number }>`
  position: absolute;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  background-color: #ff69b4; /* Pink color */
  border-radius: 50%;
  opacity: 0.7;
  animation: float ${(props) => props.delay}s ease-in-out infinite;

  @keyframes float {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-20px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

const FloatingElements: React.FC = () => {
  const elements = [
    { size: 60, delay: 5 },
    { size: 80, delay: 7 },
    { size: 100, delay: 6 },
    { size: 50, delay: 8 },
    { size: 70, delay: 4 },
  ];

  return (
    <FloatingContainer>
      {elements.map((element, index) => (
        <FloatingElement
          key={index}
          size={element.size}
          delay={element.delay}
          style={{
            left: `${Math.random() * 100}vw`,
            top: `${Math.random() * 100}vh`,
          }}
        />
      ))}
    </FloatingContainer>
  );
};

export default FloatingElements;

### Explanation:
- **FloatingContainer**: A styled div that serves as the container for the floating elements, with a dark background.
- **FloatingElement**: A styled div that represents each floating element. It has a pink color, rounded shape, and a floating animation.
- **FloatingElements Component**: This component generates multiple floating elements with random positions and sizes. The animation makes them float up and down.

### Usage:
You can import and use the `FloatingElements` component in your main application or any other component where you want to display these floating elements.

import FloatingElements from './components/3d/FloatingElements';

// Inside your main component
<FloatingElements />

Make sure to have `styled-components` installed in your project to use the styled components. You can install it using:

npm install styled-components

This component will add a luxurious and elegant touch to your HouseIL website.