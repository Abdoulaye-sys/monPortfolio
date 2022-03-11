import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'


const Contact = () => {
  return (
    <section id='contact'>
      <h5>Entrer en Contact</h5>
      <h2>Me Contacter</h2>

      <div className='container contact_container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail />
            <h4>Email</h4>
            <h5>abdoulaye98@hotmail.fr</h5>
            <a href='mailto:abdoulaye98@hotmail.fr'  target='_blank'>Envoyer un message</a>
          </article>


          <article className='contact__option'>
            <BsWhatsapp />
            <h4>WhatsApp</h4>
            <h5>+330641295883</h5>
            <a href='https://api.whatsapp.com/send?phone=+330641295883'  target='_blank' >Envoyer un message</a>
          </article>

        </div>
        {/* END OF CONTACT OPTIONS */}
        <form action=''>
          <input type='text' name='name' placeholder='Votre Nom' required/>
        </form>
      </div>
    </section>
  )
}

export default Contact