import React from 'react'
import './footer.css'
import {FaFacebook} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>ABDOULAYE</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='https://facebook.com'><FaFacebook/></a>
        <a href='https://instagram.com'><FiInstagram/></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; Abdoulaye Portfolio. Tous les droits sont réservés </small>
      </div>
    </footer>
  )
}

export default Footer