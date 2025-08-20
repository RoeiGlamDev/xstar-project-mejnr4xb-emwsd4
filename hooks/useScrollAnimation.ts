Here's a `useScrollAnimation.ts` hook that you can use in your luxury dark AirBNB website named HouseIL. This hook will help you manage scroll animations for your components. The code is written in TypeScript and is designed to be used with React.

```typescript
// src/hooks/useScrollAnimation.ts

import { useEffect, useState } from 'react';

const useScrollAnimation = (threshold: number = 0.5) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    // Check if the user has scrolled past the threshold
    if (scrollY + windowHeight >= documentHeight * threshold) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return isVisible;
};

export default useScrollAnimation;
```

### Explanation:
- **Imports**: The hook imports `useEffect` and `useState` from React.
- **State Management**: It uses a state variable `isVisible` to track whether the component should be visible based on the scroll position.
- **Scroll Handler**: The `handleScroll` function checks the current scroll position and updates the visibility state based on a specified threshold.
- **Effect Hook**: The `useEffect` hook adds an event listener for the scroll event when the component mounts and cleans it up when the component unmounts.
- **Return Value**: The hook returns the `isVisible` state, which can be used in your components to trigger animations or visibility changes.

### Usage Example:
You can use this hook in your components like this:

```tsx
import React from 'react';
import useScrollAnimation from './hooks/useScrollAnimation';

const ScrollComponent: React.FC = () => {
  const isVisible = useScrollAnimation(0.5);

  return (
    <div className={`fade-in ${isVisible ? 'visible' : ''}`}>
      <h1>Welcome to HouseIL</h1>
      <p>Your luxury stay awaits.</p>
    </div>
  );
};

export default ScrollComponent;
```

Make sure to add appropriate CSS for the `.fade-in` and `.visible` classes to create the desired animation effect.