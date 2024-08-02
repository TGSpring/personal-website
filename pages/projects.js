import Head from 'next/head';
import styles from '../styles/projects.module.css';
import Image from 'next/image';
import bros from '../public/bros.png';
import pirate from '../public/pirate.png';
import { useState, useEffect } from 'react';
import { BsFillMoonStarsFill, BsSunFill } from 'react-icons/bs';
import { GiSailboat, GiBiceps } from 'react-icons/gi';
import { AiFillGithub } from 'react-icons/ai'

export default function Project() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Load darkMode preference from localStorage
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedDarkMode);
  }, []);

  useEffect(() => {
    // Save darkMode state to localStorage whenever it changes
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  return (
    <div className={darkMode ? styles.darkMode : styles.lightMode}>
      <Head>
        <title>Portfolio Projects</title>
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
        <h1 className={styles.title}> Pirate Plunderers </h1>
        <div className={styles.projectContent}>
          <div className={styles.imageContainer}>
            <Image src={pirate} alt="Pirates" layout='fill' className={styles.image} />
          </div>
          <div className={styles.description}>
            <p>
              CMSC 495 project from UMGC. A space invaders like game, but better. It is a full stack
              program where I was responsible for front end development of the game mechanics. This comprised
              of JavaScript, React, HTML, and CSS. This project works with python and flask for backend to log
              names and score to update a live leaderboard.
            </p>
            <div className={styles.links}>
              <a href='https://pirate-plunderers.vercel.app/' target='_blank' rel='noopener noreferrer'>
                <GiSailboat className={styles.iconSize} />
              </a>
              <a href="https://github.com/PinoyColada/Pirate-Plunderers.git" target="_blank" rel="noopener noreferrer">
                <AiFillGithub className={styles.iconSize} />
              </a>
            </div>
          </div>
        </div>
        <h1 className={styles.title}>Project Title</h1>
        <div className={styles.projectContent}>
          <div className={styles.imageContainer}>
            <Image src={bros} alt="Project Screenshot" layout="fill" className={styles.image} />
          </div>
          <div className={styles.description}>
            <p>Small JavaScript program I made for fun because of already having a calorie calculator and a joke made
              with the background. Takes a few inputs from user then calculates how many calories a person would need
              to maintain their current weight. After the user hit calculate, 3 links appear. One being this site,
              the others well go see.</p>
            <div className={styles.links}>
              <a href='https://calorie-calc-rn9b.vercel.app/' target="_blank" rel="noopener noreferrer">
                <GiBiceps className={styles.iconSize} />
              </a>
              <a href="https://github.com/TGSpring/Calorie_Calc" target="_blank" rel="noopener noreferrer">
                <AiFillGithub className={styles.iconSize} />
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
