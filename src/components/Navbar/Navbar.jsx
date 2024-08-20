import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Navbar.css';
import logo from '../../assets/logo.png';

function NavbarComponent() {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();


  const handleLinkClick = () => {
    if (window.innerWidth < 992) {
      setExpanded(false);
    }
  };

  const isTransparent = location.pathname === '/';

  return (
    <Navbar   bg={isTransparent ? "transparent" : "black"}  expand="lg" expanded={expanded} variant="dark">
      <Container>
        <div className="d-flex w-100 align-items-center justify-content-between">
          <Navbar.Brand as={Link} to="/" className="navbar-brand-left">
            <img
              src={logo}
              alt="Logo"
              className="d-inline-block align-top"
              style={{ height: '40px' }}
            />
          </Navbar.Brand>


          <button
            type="button"
            className="navbar-toggle custom-toggle d-lg-none"
            onClick={() => setExpanded(!expanded)}
          >
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>



          <Navbar.Collapse id="basic-navbar-nav" className="w-100">
            <div className="d-flex justify-content-center w-100 d-none d-lg-flex"></div>
            <Nav className="ml-auto d-none d-lg-flex nav-links">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/catalog">Catalog</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            </Nav>
            <Nav className="d-lg-none w-100 nav-links mb-3">
              <Nav.Link as={Link} to="/" onClick={handleLinkClick}>Home</Nav.Link>
              <Nav.Link as={Link} to="/catalog" onClick={handleLinkClick}>Catalog</Nav.Link>
              <Nav.Link as={Link} to="/contact" onClick={handleLinkClick}>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
