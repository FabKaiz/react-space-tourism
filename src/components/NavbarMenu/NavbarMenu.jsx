import React from 'react';
import { NavLink } from 'react-router-dom';

const NavbarMenu = ({ handleClick }) => {
  return (
    <ul>
      <NavLink to="/" activeclassname="active" onClick={() => handleClick()}>
        <li className="uppercase">
          <span className="numbers">00</span> Home
        </li>
      </NavLink>
      <NavLink
        to="/destination"
        activeclassname="active"
        onClick={() => handleClick()}
      >
        <li className="uppercase">
          <span className="numbers">01</span> Destination
        </li>
      </NavLink>
      <NavLink
        to="/crew"
        activeclassname="active"
        onClick={() => handleClick()}
      >
        <li className="uppercase">
          <span className="numbers">02</span> Crew
        </li>
      </NavLink>
      <NavLink
        to="/technology"
        activeclassname="active"
        onClick={() => handleClick()}
      >
        <li className="uppercase">
          <span className="numbers">03</span> Technology
        </li>
      </NavLink>
    </ul>
  );
};

export default NavbarMenu;
