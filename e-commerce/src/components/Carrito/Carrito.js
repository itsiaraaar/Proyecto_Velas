import React, { useContext } from 'react'
import { shopContext } from '../Context/Context';
import './Carrito.css';
function Carrito() {
  const context = useContext(shopContext);
  return (
    <>
      <div className='title'>Mi carrito</div>
      <div>
        {context.cart.map((p) => {
          return (
          <div>
            <img src={p.newItem.img1} alt="img1"></img>
            <p>{p.newItem.name}</p>
            <p>Precio: {p.newItem.prize}</p>
{/*             <p>Cantidad: {p.newItem.quantity}</p> */}
            <button onClick={() => context.removeProductFromCart(p.newItem.id)}>Eliminar</button>
          </div>)
        })
        }
      </div>

    </>

  )
}

export default Carrito