import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { data } from '../info/data';
import Loader from '../Loader/Loader';
import Figure from 'react-bootstrap/Figure';
import "../item/item.css";

function Item() {
    const { id } = useParams();
    const [produc, setProduct] = useState();

    useEffect(() => {
        getProductById(id);
    }, [])

    function getProductById(id) {
        /* cambie el === por == */
        const item = data.find(x => x.id == id)
        if (item != null) { setProduct(item) }
    }
    return (
        <>
            {produc ? (
                <div>
                    <Figure className='flex-img'>
                        <Figure.Image
                            className='flex-img'
                            width={250}
                            height={250}
                            alt="img1"
                            src={produc.img}
                        />
                        {produc.img2 ? (
                            <Figure.Image
                                className='flex-img'
                                width={250}
                                height={250}
                                alt="171x180"
                                src={produc.img2} />) : (<div></div>)}
                        <div className='description'>
                            <h1 className='border-title'>{produc.name}</h1>
                            <h5>
                                Categoría:{produc.category}
                                <br></br>
                                {produc.prize}$
                                <br></br>
                                {produc.description}
                            </h5>
                        </div>
                    </Figure>
                </div >) : (<Loader></Loader>)
            }
        </>
    )
}

export default Item