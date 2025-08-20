Here's a `next.config.mjs` file tailored for your luxury dark AirBNB website named HouseIL, with an elegant design in pink and black colors. This configuration includes some common settings that you might find useful for a Next.js project.

```javascript
// next.config.mjs

import { withSass } from '@zeit/next-sass';
import withImages from 'next-images';

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['your-image-domain.com'], // Add your image domains here
  },
  env: {
    // Add any environment variables you need
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
  experimental: {
    appDir: true, // Enable app directory if using Next.js 13+
  },
};

export default withImages(withSass(nextConfig));
```

### Explanation:
- **reactStrictMode**: Enables React's Strict Mode for highlighting potential problems in your application.
- **swcMinify**: Uses SWC for faster builds and minification.
- **images**: Configures external image domains for optimized image loading.
- **env**: Allows you to define environment variables that can be accessed in your application.
- **experimental.appDir**: Enables the app directory feature if you're using Next.js 13 or later.
- **withSass**: Allows you to use Sass for styling, which can help you create elegant designs.
- **withImages**: Enables importing images in your components.

Make sure to install the necessary packages if you haven't already:

```bash
npm install @zeit/next-sass next-images
```

You can customize the configuration further based on your specific needs and features you want to implement in your luxury website.