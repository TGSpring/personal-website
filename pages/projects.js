import Head from 'next/head';
import styles from '../styles/projects.module.css';
import Image from 'next/image';
import bros from '../public/bros.png';
import pirate from '../public/pirate.png';
import snakey from '../public/snakeGame.png';
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
        <ul className={styles.navLinks}>
          <li className={styles.navItem}>
            <a href='/' className={styles.navLink}>Home</a>
          </li>
          <li className={styles.navItem}>
            <a href='/Tyler Spring Resume.pdf' target='_blank' rel="noopener noreferrer" className={styles.navLink}>Resume</a>
          </li>
          <li className={styles.navItem}>
            <a href='mailto:TylerGSpring@gmail.com' className={styles.navLink}>Email Me!</a>
          </li>
        </ul>
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
              As part of my coursework for CMSC 495 at UMGC, I developed an advanced Space Invaders-like game. 
              This full-stack project featured a dynamic frontend, where I took charge of the game mechanics using 
              JavaScript, React, HTML, and CSS. The backend was built with Python and Flask, enabling real-time 
              logging of names and scores to update a live leaderboard.
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
        <h1 className={styles.title}>Calorie Calculator</h1>
        <div className={styles.projectContent}>
          <div className={styles.imageContainer}>
            <Image src={bros} alt="Project Screenshot" layout="fill" className={styles.image} />
          </div>
          <div className={styles.description}>
            <p>This JavaScript program, created as a fun project, extends the concept of a calorie calculator 
              with a humorous twist. Users input a few details to calculate their caloric needs for maintaining 
              their current weight. Once the calculation is complete, the program generates three links, 
              including one to this site and a couple of playful surprises.</p>
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
        <h1 className={styles.title}>Snake Game</h1>
        <div className={styles.projectContent}>
          <div className={styles.imageContainer}>
            <Image src={snakey} alt="Project Screen" layout='fill' className={styles.image} />
          </div>
          <div className={styles.description}>
            <p>This project is a Snake game developed in C++ using the Raylib library, following a YouTube tutorial.
               The game features collision detection with the snake itself, borders, and an apple. 
               You can clone the repository from my GitHub and run the program to play.</p>
            <div className={styles.links}>
              <a href="https://github.com/TGSpring/c-snake" target="_blank" rel="noopener noreferrer">
                <AiFillGithub className={styles.iconSize} />
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
