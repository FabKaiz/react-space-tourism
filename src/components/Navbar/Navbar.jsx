import './Navbar.scss';
import logo from '../../assets/shared/logo.svg';
import burgerLogo from '../../assets/shared/icon-hamburger.svg';
import burgerLogoClose from '../../assets/shared/icon-close.svg';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  const Menu = () => (
    <ul>
      <NavLink to="/" activeclassname="active" onClick={() => setToggleMenu(false)}>
        <li className="uppercase">
          <span className="numbers">00</span> Home
        </li>
      </NavLink>
      <NavLink to="/destination" activeclassname="active" onClick={() => setToggleMenu(false)}>
        <li className="uppercase">
          <span className="numbers">01</span> Destination
        </li>
      </NavLink>
      <NavLink to="/crew" activeclassname="active" onClick={() => setToggleMenu(false)}>
        <li className="uppercase">
          <span className="numbers">02</span> Crew
        </li>
      </NavLink>
      <NavLink to="/technology" activeclassname="active" onClick={() => setToggleMenu(false)}>
        <li className="uppercase">
          <span className="numbers">03</span> Technology
        </li>
      </NavLink>
    </ul>
  );
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar__container">
      <div className="navbar__logo">
        <img src={logo} alt="logo" />
      </div>

      <div className="navbar__line"></div>

      <div className="navbar__links">
        <Menu />
      </div>

      <div className="navbar__links-smallcreen">
        {toggleMenu ? (
          <img
            src={burgerLogoClose}
            alt="menu icon"
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <img
            src={burgerLogo}
            alt="menu icon"
            onClick={() => setToggleMenu(true)}
          />
        )}

        {toggleMenu && (
          <div className="navbar__links-smallscreen_menu slide-left">
            <Menu />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
