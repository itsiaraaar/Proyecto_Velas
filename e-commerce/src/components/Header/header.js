//rfce
import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

export function Header(props) {
    const { logo, nav1, nav2, nav3, botn } = props
    return (
        <div>
            <header className="header">
                <div className="logo">
                    <Link to="/"><img
                        id="log"
                        src={logo}
                        alt="Logo de la marca"
                    /></Link>
                </div>
                <nav>
                    <ul className="nav-links">
                        <li><Link to="/Catalogo">{nav1}</Link></li>
                        <li><Link to="/Contacto">{nav2}</Link></li>
                        <li><Link to="/AboutUs">{nav3}</Link></li>
                    </ul>
                </nav>
                <div className="btn">
                    <button>
                        <Link to="/Carrito"><img
                        id="bag"
                        src={botn}
                        alt="carrito"/>
                        </Link>
                    </button>
                </div>
            </header>
        </div>
        )
}
