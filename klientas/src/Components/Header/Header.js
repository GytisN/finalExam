import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'

function Header() {
  return (
    <div className="header">
      <div className="naming">Dalyvių registracijos telefonu forma</div>
      <div className="links-container">
        <ul className="links">
          <li>
            <Link to="/registracija">Registracijos forma</Link>
          </li>
          <li>
            <Link to="/vartotojai">Dalyvių sąrašas</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
