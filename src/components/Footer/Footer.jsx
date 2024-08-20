import React from 'react';
import logo from '../../assets/logo.png';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer text-center">
        <div>
          <img
            src={logo}
            alt="Logo"
            className="d-inline-block align-top"
            style={{ height: '60px' }}
          />
        </div>
        <div className='container-footer d-flex flex-wrap justify-content-around mt-5 mb-5 mx-auto'>
          <div className='footer-section'>
            <h4>Home</h4>
            <ul>
              <li className='mt-1'>Lorem ipsum dolor sit amet.</li>
              <li className='mt-1'>Lorem ipsum dolor sit amet.</li>
              <li className='mt-1'>Lorem ipsum dolor sit.</li>
            </ul>
          </div>
          <div className='footer-section'>
            <h4>Catalog and products</h4>
            <ul>
              <li className='mt-1'>Wines</li>
              <li className='mt-1'>Cocktails</li>
              <li className='mt-1'>Kids Menu</li>
              <li className='mt-1'>Gourmet Menu</li>
            </ul>
          </div>
          <div className='footer-section'>
            <h4>Contact</h4>
            <ul>
              <li className='mt-1'><span className="fas fa-map-marker-alt"></span> 6 E Esplanade, St Albans VIC 3021, Argentina</li>
              <li className='mt-1'><span className="fas fa-phone"></span> +91 80005 89080</li>
              <li className='mt-1'><span className="fas fa-envelope"></span> support@foodfunday.com</li>
            </ul>
          </div>
          <div className='footer-section'>
            <h4>Opening Hours</h4>
            <ul>
              <li>Monday - Thursday</li>
              <li className='date'>11:00 AM - 9:00 PM</li>
              <li className='mt-2'>Friday - Saturday</li>
              <li className='date'>11:00 AM - 5:00 PM</li>
            </ul>
          </div>
        </div>
        <div className='copyRight d-flex justify-content-center align-items-center'>
          <p>Copyright © 2024 Food Funday by Lucas Leiro</p>
        </div>
    </footer>
  );
}

export default Footer;
