Certainly! Below is a sample `lib/animations.ts` file for your luxury dark AirBNB website named HouseIL. This file includes some basic animations that you might find useful for your components. The animations are defined using `framer-motion`, a popular library for animations in React.

Make sure to install `framer-motion` if you haven't already:

```bash
npm install framer-motion
```

Here’s the `lib/animations.ts` file:

```typescript
// lib/animations.ts
import { Variants } from 'framer-motion';

// Fade in animation
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

// Slide in from the left animation
export const slideInLeft: Variants = {
  hidden: { x: '-100%', opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

// Slide in from the right animation
export const slideInRight: Variants = {
  hidden: { x: '100%', opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

// Scale up animation
export const scaleUp: Variants = {
  hidden: { scale: 0 },
  visible: { scale: 1 },
};

// Bounce animation
export const bounce: Variants = {
  hidden: { y: 0 },
  visible: {
    y: [0, -10, 0],
    transition: { duration: 0.5, repeat: Infinity, repeatType: 'reverse' },
  },
};

// Rotate animation
export const rotate: Variants = {
  hidden: { rotate: 0 },
  visible: { rotate: 360 },
};

// Fade in and slide up animation
export const fadeInSlideUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default {
  fadeIn,
  slideInLeft,
  slideInRight,
  scaleUp,
  bounce,
  rotate,
  fadeInSlideUp,
};
```

### Explanation:
- Each animation is defined as a `Variants` object, which specifies the different states of the animation (e.g., `hidden` and `visible`).
- You can use these animations in your components by importing them and applying them to your elements using the `motion` components from `framer-motion`.

### Usage Example:
Here’s how you might use one of these animations in a component:

```tsx
import React from 'react';
import { motion } from 'framer-motion';
import animations from '../lib/animations';

const ExampleComponent: React.FC = () => {
  return (
    <motion.div
      variants={animations.fadeIn}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5 }}
    >
      <h1>Welcome to HouseIL</h1>
    </motion.div>
  );
};

export default ExampleComponent;
```

Feel free to customize the animations and transitions to fit the elegant and high-end design you envision for your website!