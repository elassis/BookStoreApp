import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';

const Navbar = () => {
  const routes = [
    {
      id: 0,
      text: 'BOOKS',
      path: '/',
      class: 'BOOKS',
    },
    {
      id: 1,
      text: 'CATEGORIES',
      path: '/categories',
      class: 'CATEGORIES',
    },
  ];

  return (
    <nav className="nav-container">
      <div className="logo">
        <p className="logo-text-1">bookstore</p>
        <p className="logo-text-2">cms</p>
      </div>
      <ul className="links">
        {
      routes.map((route) => (
        <li className={route.class} key={route.id}>
          <NavLink to={route.path} exact>
            {route.text}
          </NavLink>
        </li>
      ))
      }
      </ul>
      <p className="user-login"><i className="fas fa-user" /></p>
    </nav>
  );
};

export default Navbar;
