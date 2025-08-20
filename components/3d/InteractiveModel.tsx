Certainly! Below is a sample implementation of an `InteractiveModel.tsx` component for a luxury dark Airbnb website named HouseIL. This component uses React and TypeScript, and it assumes you are using a 3D library like `three.js` or `react-three-fiber` for rendering 3D models interactively.

Make sure to install the necessary dependencies if you haven't already:

npm install three @react-three/fiber @react-three/drei

Here’s the code for `InteractiveModel.tsx`:

// components/3d/InteractiveModel.tsx

import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

interface InteractiveModelProps {
  modelPath: string;
}

const Model: React.FC<{ modelPath: string }> = ({ modelPath }) => {
  const { scene } = useGLTF(modelPath);
  return <primitive object={scene} />;
};

const InteractiveModel: React.FC<InteractiveModelProps> = ({ modelPath }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  return (
    <Canvas
      ref={canvasRef}
      style={{ height: '100%', width: '100%', backgroundColor: '#1a1a1a' }} // Dark background
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Model modelPath={modelPath} />
      <OrbitControls />
    </Canvas>
  );
};

export default InteractiveModel;

### Explanation:
- **Imports**: The component imports necessary modules from React, `@react-three/fiber`, and `@react-three/drei`.
- **Model Component**: This component loads a 3D model using the `useGLTF` hook from `@react-three/drei`.
- **InteractiveModel Component**: This is the main component that sets up the 3D canvas. It includes ambient and directional lighting for better visibility of the model.
- **OrbitControls**: This allows users to interact with the model by rotating, zooming, and panning.

### Usage:
You can use the `InteractiveModel` component in your application like this:

import InteractiveModel from './components/3d/InteractiveModel';

const App = () => {
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <InteractiveModel modelPath="/path/to/your/model.glb" />
    </div>
  );
};

export default App;

Make sure to replace `"/path/to/your/model.glb"` with the actual path to your 3D model file. This setup will give you an interactive 3D model viewer suitable for a luxury Airbnb website.