import Head from 'next/head'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import { BsFillMoonStarsFill, BsSunFill} from 'react-icons/bs'
import { GiSailboat } from 'react-icons/gi';
import Image from "next/image";
import me from "../public/me.jpg";
import pirate from "../public/pirate.png";
import { useState } from 'react';



export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title> Tyler Spring Portfolio</title>
        <meta name="description" content="Made by Tyler"></meta>
        <link rel="icon" href="favicon.ico" />
        <style>
          {`
            body {
              background-color: ${darkMode ? '#111827' : '#ffffff'};
              color: ${darkMode ? '#ffffff' : '#111827'};
            }
            .dark {
              background-color: #111827;
              color: #ffffff;
            }
          `}
        </style>
      </Head>
      <main class name="bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-4">
        <section className='min-h-screen'>

          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className='bg-gradient-to-r from-white to-black px-4 py-2 rounded-md ml-8 text-xl font-burtons'>Tyler Spring's Portfolio</h1>
            <ul className='flex items-center'>
            <li>
                {darkMode ? (
                  <BsSunFill
                    onClick={() => setDarkMode(!darkMode)}
                    className="cursor-pointer text-2xl"
                  />
                ) : (
                  <BsFillMoonStarsFill
                    onClick={() => setDarkMode(!darkMode)}
                    className="cursor-pointer text-2xl"
                  />
                )}
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-black to-white px-4 py-2 rounded-md ml-4 text-xl font-burtons"
                  href="/Tyler Spring Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
              </li>

            </ul>
          </nav>
          <div className='text-center p-10 max-w-xl mx-auto'>
          <div className='relative mx-auto bg-gradient-to-b from-gray-50 rounded-full w-80 h-80 mt-10 md:mt-20 overflow-hidden md:h-96 md:w-96'>
            <Image src={me} layout="fill" objectFit='cover' />
          </div>
            <h3 className='text-5xl  py-4 mt-6 text-black dark:text-white'>About Me</h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">My name is Tyler Spring. I currently live in Baltimore County, Maryland.
              I just received my  <span className='text-blue-700'>BA in computer science from University Maryland Global Campus</span> with a 3.8 GPA.
              I am actively looking for a junior level software engineering position in Maryland, Virginia, or Washington,
              DC would love to earn clearance. I have a passion for working out, rock music, cars, video games, science and engineering.
            </p>
            <h3 className='text-5xl py-2 text-black dark:text-white'>Academics</h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              I started taking computer science classes at College of Southern Maryland. From there I transferred to Towson University in 2017 to
              study computer science. During the 2020 pandemic, I managed to <span className='text-blue-700'>earn my AA in general studies from
              College of Southern Maryland in June of 2020 </span> while still at Towson. I decided to leave Towson my junior
              year to finish my degree online at University Maryland Global Campus due to excelling in an online environment. July 11th 2023, I completed my program and received my degree        
            </p>.
            <h3 className='text-5xl py-2 text-black dark:text-white'>Coding Hobbies</h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              I have always tinkered with technology and knew since highschool that I would want to work with software through my love for video games.
              As I my curiosity grew, I began to teach myself what programming was through codeAcademy through JavaScript. I started to work with Eclipse
              and learn what Java was and really got a feel for object oriented programming. Throughout my schooling and working full time I also took an
              interest in SQL, python, C++, and React
            </p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-900 dark:text-yellow-50'>
          <a href="https://www.linkedin.com/in/tyler-spring-6a7099143" target="_blank" rel="noopener noreferrer">
            <AiFillLinkedin />
            </a>
            <a href="https://github.com/TGSpring" target="_blank" rel="noopener noreferrer">
              <AiFillGithub />
            </a>
          </div>
          
        </section>
        <section>
          <div className='lg:flex gap-10 '>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-500 flex-1">
              <h4 className="text-lg font-medium pt-8 pb-2 py-4 text-black">
                Tools I use:
              </h4>
              <p className='py-1'>Eclipse</p>
              <p className='py-1'>PyCharm</p>
              <p className='py-1'>CodeBlocks</p>
              <p className='py-1'>VsCode</p>
              <p className='py-1'>Visual Studio</p>
              <p className='py-1'>SQL Dev</p>
              <p className='py-1'>Oracle Virtual Box</p>
              <p className='py-1'>Ubuntu</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-500 flex-1">
              <h4 className="text-lg font-medium pt-8 pb-2 py-4 text-black">
                Languages and frameworks I use and or certified in:
              </h4>
              <p className='py-1'>Java</p>
              <p className='py-1'>python</p>
              <p className='py-1'>JavaScript</p>
              <p className='py-1'>SQL</p>
              <p className='py-1'>C++</p>
              <p className='py-1'>React</p>
              <p className='py-1'>TailWindCss</p>
              <p className='py-1'>HTML</p>
            </div>
          </div>
        </section>
        <section className="flex flex-col items-center justify-center">
  <div className="lg:flex gap-10 justify-center">
    <h3 className="text-5xl py-2 text-center dark:text-white">Portfolio</h3>
  </div>
  <div className="flex-col gap-10 py-10 lg:flex-row lg:flex-wrap justify-center ">
    <h4 className="text-center text-lg font-medium pt-8 pb-2 py-4 text-black dark:text-white">
      Collection of projects I have worked on:
    </h4>
    <div className='justify-center relative mx-auto aspect-square w-80 h-80 mt-10 md:mt-20 md:h-96 md:w-96'>
  <Image src={pirate} layout="fill" objectFit='cover' />
</div>
<p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
  CMSC 495 project from UMGC. I was responsible for front end development of the game mechanics.
</p>
<div className='text-5xl flex justify-center gap-16 py-3'>
  <a href="https://github.com/PinoyColada/Pirate-Plunderers.git" target="_blank" rel="noopener noreferrer">
    <AiFillGithub />
  </a>
  <a href='https://pirate-plunderers.vercel.app/' target="_blank" rel="noopener noreferrer">
    <GiSailboat/>
  </a>
</div>
  </div>
</section>


      </main>
    </div>

  )
}

  )
}
