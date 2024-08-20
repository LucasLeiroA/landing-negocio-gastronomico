import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link
import './Welcome.css';

function Welcome() {
  return (
    <div className="banner">
      <div className='container-welcome'>
        <h1>Dinner with us <span>Friends</span></h1>
        <h2>Accidental appearances</h2>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diem nonummy nibh euismod</p>
        <div className="book-btn">
          <Link to="/catalog" className="table-btn hvr-underline-from-center">
            See the catalog
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
