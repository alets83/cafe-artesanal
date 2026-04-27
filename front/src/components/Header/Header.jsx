// import { useState } from 'react'
// import { NavLink, Link, Route, Routes } from 'react-router-dom'
// import Inicio from '../../pages/Inicio/Inicio'
// import Terminos from '../../pages/Terminos/Terminos'
// import NuestroCafe from '../../pages/NuestroCafe/NuestroCafe'
// import Contacto from '../../pages/Contacto/Contacto'

// function Header() {
//   const [count, setCount] = useState(0)

//   return (
//     <><nav>
//         <ul>
//       <NavLink to = "/"> Inicio </NavLink>
//       <NavLink to = "/Terminos"> Términos y Condiciones </NavLink>
//       <NavLink to = "/NuestroCafe"> Nuestro Café </NavLink>
//       <NavLink to = "/Contacto"> Contacto </NavLink>

//       <Routes>
//         <Route path = "/" element = {<Inicio/>}> </Route>
//         <Route path = "Terminos" element = {<Terminos/>}> </Route>
//         <Route path = "NuestroCafe" element = {<NuestroCafe/>}> </Route>
//         <Route path = "Contacto" element = {<Contacto/>}> </Route>
//       </Routes>
//         </ul>
//       </nav>
        
//     </>
//   )
// }
// export default Header;



import { useState } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import Inicio from '../../pages/Inicio/Inicio';
import Terminos from '../../pages/Terminos/Terminos';
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
            <NavLink to="/Terminos" className={({ isActive }) => (isActive ? 'active' : '')}>
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
          <Route path="/Terminos" element={<Terminos />} />
          <Route path="/NuestroCafe" element={<NuestroCafe />} />
          <Route path="/Contacto" element={<Contacto />} />
        </Routes>
      </div>
    </header>
  );
}

export default Header;
