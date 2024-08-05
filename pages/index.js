import Head from 'next/head';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { BsFillMoonStarsFill, BsSunFill } from 'react-icons/bs';
import Image from 'next/image';
import me from '../public/me.jpg';
import { useState, useEffect } from 'react';
import code from '../public/codecademy.svg';
import styles from '../styles/index.module.css';

export default function Home() {
  const [darkMode, setDarkMode] = useState(null); // Initialize as null

  useEffect(() => {
    // Load darkMode preference from localStorage after client-side has loaded
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedDarkMode);
  }, []);

  useEffect(() => {
    // Save darkMode state to localStorage whenever it changes
    if (typeof window !== 'undefined') {
      localStorage.setItem('darkMode', darkMode);
    }
  }, [darkMode]);

  if (darkMode === null) {
    // Render nothing or a loading spinner until client-side state is determined
    return null;
  }

  const containerClassName = darkMode ? styles.darkMode : '';

  return (
    <div className={containerClassName}>
      <Head>
        <title>Tyler Spring Portfolio</title>
        <meta name="description" content="Portfolio by Tyler Spring" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <section className="min-h-screen">
          <nav className={`${styles.nav} ${darkMode ? styles.darkText : styles.textBlack}`}>
            <h1 className={`${styles.title}`}>Tyler Spring's Portfolio</h1>
            <div className={styles.navLinks}>
              <ul>
                <a className={`${styles.navLink} ${styles.navLinkResume}`}
                  href="/Tyler Spring Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
                <a
                  className={`${styles.navLink} ${styles.navLinkProject}`}
                  href="/projects"
                >
                  Projects
                </a>
              </ul>
            </div>
            <div className={styles.themeToggle}>
              {darkMode ? (
                <BsSunFill onClick={() => setDarkMode(!darkMode)} className={styles.themeIcon} />
              ) : (
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className={styles.themeIcon} />
              )}
            </div>
            <a className={`${styles.navLink} ${styles.emailLink}`} href="mailto:TylerGSpring@gmail.com">Email Me!</a>
          </nav>

          <div className={`${styles.container} ${styles.textCenter} ${styles.p10} ${styles.maxWxl} ${styles.mxAuto}`}>
            <div className={`${styles.imageContainer} ${darkMode ? styles.shadowWhite : styles.shadowBlack}`}>
              <Image src={me} layout="fill" className={styles.image} />
            </div>

            <div className={`${styles.sectionContainer} ${darkMode ? styles.darkMode : ''}`}>
              <div className={`${styles.sectionItem} ${darkMode ? styles.darkMode : ''}`}>
                <h3 className={styles.sectionTitle}>About Me</h3>
                <p className={styles.sectionText}>
                  Hello, I'm Tyler Spring, a recent graduate with a
                  <span className={styles.highlight}> BA in Computer Science from the University of Maryland Global Campus,
                    where I achieved a 3.8 GPA.</span> Currently residing in Baltimore County, Maryland, I am eager to embark on my career in software engineering.
                  I am actively seeking a junior-level software engineering position in Maryland, Virginia, or Washington, DC, with a strong interest in earning security clearance.
                  My passion extends beyond coding; I enjoy working out, rock music, cars, video games, science, and engineering. I'm excited to bring my skills and enthusiasm to a dynamic team.
                </p>
              </div>
              <div className={`${styles.sectionItem} ${darkMode ? styles.darkMode : ''}`}>
                <h3 className={styles.sectionTitle}>Academics</h3>
                <p className={styles.sectionText}>
                  I began my journey in computer science at the College of Southern Maryland before transferring to Towson University in 2017 to continue my studies. Despite the challenges of the 2020 pandemic,
                  <span className={styles.highlight}> I successfully earned my AA in General Studies from the College of Southern Maryland in June 2020,</span>
                  while still pursuing my studies at Towson.

                  Recognizing my strength in online learning, I chose to complete my degree through the University of Maryland Global Campus. I graduated on July 11th, 2023, with a BA in Computer Science.</p>
              </div>
              <div className={`${styles.sectionItem} ${darkMode ? styles.darkMode : ''}`}>
                <h3 className={styles.sectionTitle}>Coding Hobbies</h3>
                <p className={styles.sectionText}>
                  My fascination with technology and software began in high school, fueled by my passion for video games. This early interest led me to start teaching myself programming through Codecademy, beginning with JavaScript.

                  I further expanded my skills by working with Eclipse to learn Java, where I gained a solid foundation in object-oriented programming. As I continued my education and work experience, I developed a keen interest in SQL, Python, C++, and React.
                </p>
              </div>

              <div className={`${styles.sectionItem} ${darkMode ? styles.darkMode : ''}`}>
                <h3 className={styles.sectionTitle}>Tools I am using and languages I am certified in.</h3>
                <p className={styles.sectionText}>
                  <p className='py-1'>Eclipse</p>
                  <p className='py-1'>PyCharm</p>
                  <p className='py-1'>CodeBlocks</p>
                  <p className='py-1'>VsCode</p>
                  <p className='py-1'>Visual Studio</p>
                  <p className='py-1'>Java</p>
                  <p className='py-1'>Python</p>
                  <p className='py-1'>JavaScript</p>
                  <p className='py-1'>SQL</p>
                  <p className='py-1'>GraphQL</p>
                  <p className='py-1'>C++</p>
                  <p className='py-1'>React</p>
                  <p className='py-1'>TailWindCss</p>
                  <p className='py-1'>HTML</p>
                </p>
              </div>
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
