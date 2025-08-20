Here's a React component for a particle background that you can use in your luxury dark Airbnb website named HouseIL. This component uses the `react-tsparticles` library to create a particle effect. Make sure to install the library first by running:

npm install react-tsparticles

Now, you can create the `ParticleBackground.tsx` component as follows:

// src/components/ParticleBackground.tsx

import React from 'react';
import Particles from 'react-tsparticles';

const ParticleBackground: React.FC = () => {
  const particlesInit = async (main: any) => {
    // You can add custom initialization logic here if needed
  };

  const particlesLoaded = (container: any) => {
    // You can add custom logic after particles are loaded if needed
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "#000000", // Black background
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 100,
              duration: 2,
            },
          },
        },
        particles: {
          color: {
            value: "#FF69B4", // Pink color for particles
          },
          links: {
            color: "#FF69B4",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 3,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 100,
          },
          opacity: {
            value: 0.5,
            random: false,
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0.1,
              sync: false,
            },
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
            random: true,
            animation: {
              enable: true,
              speed: 40,
              minimumValue: 1,
              sync: false,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticleBackground;

### Explanation:
- **Background Color**: The background is set to black (`#000000`).
- **Particle Color**: The particles are pink (`#FF69B4`).
- **Interactivity**: The particles respond to mouse events, allowing for a more engaging experience.
- **Particle Movement**: The particles move freely and bounce off the edges of the screen.

### Usage:
You can use this `ParticleBackground` component in your main application file or any other component where you want to display the particle effect. Just import and include it like this:

import ParticleBackground from './components/ParticleBackground';

const App: React.FC = () => {
  return (
    <div>
      <ParticleBackground />
      {/* Other components go here */}
    </div>
  );
};

export default App;

This setup will give your website a luxurious and elegant feel with the dark background and pink particle effects.