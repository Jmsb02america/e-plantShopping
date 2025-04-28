import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="background-image">
        {/* Puedes definir este fondo en tu CSS */}
      </div>
      <div className="landing-content">
        <h1>Paradise Nursery</h1>
        <p>Donde el verde se une con la serenidad. Descubre nuestra selección de plantas de interior para embellecer tus espacios.</p>
        <Link to="/products">
          <button>Get Started</button>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
