import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => {

  return(
    <>
    <div className="container">
    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <NavLink to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none ">
        <span className="fs-4">Blog Sheet</span>
      </NavLink>
      <ul className="nav nav-pills">
        <li className="nav-item"><NavLink to="/" className="nav-link " >Home</NavLink></li>
        <li className="nav-item"><NavLink to="/compose" className="nav-link ">Compose</NavLink></li>
        <li className="nav-item"><NavLink to="/delete" className="nav-link">Delete</NavLink></li>
      </ul>
    </header>
  </div>
    </>
  )
}

export default Header;
