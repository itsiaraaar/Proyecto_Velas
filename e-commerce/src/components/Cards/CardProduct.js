import { React } from 'react';
import { Button, Card } from 'react-bootstrap';
import './Cards.css';
import { shopContext } from '../Context/Context';
import { Link } from 'react-router-dom';
/* import { data } from '../info/data'; */
function CardProduct() {
    return (
        <>
            <shopContext.Consumer>
                {context => (
                    <>
                        <div id="box" className="row">
                            {context.products.map((p) => {
                                return (
                                    <Card id="color" className="col-lg-6 mb-4" style={{ width: '18rem' }}>
                                        <Link to={`/Item/${p.id}`}>
                                            <Card.Img variant="top" src={p.img}/>
                                        </Link>
                                        <Card.Body>
                                            <Card.Title className='Title'>{p.name}</Card.Title>
                                            <Card.Subtitle>
                                                <span className='subtitle'> {p.category}</span>
                                            </Card.Subtitle>
                                            <Card.Text>
                                                <span>Precio: {p.prize}</span>
                                            </Card.Text>
                                            <Button onClick={() => context.addProductToCart(p)} variant="dark">Agregar al carrito</Button>
                                        </Card.Body>
                                    </Card>
                                )
                            })}
                        </div >
                    </>
                )}
            </shopContext.Consumer>
        </>
    )


}

export default CardProduct;