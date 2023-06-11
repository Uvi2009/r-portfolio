import './index.scss'
import {Link, NavLink} from 'react-router-dom'
import LogoS from'../../assets/images/y.png'
import {FontAwesomeIcon}  from '@fortawesome/react-fontawesome'
import {faHome,
    faEnvelope,
    faUser}  from "@fortawesome/free-solid-svg-icons"

import {
    faLinkedin,
    faGithub,
    faInstagram,
    
  } from '@fortawesome/free-brands-svg-icons'

const Sidebar= () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt="logo"/>
        
        </Link>
        <nav>
            <NavLink activeclassname="active"  className="home-link" to="/">
                <FontAwesomeIcon icon={faHome} color="4d4d4e"/> 
            </NavLink>
            <NavLink activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="4d4d4e"/> 
            </NavLink>
            <NavLink activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="4d4d4e"/> 
            </NavLink>
        </nav>

        <ul>
            <li>
                <a
                    target='_blank'
                    href='https://www.google.com'
                >
                    <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e'/>
                </a>
                
            </li>
            <li>
                <a
                    target='_blank'
                    href=''
                >
                    <FontAwesomeIcon icon={faGithub} color='#4d4d4e'/>
                </a>
                
            </li>
            <li>
                <a
                    target='_blank'
                    href=''
                >
                    <FontAwesomeIcon icon={faInstagram} color='#4d4d4e'/>
                </a>

            </li>
            
        </ul>

    </div>
)

export default Sidebar