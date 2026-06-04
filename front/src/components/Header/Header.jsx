import { useState } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import Inicio from '../../pages/Inicio/Inicio';
import Testimonios from '../../pages/Testimonios/Testimonios';
import NuestroCafe from '../../pages/NuestroCafe/NuestroCafe';
import Contacto from '../../pages/Contacto/Contacto';
import './Header.css';

function Header() {
  return (
    <header className="main-header">
      <nav className="nav-container">
        {/* Logo a la izquierda */}
        <div className="logo-brand">
          <div className="logo-circle">V</div>
          <span className="brand-text">Café Artesanal</span>
        </div>

        {/* Lista de enlaces */}
        <ul className="nav-menu">
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink to="/NuestroCafe" className={({ isActive }) => (isActive ? 'active' : '')}>
              Nuestro Café
            </NavLink>
          </li>
          <li>
            <NavLink to="/Testimonios" className={({ isActive }) => (isActive ? 'active' : '')}>
              Testimonios
            </NavLink>
          </li>
          <li>
            <NavLink to="/Contacto" className={({ isActive }) => (isActive ? 'active' : '')}>
              Contacto
            </NavLink>
          </li>
          <li className="cart-item">🛒</li>
        </ul>
      </nav>

      {/* El contenido de las páginas se renderiza aquí abajo */}
      <div className="page-content">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Testimonios" element={<Testimonios />} />
          <Route path="/NuestroCafe" element={<NuestroCafe />} />
          <Route path="/Contacto" element={<Contacto />} />
        </Routes>
      </div>
    </header>
  );
}

export default Header;
