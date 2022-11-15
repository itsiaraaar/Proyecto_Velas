import React from 'react';
import Carroussell from '../Carroussell/JS/Carroussell';
import './Home.css'
function Home() {
  return (
    <>
      <div>
        <p>Madre Natura esta pensado para llevar a tu hogar aromas que te acercan a la naturaleza.</p>
      </div>
      <div className='box'>
        <Carroussell />
      </div>
      <div>
        <p>Soy aroma, soy esencia, soy naturaleza, soy lo que te invita a llenar tus espacios con fragancias ya creadas o por descubrir.</p>
      </div>
    </>
  )
}

export default Home;