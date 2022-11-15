import React from "react";
import { Carousel } from "react-bootstrap";
/* import { data } from "../../data.js"; */
import img1 from './images/vela-paz-lejos.jpeg';
import img2 from './images/tapamarmolada.jpeg';
import img3 from './images/velablanca.jpeg';
import img4 from './images/velax.jpeg';
import img5 from './images/frasquitos.jpeg';
import img6 from './images/difusores.jpeg';

function Carroussell() {
    return (
        <div className="box" >
            <Carousel className="Carousel">
                <Carousel.Item >
                    <img
                        className="d-blocl w-100"
                        src={img1}
                        alt={"Foto 1"}
                    />
                    <Carousel.Caption>
                        <h3>Vela Paz</h3>
                        <p>Vela de soja con frase decorativa 'Paz' </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item >
                    <img
                        className="d-blocl w-100"
                        src={img2}
                        alt={"Foto 2"}
                    />
                    <Carousel.Caption>
                        <h3>Vela negra de soja con tapa marmolada</h3>
                        <p>Vela de soja color blanco con frasco negro que tiene una tapa de madera marmolada.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item >
                    <img
                        className="d-blocl w-100"
                        src={img3}
                        alt={"Foto 3"}
                    />
                    <Carousel.Caption>
                        <h3>Grande velon de 2 pabilos</h3>
                        <p>Velon de soja con 2 pabilos.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item >
                    <img
                        className="d-blocl w-100"
                        src={img4}
                        alt={"Foto 4"}
                    />
                    <Carousel.Caption>
                        <h3>Lata con vela de soja aromatica fresh</h3>
                        <p>Lata con vela de soja aromatica de fresas</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item >
                    <img
                        className="d-blocl w-100"
                        src={img5}
                        alt={"Foto 5"}
                    />
                    <Carousel.Caption>
                        <h3>Difusor para el auto recargable</h3>
                        <p>Difusor para el auto recargable</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item >
                    <img
                        className="d-blocl w-100"
                        src={img6}
                        alt={"Foto 6"}
                    />
                    <Carousel.Caption>
                        <h3>Difusor de 500 Green Tea</h3>
                        <p>Difusor de té verde para el hogar, la oficina, etc</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            {/* {data.map((info, i) => (
                info.popular ? (
                    <>
                        <Carousel>
                                <Carousel.Item key={i}>
                                    <img
                                        className="d-blocl w-100"
                                        src={info.img1}
                                        alt={"Foto" + i}
                                    />
                                    <Carousel.Caption>
                                        <h3>{info.name}</h3>
                                        <p>{info.description}</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            }}
                        </Carousel>
                    </>) : (<div></div>)))} */}
        </div>
    )
};


export default Carroussell