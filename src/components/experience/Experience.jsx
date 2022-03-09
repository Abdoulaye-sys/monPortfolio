import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Les compétences que je possède</h5>
      <h2>Mon Expérience</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Développement front end</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <h4>HTML</h4>
              <small className='text-light'>Expérimenté</small>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill />
              <h4>CSS</h4>
              <small className='text-light'>Intermédiaire</small>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill />
              <h4>JavaScript</h4>
              <small className='text-light'>Expérimenté</small>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill />
              <h4>Bootstrap</h4>
              <small className='text-light'>Expérimenté</small>
            </article>


            <article className='experience__details'>
              <BsPatchCheckFill />
              <h4>React</h4>
              <small className='text-light'>Expérimenté</small>
            </article>
          </div>
        </div>

        {/*END OF FRONTEND*/}

        <div className='experience__backend'>
          <h3>Développement back end</h3>
          <div className='experience__content'>
          <article className='experience__details'>
            <BsPatchCheckFill />
            <h4>Node JS</h4>
            <small className='text-light'>Intermédiaire</small>
          </article>

          <article className='experience__details'>
            <BsPatchCheckFill />
            <h4>MongoDB</h4>
            <small className='text-light'>Intermédiaire</small>
          </article>

          <article className='experience__details'>
            <BsPatchCheckFill />
            <h4>PHP</h4>
            <small className='text-light'>Expérimenté</small>
          </article>

          <article className='experience__details'>
            <BsPatchCheckFill />
            <h4>MySQL</h4>
            <small className='text-light'>Expérimenté</small>
          </article>
        </div>

        </div>
      </div>
    </section>
  )
}

export default Experience