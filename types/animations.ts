Certainly! Below is a sample `animationtypes.ts` file for your luxury dark AirBNB website named HouseIL. This file defines some animation types that you can use in your React components. The animations are designed to fit the elegant and high-end design you described, using pink and black colors.

```typescript
// src/animations/animationtypes.ts

import { keyframes } from 'styled-components';

// Fade In Animation
export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// Slide In Animation
export const slideIn = keyframes`
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

// Bounce Animation
export const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
`;

// Pulse Animation
export const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

// Rotate Animation
export const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

// Fade Out Animation
export const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

// Exporting all animations
export const animations = {
  fadeIn,
  slideIn,
  bounce,
  pulse,
  rotate,
  fadeOut,
};
```

### Usage Example

You can use these animations in your styled components like this:

```typescript
import styled from 'styled-components';
import { animations } from './animations/animationtypes';

const AnimatedDiv = styled.div`
  animation: ${animations.fadeIn} 0.5s ease-in-out;
`;

const AnotherAnimatedDiv = styled.div`
  animation: ${animations.slideIn} 0.5s ease-in-out;
`;
```

This setup allows you to create elegant animations that enhance the user experience on your luxury dark AirBNB website. Adjust the animation durations and easing functions as needed to fit your design aesthetic.