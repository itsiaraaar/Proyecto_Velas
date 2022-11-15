import { Route, Routes } from 'react-router-dom';
import './App.css';
import bag from '../src/bag.svg';
import log from '../src/components/info/images/logo.jpeg'
import Home from './components/Home/Home';
import { Header } from './components/Header/header';
import Contacto from './components/Contacto/Contacto';
import Carrito from './components/Carrito/Carrito';
import Catalogo from './components/Catalogo/Catalogo';
import GlobalState from './components/Context/Context';
import Item from './components/item/Item';
import AboutUs from './components/AboutUs/AboutUs';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
    <GlobalState>
      <Header logo={log} nav1="Cátalogo" nav2="Contacto" nav3="AboutUs" botn={bag} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/Catalogo" element={<Catalogo />} />
        <Route path='/Contacto' element={<Contacto />} />
        <Route path="/AboutUs" element={<AboutUs/>} />
        <Route path='/Item/:id' element={<Item />} />
        <Route path="/Carrito" element={<Carrito />} />
      </Routes>
      <Footer className="footer"/>
    </GlobalState>
    </>
    

  );
}

export default App;
