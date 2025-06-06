import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from '../context/DataProvider.jsx';
import { ShoppingCart, Search, User } from 'lucide-react';
import CarritoModal from './../components/carritoModal.jsx'; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCarritoOpen, setIsCarritoOpen] = useState(false);
  const { carrito, setCarrito } = useContext(DataContext);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleCarrito = () => {
    setIsCarritoOpen(!isCarritoOpen);
  };

  const totalItemsInCart = carrito.reduce((total, item) => total + item.cantidad, 0);


  return (
    <nav 
      className="navbar navbar-expand-lg navbar-dark w-100 shadow-lg" 
      style={{ backgroundColor: '#4f46e5' }}
    >
      <div className="container-fluid">
        {/* Logo y título */}
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <img 
            src='/assets/png/logoRocket1.png'
            alt="TCG Store Logo" 
            className="h-10 w-10 mr-2" 
            height="70"
            width="70"
          />
        </Link>

        {/* Botón de menú para móviles */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded={isMenuOpen ? 'true' : 'false'} 
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menú de navegación */}
        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link text-white">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link to="/pokemon" className="nav-link text-white">Pokémon</Link>
            </li>
            <li className="nav-item">
              <Link to="/yugioh" className="nav-link text-white">Yu-Gi-Oh!</Link>
            </li>
            <li className="nav-item">
              <Link to="/magic" className="nav-link text-white">Magic</Link>
            </li>
            <li className="nav-item">
              <Link to="/ofertas" className="nav-link text-white">Ofertas</Link>
            </li>
            <li className="nav-item">
              <Link to="/contacto" className="nav-link text-white">Contacto</Link>
            </li>
          </ul>

          {/* Iconos de acción en escritorio */}
          <div className="d-flex align-items-center ms-4">
            <button onClick={toggleCarrito} className="btn text-white position-relative me-3">
              <ShoppingCart size={20} />
              {totalItemsInCart > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {totalItemsInCart}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Modal del Carrito */}
      <CarritoModal isOpen={isCarritoOpen} onClose={toggleCarrito} />
    </nav>
  );
};

export default Navbar;