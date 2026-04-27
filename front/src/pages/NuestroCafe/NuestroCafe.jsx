import React from 'react';

function NuestroCafe() {
  return (
    <div className="container-web">
      <header className="hero">
        <div className="hero-content">
          <h1>Nuestra Selección</h1>
          <p>Granos cultivados con pasión y respeto por la tierra.</p>
        </div>
      </header>

      <section className="features-grid">
        <div className="card">
          <h3>Origen Único</h3>
          <p>Proveniente de las mejores fincas de altura.</p>
        </div>
        <div className="card">
          <h3>Proceso Lavado</h3>
          <p>Resalta la acidez limpia y notas frutales.</p>
        </div>
        <div className="card">
          <h3>Variedad Arábica</h3>
          <p>Garantizamos calidad premium en cada taza.</p>
        </div>
      </section>
    </div>
  );
}

export default NuestroCafe;
