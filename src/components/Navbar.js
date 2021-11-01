import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const routes = [
    {
      id: 0,
      text: 'Home',
      path: '/',
    },
    {
      id: 1,
      text: 'Categories',
      path: '/categories',
    },
  ];

  return (
    <nav>
      <h1>Logo</h1>
      <ul>
        {
      routes.map((route) => (
        <li key={route.id}>
          <NavLink to={route.path} exact>
            {route.text}
          </NavLink>
        </li>
      ))
      }
      </ul>
    </nav>
  );
};

export default Navbar;
