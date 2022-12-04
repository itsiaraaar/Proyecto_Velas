import React, { useContext } from 'react'
import { shopContext } from '../Context/Context';
import './Carrito.css';
import Figure from 'react-bootstrap/Figure';
import { Link } from 'react-router-dom';
function Carrito() {
  const context = useContext(shopContext);
  return (
    <>
      <div className='title'>Mi carrito</div>
      <div>
        {context.cart.map((p) => {
          return (
            <div className="ta">
              <div className='car-box'>
                <table>
                  <th>
                    Producto
                    <td>
                      <Figure.Image
                        width={171}
                        height={180}
                        alt="171x180"
                        src={p.newItem.img}
                      />
                    </td>
                  </th>
                  <th>
                    Nombre
                    <td>
                      <p>{p.newItem.name}</p>
                    </td>
                  </th>
                  {/* <img className="imagen" src={p.newItem.img} alt="img1"></img> */}
                  <th>
                    Precio
                    <td>
                      <p>{p.newItem.prize}</p>
                    </td>
                  </th>
                  <th>
                    Cantidad
                    <td>
                      <p>{p.quantity}</p>
                    </td>
                  </th>
                  <th>
                    Total
                    <td>
                      <p>{p.total}</p>
                    </td>
                  </th>
                </table>
              </div>
              <button type="button" className="btn btn-light btn-sm" onClick={() => context.removeProductFromCart(p.newItem.id)}>Eliminar</button>
            </div>)
        })
        }
      </div>
      {context.cart.length >= 1 ? (<div>
        <button type="button" className="btn btn-light btn-sm" onClick={() => context.clearCart(context.cart)}>Vaciar el carrito</button>
        <button type="button" className="btn btn-light btn-sm" onClick={<Link to="/CheckOut"/>}>Pagar</button>
      </div>
      ) : (<div id="empty-cart"></div>)
      }
    </>
  )
}

export default Carrito