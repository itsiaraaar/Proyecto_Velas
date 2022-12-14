import React from 'react';
import CardProduct from '../Cards/CardProduct';
import { data } from '../info/data';
import Loader from '../Loader/Loader';

function Catalogo() {
  
  return (
    <div className='div'>
    <h1 className='title'>Productos</h1>
    <div>{data ? (
      <div key={data.id}>
        <CardProduct/>
        </div>
      ): (<Loader/>)
    }
    </div>
    </div>
    )
}

export default Catalogo