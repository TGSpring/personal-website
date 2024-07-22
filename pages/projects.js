// pages/projects.js

import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { BsFillMoonStarsFill, BsSunFill } from 'react-icons/bs';
import styles from '../styles/projects.module.css';

export default function Projects() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? styles.darkMode : ''}>
      <Head>
        <title>Tyler Spring - Projects</title>
        <meta name="description" content="Projects by Tyler Spring" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <section className="min-h-screen">
          <nav className={`${styles.nav} ${darkMode ? styles.darkText : styles.textBlack}`}>
            <Link href="/" className="px-4 py-2 rounded-md text-xl font-burtons ml-4">
              Back to Home
            </Link>
            <div className={`${styles.fixedToggle} ${darkMode ? styles.darkText : styles.textBlack}`}>
              {darkMode ? (
                <BsSunFill onClick={() => setDarkMode(!darkMode)} className={`${styles.cursorPointer} ${styles.iconSize}`} />
              ) : (
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className={`${styles.cursorPointer} ${styles.iconSize}`} />
              )}
            </div>
          </nav>

          <div className={`text-center p-10 max-w-xl mx-auto ${styles.textCenter} ${styles.p10} ${styles.maxWxl} ${styles.mxAuto}`}>
            <h3 className={`text-5xl py-4 mt-6 ${darkMode ? styles.darkText : styles.textBlack}`}>Projects</h3>
            <ul>
              <li className={styles.portfolioItem}>
                <Link href="https://github.com/TGSpring/Project-1" target="_blank" rel="noopener noreferrer">
                  Project 1 - Description
                </Link>
              </li>
              <li className={styles.portfolioItem}>
                <Link href="https://github.com/TGSpring/Project-2" target="_blank" rel="noopener noreferrer">
                  Project 2 - Description
                </Link>
              </li>
              <li className={styles.portfolioItem}>
                <Link href="https://github.com/TGSpring/Project-3" target="_blank" rel="noopener noreferrer">
                  Project 3 - Description
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
