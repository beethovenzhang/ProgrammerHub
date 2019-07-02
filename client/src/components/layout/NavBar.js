import React from 'react';

const NavBar = () => {
  return (
    <nav className='navbar bg-dark'>
      <h1>
        <a href='index.html'>
          <i className='fas fa-code' /> ProgrammerHub
        </a>
      </h1>
      <ul>
        <li>
          <a href='profiles.html'>Programmers</a>
        </li>
        <li>
          <a href='register.html'>Register</a>
        </li>
        <li>
          <a href='login.html'>Login</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
