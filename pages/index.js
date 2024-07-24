// pages/index.js

import Head from 'next/head';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { BsFillMoonStarsFill, BsSunFill } from 'react-icons/bs';
import Image from 'next/image';
import me from '../public/me.jpg';
import { useState } from 'react';
import code from '../public/codecademy.svg';
import styles from '../styles/index.module.css';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? styles.darkMode : ''}>
      <Head>
        <title>Tyler Spring Portfolio</title>
        <meta name="description" content="Portfolio by Tyler Spring" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <section className="min-h-screen">
          <nav className={`${styles.nav} ${darkMode ? styles.darkText : styles.textBlack}`}>
            <h1 className="px-4 py-2 rounded-md text-xl font-burtons ml-4">Tyler Spring's Portfolio</h1>
            <div className={styles.navLinks}>
              <ul className="flex items-center justify-center">
                <li className={styles.navItem}>
                  <a
                    className={styles.navLink}
                    href="/Tyler Spring Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Resume
                  </a>
                </li>
                <li className={styles.navItem}>
                  <a
                    className={styles.navLink}
                    href="/projects"
                  >
                    Projects
                  </a>
                </li>
              </ul>
            </div>
            <div className={styles.themeToggle}>
              {darkMode ? (
                <BsSunFill onClick={() => setDarkMode(!darkMode)} className={styles.themeIcon} />
              ) : (
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className={styles.themeIcon} />
              )}
            </div>
            <a className={styles.emailLink} href="mailto:TylerGSpring@gmail.com">Email Me!</a>
          </nav>

          <div className={`${styles.container} ${styles.textCenter} ${styles.p10} ${styles.maxWxl} ${styles.mxAuto}`}>
  <div className={`${styles.imageContainer} ${darkMode ? styles.shadowWhite : styles.shadowBlack}`}>
    <Image src={me} layout="fill" className={styles.image} />
  </div>
  
  <div className={styles.sectionContainer}>
    <h3 className={styles.sectionTitle}>About Me</h3>
    <p className={styles.sectionText}>
      My name is Tyler Spring. I currently live in Baltimore County, Maryland.
      I just received my <span className={styles.highlight}>BA in Computer Science from University of Maryland Global Campus</span> with a 3.8 GPA.
      I am actively looking for a junior-level software engineering position in Maryland, Virginia, or Washington, DC and would love to earn clearance.
      I have a passion for working out, rock music, cars, video games, science, and engineering.
    </p>

    <h3 className={styles.sectionTitle}>Academics</h3>
    <p className={styles.sectionText}>
      I started taking computer science classes at College of Southern Maryland.
      From there, I transferred to Towson University in 2017 to study computer science.
      During the 2020 pandemic, I managed to <span className={styles.highlight}>earn my AA in General Studies from College of Southern Maryland in June 2020</span> while still at Towson.
      I decided to leave Towson my junior year to finish my degree online at University of Maryland Global Campus, due to excelling in an online environment.
      On July 11th, 2023, I completed my program and received my degree.
    </p>

    <h3 className={styles.sectionTitle}>Coding Hobbies</h3>
    <p className={styles.sectionText}>
      I have always tinkered with technology and knew since high school that I wanted to work with software, thanks to my love for video games.
      As my curiosity grew, I began teaching myself programming through Codecademy, starting with JavaScript.
      I also worked with Eclipse to learn Java and gained a strong understanding of object-oriented programming.
      Throughout my schooling and full-time work, I developed an interest in SQL, Python, C++, and React.
    </p>
  </div>
</div>

          <div className={`text-5xl flex justify-center gap-16 py-3 ${darkMode ? styles.darkText : ''}`}>
            <a href="https://www.linkedin.com/in/tyler-spring-6a7099143" target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
              <AiFillLinkedin />
            </a>
            <a href="https://github.com/TGSpring" target="_blank" rel="noopener noreferrer" className={styles.iconLinkGH}>
              <AiFillGithub />
            </a>
            <div className={`${styles.codeImageContainer} ${darkMode ? styles.darkMode : ''}`}>
              <a href="https://www.codecademy.com/profiles/Tgspring13" target="_blank" rel="noopener noreferrer">
                <Image src={code} layout='fill' className={styles.codeImage} alt="Codecademy" />
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
