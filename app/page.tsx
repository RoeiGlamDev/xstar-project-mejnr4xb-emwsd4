Here's a sample `app/page.tsx` file for your luxury dark AirBNB website named HouseIL, designed with an elegant and high-end aesthetic in pink and black colors. This code assumes you are using React with TypeScript.

// app/page.tsx

import React from 'react';
import Head from 'next/head';
import styles from './page.module.css';

const HomePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>HouseIL - Luxury Rentals</title>
        <meta name="description" content="Experience luxury living with HouseIL." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <header className={styles.header}>
          <h1 className={styles.title}>Welcome to HouseIL</h1>
          <p className={styles.subtitle}>Luxury Rentals for Discerning Travelers</p>
        </header>
        <section className={styles.features}>
          <h2 className={styles.featuresTitle}>Our Features</h2>
          <div className={styles.featureList}>
            <div className={styles.featureItem}>
              <h3>Elegant Interiors</h3>
              <p>Experience the finest in luxury living with our curated interiors.</p>
            </div>
            <div className={styles.featureItem}>
              <h3>Exclusive Locations</h3>
              <p>Stay in the most sought-after locations around the world.</p>
            </div>
            <div className={styles.featureItem}>
              <h3>Personalized Service</h3>
              <p>Enjoy tailored services to make your stay unforgettable.</p>
            </div>
          </div>
        </section>
        <footer className={styles.footer}>
          <p>&copy; {new Date().getFullYear()} HouseIL. All rights reserved.</p>
        </footer>
      </main>
    </>
  );
};

export default HomePage;

### CSS Module (page.module.css)

You can create a CSS module named `page.module.css` to style your homepage. Here's a basic example:

/* app/page.module.css */

.main {
  background-color: #000;
  color: #fff;
  padding: 20px;
  font-family: 'Arial', sans-serif;
}

.header {
  text-align: center;
  margin-bottom: 40px;
}

.title {
  font-size: 3rem;
  color: #ff69b4; /* Pink color */
}

.subtitle {
  font-size: 1.5rem;
  color: #ccc;
}

.features {
  margin: 40px 0;
}

.featuresTitle {
  font-size: 2rem;
  text-align: center;
  color: #ff69b4; /* Pink color */
}

.featureList {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.featureItem {
  background-color: #222;
  border-radius: 8px;
  padding: 20px;
  margin: 10px;
  flex: 1 1 30%;
  max-width: 300px;
  text-align: center;
}

.footer {
  text-align: center;
  margin-top: 40px;
  color: #ccc;
}

### Notes
- Make sure to adjust the styles according to your design preferences.
- You can expand the features section or add more components as needed.
- Ensure that you have the necessary dependencies installed for Next.js and TypeScript in your project.