import React from 'react';
import './Contacto.css'; 

function Contacto() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("¡Mensaje enviado! Nos pondremos en contacto contigo pronto.");
  };

  return (
    <div className="container-web">
      {/* --- SECCIÓN HERO DE CONTACTO --- */}
      <header className="hero">
        <div className="hero-content">
          <h1>Ponte en Contacto</h1>
          <p>¿Tienes alguna duda sobre nuestros granos o pedidos especiales? Estamos aquí para ayudarte.</p>
        </div>
      </header>

      <section className="contacto-flex">
        {/* --- FORMULARIO --- */}
        <div className="form-container">
          <form onSubmit={handleSubmit} className="contacto-form">
            <div className="form-group">
              <label>Nombre Completo</label>
              <input type="text" placeholder="Ej. Juan Pérez" required />
            </div>
            
            <div className="form-group">
              <label>Correo Electrónico</label>
              <input type="email" placeholder="juan@ejemplo.com" required />
            </div>

            <div className="form-group">
              <label>Mensaje</label>
              <textarea rows="5" placeholder="Escribe tu mensaje aquí..." required></textarea>
            </div>

            <button type="submit" className="btn-primary">Enviar Mensaje</button>
          </form>
        </div>

        {/* --- INFORMACIÓN LATERAL --- */}
        <div className="info-sidebar">
          <div className="info-item">
            <span className="icon">📍</span>
            <div>
              <h3>Visítanos</h3>
              <p>Av. Cafetales 456, Colonia Centro,<br /> Ciudad de México.</p>
            </div>
          </div>

          <div className="info-item">
            <span className="icon">📞</span>
            <div>
              <h3>Llámanos</h3>
              <p>+52 (55) 1234-5678</p>
            </div>
          </div>

          <div className="info-item">
            <span className="icon">⏰</span>
            <div>
              <h3>Horario</h3>
              <p>Lunes a Viernes: 8:00 - 20:00<br />Sábados: 9:00 - 18:00</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- FRASE DE CIERRE --- */}
      <div className="middle-text" style={{ marginTop: '80px' }}>
        <p>Siempre hay tiempo para una buena taza de café y una buena charla.</p>
      </div>
    </div>
  );
}

export default Contacto;
