'use client';

Certainly! Below is a React component for a ScrollReveal animation using TypeScript. This component can be used to create elegant scroll animations for your luxury dark Airbnb website, "HouseIL," with a focus on a high-end design in pink and black colors.

// components/animations/ScrollReveal.tsx

import React, { useEffect, useRef } from 'react';
import ScrollReveal from 'scrollreveal';

interface ScrollRevealProps {
  children: React.ReactNode;
  duration?: number;
  delay?: number;
  distance?: string;
  origin?: 'top' | 'bottom' | 'left' | 'right';
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  duration = 1000,
  delay = 200,
  distance = '30px',
  origin = 'bottom',
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      ScrollReveal().reveal(ref.current, {
        duration,
        delay,
        distance,
        origin,
        opacity: 0,
      });
    }
  }, [duration, delay, distance, origin]);

  return <div ref={ref}>{children}</div>;
};

export default ScrollReveal;

### Explanation:
- **Imports**: The component imports React and necessary hooks, as well as the `ScrollReveal` library.
- **Props**: The `ScrollRevealProps` interface defines the props that can be passed to the component, including optional properties for animation duration, delay, distance, and origin.
- **Ref**: A `ref` is created to attach to the DOM element that will be animated.
- **Effect**: The `useEffect` hook initializes the ScrollReveal animation when the component mounts.
- **Return**: The component returns a `div` that wraps the children passed to it, allowing for any content to be animated.

### Usage Example:
You can use the `ScrollReveal` component in your application like this:

import React from 'react';
import ScrollReveal from './components/animations/ScrollReveal';

const ExampleComponent: React.FC = () => {
  return (
    <ScrollReveal duration={800} delay={300} distance="50px" origin="top">
      <h1 style={{ color: '#ff69b4' }}>Welcome to HouseIL</h1>
      <p style={{ color: '#fff' }}>Experience luxury like never before.</p>
    </ScrollReveal>
  );
};

export default ExampleComponent;

Make sure to install the `scrollreveal` library if you haven't already:

npm install scrollreveal

This setup will help you create elegant scroll animations that fit the luxurious theme of your website.