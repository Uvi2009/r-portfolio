import React from 'react'
import './index.scss'
import AnimatedLetters from './../AnimatedLetters/index';
import Loader from 'react-loaders'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngular,
  faReact,
  faGitAlt,
 
  faCss3,
  faJsSquare,
  faJava

} from '@fortawesome/free-brands-svg-icons'


function About() { 
  return (
    <>
    <div className='container1 about-page'>
      <div className='text-zone'>
    <h1>
        <AnimatedLetters strArray={['A','b','o','u','t',' ','m','e']} idx={15}/>
    </h1>
    <p className='p-text'>
    Welcome to my portfolio! I'm Yuvaraj, a passionate student and web developer with a strong focus on JavaScript and software development. Currently pursuing my degree in Computer applications , I am constantly seeking opportunities to expand my knowledge and skills in the ever-evolving world of web development.
    </p>
    <p>
    From my early days of curiosity about websites to becoming proficient in HTML, CSS, and JavaScript, I have dedicated myself to creating intuitive and visually appealing digital experiences. Additionally, I have ventured into software development, mastering programming languages such as Java and Python. This has equipped me with robust problem-solving abilities and refined software development practices.
    </p>
    <p>
    In my portfolio, you'll find a collection of projects that exemplify my skills and showcase my ability to transform ideas into functional and visually captivating websites and applications. I invite you to explore and discover the creative world I've crafted. Thank you for visiting my portfolio, and I look forward to the opportunity of collaborating with you to build remarkable digital experiences together.
    </p>
    </div>

    <div className='stage-cube-cont'>
        <div className='cubespinner'>
          <div className='face1'>
            <FontAwesomeIcon icon={faAngular} color='#DD0031'/>

          </div>
          <div className='face2'>
            <FontAwesomeIcon icon={faCss3} color='#f06529' />

          </div>
          <div className='face3'>
            <FontAwesomeIcon icon={faReact} color='#2814d9' />

          </div>
          <div className='face4'>
            <FontAwesomeIcon icon={faGitAlt} color='#5ed4f4'/>

          </div>
          <div className='face5'>
            <FontAwesomeIcon icon={faJava} color='#efd81d' />

          </div>
          <div className='face6'>
            <FontAwesomeIcon icon={faJsSquare} color='#ec4d28'/>

          </div>
        </div>
    </div>


    </div>

    <Loader  type='pacman'/>
    </>
  )
}

export default About