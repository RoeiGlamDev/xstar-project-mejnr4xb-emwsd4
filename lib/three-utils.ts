Certainly! Below is a sample `lib/three-utils.ts` file that you can use in your luxury dark AirBNB website named HouseIL. This file includes utility functions for working with Three.js, which is often used for 3D rendering in web applications.

```typescript
// lib/three-utils.ts

import * as THREE from 'three';

/**
 * Creates a basic scene with a camera and renderer.
 * @param container - The HTML element to attach the renderer to.
 * @returns An object containing the scene, camera, and renderer.
 */
export function createScene(container: HTMLElement): {
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  renderer: THREE.WebGLRenderer;
} {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  
  renderer.setSize(window.innerWidth, window.innerHeight);
  container.appendChild(renderer.domElement);

  camera.position.z = 5;

  return { scene, camera, renderer };
}

/**
 * Adds a light to the scene.
 * @param scene - The Three.js scene to add the light to.
 */
export function addLight(scene: THREE.Scene): void {
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Soft white light
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
  directionalLight.position.set(5, 5, 5);
  scene.add(directionalLight);
}

/**
 * Creates a simple box geometry.
 * @returns A mesh with box geometry and a basic material.
 */
export function createBox(): THREE.Mesh {
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshStandardMaterial({ color: 0xff69b4 }); // Pink color
  const box = new THREE.Mesh(geometry, material);
  return box;
}

/**
 * Animates the scene.
 * @param renderer - The Three.js renderer.
 * @param scene - The Three.js scene.
 * @param camera - The Three.js camera.
 */
export function animate(renderer: THREE.WebGLRenderer, scene: THREE.Scene, camera: THREE.PerspectiveCamera): void {
  requestAnimationFrame(() => animate(renderer, scene, camera));
  renderer.render(scene, camera);
}
```

### Explanation:
- **createScene**: Initializes a Three.js scene, camera, and renderer, and appends the renderer to a specified container.
- **addLight**: Adds ambient and directional lights to the scene to enhance visibility and aesthetics.
- **createBox**: Creates a simple box mesh with a pink material, which can be replaced or modified as needed.
- **animate**: A recursive function that continuously renders the scene, allowing for animations.

You can import and use these utilities in your React components to create a visually appealing 3D experience for your luxury dark AirBNB website.