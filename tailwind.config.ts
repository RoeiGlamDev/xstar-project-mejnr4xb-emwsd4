Here's a `tailwind.config.ts` file tailored for your luxury dark AirBNB website named HouseIL, featuring an elegant design in pink and black colors. This configuration includes custom colors and extends the default theme to suit your needs.

```typescript
import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class', // Enable dark mode
  theme: {
    extend: {
      colors: {
        // Custom colors for the luxury theme
        black: '#000000',
        pink: {
          light: '#FFB6C1', // Light pink
          DEFAULT: '#FF69B4', // Hot pink
          dark: '#C71585', // Medium violet red
        },
        gray: {
          dark: '#1F1F1F', // Dark gray for backgrounds
          DEFAULT: '#4B4B4B', // Default gray for text
        },
      },
      fontFamily: {
        // Custom font family for a luxurious feel
        sans: ['"Helvetica Neue"', 'Arial', 'sans-serif'],
        serif: ['"Times New Roman"', 'serif'],
      },
      spacing: {
        // Custom spacing values
        '128': '32rem',
        '144': '36rem',
      },
    },
  },
  variants: {
    extend: {
      // Extend variants for hover, focus, etc.
      backgroundColor: ['active'],
      textColor: ['active'],
    },
  },
  plugins: [],
};

export default config;
```

### Explanation:
- **Dark Mode**: The configuration enables dark mode using the `class` strategy, allowing you to toggle dark mode based on a class.
- **Custom Colors**: The colors are defined to match the luxury theme, with shades of pink and black, along with dark gray for backgrounds.
- **Font Family**: Custom font families are added to enhance the elegant design.
- **Spacing**: Additional spacing values are included for layout flexibility.
- **Variants**: Extended variants for background and text colors to include active states.

Make sure to install Tailwind CSS and its dependencies in your project to use this configuration effectively.