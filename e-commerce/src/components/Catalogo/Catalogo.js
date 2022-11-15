import React from 'react';
import CardProduct from '../Cards/CardProduct';
import { data } from '../info/data';
import Loader from '../Loader/Loader';

function Catalogo() {
  return (
    <div>{data ? (
        <CardProduct/>
      ): (<Loader/>)
    }
    </div>
  )
}

export default Catalogo