import React from 'react';

function Footer() {
  return (
    <footer className="container-web" style={{ borderTop: '1px solid #eee', padding: '40px 0', marginTop: '50px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="logo-section">
          <span className="brand-name">© 2026 Café Artesanal</span>
        </div>
        <div className="nav-links">
          <p>Hecho con ❤️ para amantes del café.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;



