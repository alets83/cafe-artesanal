import React from 'react';
import './Inicio.css';

function Inicio() {
  return (
    <div className="container-web">

      {/* --- HERO SECTION --- */}  
      <header className="hero">
        <div className="hero-content">
          <h1>Café Artesanal</h1>
          <p>Saborea la autenticidad de nuestro café</p>
          <div className="hero-buttons">
            <button className="btn-primary">Compra Ahora</button>
            <button className="btn-secondary">Más Información</button>
          </div>
        </div>
        <div className="hero-image">
          {/* Aquí iría tu imagen real. He puesto un placeholder que simula la bolsa y taza */}
          <div className="placeholder-image">
            <div className="cup-mockup"></div>
            <div className="bag-mockup">
               <div className="bag-logo">V</div>
               <span>Café Artesanal</span>
            </div>
          </div>
        </div>
      </header>

      {/* --- FRASE INTERMEDIA --- */}
      <div className="middle-text">
        <p>Las sabias manos de nuestros productores,<br/> trayendo lo mejor de nuestro campo.</p>
      </div>

      {/* --- TARJETAS DE CARACTERÍSTICAS --- */}
      <section className="features-grid">
        <div className="card">
          <div className="icon">🍃</div>
          <h3>100% Orgánico</h3>
          <p>Cultivado de forma natural</p>
        </div>
        <div className="card">
          <div className="icon">☕</div>
          <h3>Tostado Artesanal</h3>
          <p>Sabor y aroma excepcional</p>
        </div>
        <div className="card">
          <div className="icon">🚚</div>
          <h3>Entrega Rápida</h3>
          <p>Envíos a todo el país</p>
        </div>
      </section>
    </div>
  );
}

export default Inicio;