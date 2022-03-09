import React from 'react'
import './about.css'
import ME from '../../assets/abdoulaye_portfolio-ConvertImage.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers}  from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Apprendre à me connaître</h5>
      <h2>À propos de moi</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='about me' />
          </div>
        </div>


        <div className='about__content'>
          <div className='about__cards'>

            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small> Stage développeur mobile</small>
            </article>

              <article className='about__card'>
                <FiUsers className='about__icon'/>
                <h5>Clients</h5>
                <small>200+ worldwide</small>
              </article>


              <article className='about__card'>
                <VscFolderLibrary className='about__icon'/>
                <h5>Projet</h5>
                <small> 3+ projets complétés</small>
              </article>

          </div>

            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,  Ipsum.
            </p>

            <a href='#contact' className='btn btn-primary'>Parlons</a>
        </div>
      </div>
    </section>
  )
}

export default About