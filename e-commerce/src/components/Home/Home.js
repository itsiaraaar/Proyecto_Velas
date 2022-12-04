import React from 'react';
import Carroussell from '../Carroussell/JS/Carroussell';
import './Home.css'
function Home() {
  return (
    <>
      <p id='intro'>Madre Natura esta pensado para llevar a tu hogar aromas que te acercan a la naturaleza.</p>
      <div className='box'>
        <Carroussell />
      </div>
      <div id="frst-footer">
        <div className="objects" id="with-border">
          <h3><b>Envíos a todo el país</b></h3>
          <h6>Comprá sin salir de tu casa</h6>
        </div>
        <div className="objects" id="with-border">
          <h3><b>Hasta 12 cuotas</b></h3>
          <h6>Con todas las tarjetas</h6>
        </div>
        <div className='objects' id="no-border">
          <h3><b>Compra segura</b></h3>
          <h6>Protegemos tus datos</h6>
        </div>
      </div>
    </>
  )
}

export default Home;