import React from 'react'
import CV from '../../assets/Cv_Abdoulaye_Ba.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Ici Vous pouvez Télécharger mon CV</a>
        <a href='#contact' className='btn btn-primary'>Me Contacter</a>
    </div>
  )
}

export default CTA