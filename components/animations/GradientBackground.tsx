Here's a React component for a gradient background that fits your luxury dark AirBNB website theme, using pink and black colors. This component is written in TypeScript and includes animations for a smooth gradient transition.

// components/animations/GradientBackground.tsx

import React from 'react';
import styled, { keyframes } from 'styled-components';

const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const GradientBackgroundContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(270deg, #000000, #ff007f, #000000);
  background-size: 400% 400%;
  animation: ${gradientAnimation} 15s ease infinite;
  z-index: -1; // Ensure it stays behind other content
`;

const GradientBackground: React.FC = () => {
  return <GradientBackgroundContainer />;
};

export default GradientBackground;

### Explanation:
- **Styled Components**: This code uses `styled-components` for styling. Make sure to install it if you haven't already:
    npm install styled-components
  npm install @types/styled-components
  - **Animation**: The `keyframes` create a smooth transition effect for the gradient background.
- **Gradient Colors**: The gradient transitions between black and a vibrant pink (`#ff007f`), which aligns with your luxury theme.
- **Container**: The `GradientBackgroundContainer` is set to cover the entire viewport and is positioned behind other content using `z-index`.

You can use this `GradientBackground` component in your main application layout to provide a luxurious backdrop for your HouseIL website.