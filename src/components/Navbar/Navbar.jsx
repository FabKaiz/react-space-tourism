import './Navbar.scss';
import logo from '../../assets/shared/logo.svg';
import burgerLogo from '../../assets/shared/icon-hamburger.svg';
import burgerLogoClose from '../../assets/shared/icon-close.svg';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Menu = () => (
  <ul>
    <Link to="/">
      <li className="uppercase">
        <span className="numbers">00</span> Home
      </li>
    </Link>
    <Link to="/destination">
      <li className="uppercase">
        <span className="numbers">01</span> Destination
      </li>
    </Link>
    <Link to="/crew">
      <li className="uppercase">
        <span className="numbers">02</span> Crew
      </li>
    </Link>
    <Link to="/technology">
      <li className="uppercase">
        <span className="numbers">03</span> Technology
      </li>
    </Link>
  </ul>
);

const Navbar = () => {
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
