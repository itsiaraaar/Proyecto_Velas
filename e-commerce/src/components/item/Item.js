import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { data } from '../info/data';
import Loader from '../Loader/Loader';
/* import Figure from 'react-bootstrap/Figure'; */

function Item() {
    const { id } = useParams();
    const [produc, setProduct] = useState();

    useEffect(() => {
        getProductById(id);
    }, [])

    function getProductById(id) {
        const item = data.find(x => x.id === id)
        if (item !== null) {  setProduct(item) }
    }
    return (
        <>
            {produc ? ( <>
                <div>
                    <h1>Información del producto</h1>
                </div>
                <div>
                    {/* <Figure>
                        <Figure.Image
                            width={171}
                            height={180}
                            alt="171x180"
                            src={produc.img1}
                        />
                        <Figure.Image
                            width={171}
                            height={180}
                            alt="171x180"
                            src={produc.img2}
                        />
                        <Figure.Caption>
                            <h1>{produc.name}</h1>
                            <h2>{produc.category}</h2>
                            <h3>{produc.prize}</h3>
                            <p>{produc.description}</p>
                        </Figure.Caption>
                    </Figure> */}
                    <img src={produc.img1} alt="fot1"></img>
                    <img src={produc.img2} alt="fot1"></img>
                    <h1>{produc.name}</h1>
                    <h2>{produc.category}</h2>
                    <h3>{produc.prize}</h3>
                    <p>{produc.description}</p>
                </div>
            </>) : <Loader></Loader>}
        </>


    )
}

export default Item