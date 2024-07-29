// pages/project.js

import Head from 'next/head';
import styles from '../styles/projects.module.css';
import Image from 'next/image';
import bros from '../public/bros.png';
import { useState } from 'react';
import { BsFillMoonStarsFill, BsSunFill } from 'react-icons/bs';

export default function Project() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? styles.darkMode : styles.lightMode}>
      <Head>
        <title>Project Title</title>
        <meta name="description" content="Description of the project" />
      </Head>

      <nav className={`${styles.nav} ${darkMode ? styles.darkText : styles.textBlack}`}>
        <a href="/" className={styles.backButton}>Back to Home</a>
        <div className={styles.themeToggle}>
          {darkMode ? (
            <BsSunFill onClick={() => setDarkMode(!darkMode)} className={styles.themeIcon} />
          ) : (
            <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className={styles.themeIcon} />
          )}
        </div>
      </nav>

      <main className={styles.main}>
        <h1 className={styles.title}>Project Title</h1>
        <div className={styles.imageContainer}>
          <Image src={bros} alt="Project Screenshot" className={styles.image} />
        </div>
        <p className={styles.description}>
          Description of the project, the technologies used, and the challenges faced during development.
        </p>
        <div className={styles.links}>
          <a href="https://project-demo.com" target="_blank" rel="noopener noreferrer" className={styles.link}>Live Demo</a>
          <a href="https://github.com/username/project-repo" target="_blank" rel="noopener noreferrer" className={styles.link}>GitHub</a>
        </div>
      </main>
    </div>
  );
}
