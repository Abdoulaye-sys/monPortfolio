import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>Ce que je propose</h5>
      <h2>Services</h2>

      <div className='services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>Développement Web</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem, ipsum dolor sit amet consectetur adipiscing elit.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem, ipsum dolor sit amet consectetur adipiscing elit.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem, ipsum dolor sit amet consectetur adipiscing elit.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem, ipsum dolor sit amet consectetur adipiscing elit.</p>
            </li>

          </ul>
        </article>
        {/* WEB DEVELOPMENT*/}


        <article className='service'>
          <div className='service__head'>
            <h3>Contenu de création</h3>
          </div>

          <ul className='service__list'>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem, ipsum dolor sit amet consectetur adipiscing elit.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem, ipsum dolor sit amet consectetur adipiscing elit.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem, ipsum dolor sit amet consectetur adipiscing elit.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem, ipsum dolor sit amet consectetur adipiscing elit.</p>
            </li>

          </ul>
        </article>
        {/* END OF CONTENT CREATION */}


        <article className='service'>
        <div className='service__head'>
          <h3>Freelance</h3>
        </div>

        <ul className='service__list'>

          <li>
            <BiCheck className='service__list-icon' />
            <p>Lorem, ipsum dolor sit amet consectetur adipiscing elit.</p>
          </li>

          <li>
            <BiCheck className='service__list-icon' />
            <p>Lorem, ipsum dolor sit amet consectetur adipiscing elit.</p>
          </li>

          <li>
            <BiCheck className='service__list-icon' />
            <p>Lorem, ipsum dolor sit amet consectetur adipiscing elit.</p>
          </li>

          <li>
            <BiCheck className='service__list-icon' />
            <p>Lorem, ipsum dolor sit amet consectetur adipiscing elit.</p>
          </li>

        </ul>
      </article>

        
      </div>
    </section>
  )
}

export default Services