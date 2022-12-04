import React from 'react'
import FormContact from './Form'
import '../Contacto/Contacto.css'

function Contacto() {
  return (
    <>
    <div className='div'>
      <h1 className='title'>Contacto</h1>
      {/* "https://www.facebook.com/madrenaturaesencias/" */}
      <FormContact />
    </div>
    <div>
    {/* <a aria-label="Chat on WhatsApp" href="https://wa.me/2945696137"> <img alt="Chat on WhatsApp" src="WhatsAppButtonGreenLarge.svg" /> </a>
 */}    </div>
    </>
  )
}

export default Contacto;