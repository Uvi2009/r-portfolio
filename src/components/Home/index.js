import {React,useEffect,useState} from 'react'
import Logos from '../../assets/images/y.png'
import { Link } from 'react-router-dom'
import './index.scss'
import AnimatedLetters from './../AnimatedLetters/index';
import Logo from './Logo';
//import Typed from 'react-typed'
import Loader from 'react-loaders'


function Home() {

  const [letterClass,setLetterClass]=useState('text-animate')
  const nameArray=['u','v','a','r','a','j']
  const jobArray=['W','e','b','','D','e','v','e','l','o','p','e','r']
  const hi=['H','i',',']
  const im=['I','\'','m']

  
  useEffect(()=>{
    const x=()=>setTimeout(()=>{
      setLetterClass('text-animate-hover')
    },4000)

    return x
  },[])

  
   
  return (
    <>
    <div className='container home-page'>
        <div className='text-zone'>
            <h1><AnimatedLetters letterClass={letterClass} strArray={hi} idx={10}/ >
              <br/><AnimatedLetters letterClass={letterClass} strArray={im} idx={13}/ >
            <img src={Logos } alt="developer"/>
            <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15}/ >
            <br/>
            <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={22}/ >
            </h1>
            <h2>
              I'm a     
             <span className='auto-text'>
               Student
             {// <Typed strings={[' Student',' FrontEnd Deveolper',' JavaScript Developer' ,' Software Devolper']} typeSpeed={40} backSpeed={40} loop={true}/>
              }</span>
              
            </h2>
            <Link to="/contact" className='flat-button'>
                Contact Me
            </Link>
        </div>
        <Logo/>
    </div>
    <Loader type="pacman"/>
    </>

  ) 
}
 
export default Home 
