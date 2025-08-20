'use client';

Here's a simple implementation of a Slider component in TypeScript for your luxury dark AirBNB website named HouseIL. This component uses styled-components for styling, which you can customize further to fit your elegant design in pink and black colors.

// components/ui/Slider.tsx

import React, { useState } from 'react';
import styled from 'styled-components';

const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
`;

const Slide = styled.div<{ active: boolean }>`
  display: ${({ active }) => (active ? 'block' : 'none')};
  width: 100%;
  height: 400px;
  background-color: black;
  color: pink;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  transition: opacity 0.5s ease-in-out;
`;

const Navigation = styled.div`
  position: absolute;
  top: 50%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  transform: translateY(-50%);
`;

const ArrowButton = styled.button`
  background: none;
  border: none;
  color: pink;
  font-size: 2rem;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: white;
  }
`;

const Slider: React.FC<{ slides: string[] }> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <SliderContainer>
      {slides.map((slide, index) => (
        <Slide key={index} active={index === currentSlide}>
          {slide}
        </Slide>
      ))}
      <Navigation>
        <ArrowButton onClick={prevSlide}>&lt;</ArrowButton>
        <ArrowButton onClick={nextSlide}>&gt;</ArrowButton>
      </Navigation>
    </SliderContainer>
  );
};

export default Slider;

### Usage Example

You can use the `Slider` component in your application like this:

import React from 'react';
import Slider from './components/ui/Slider';

const App: React.FC = () => {
  const slides = [
    'Welcome to HouseIL',
    'Luxury Awaits You',
    'Experience Elegance',
  ];

  return (
    <div>
      <h1>HouseIL</h1>
      <Slider slides={slides} />
    </div>
  );
};

export default App;

### Notes
- Make sure to install `styled-components` if you haven't already:

npm install styled-components @types/styled-components

- You can customize the styles further to match your desired design aesthetics.