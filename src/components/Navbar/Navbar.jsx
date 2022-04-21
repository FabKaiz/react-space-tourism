import './Navbar.scss';
import logo from '../../assets/shared/logo.svg';
import burgerLogo from '../../assets/shared/icon-hamburger.svg';
import burgerLogoClose from '../../assets/shared/icon-close.svg';
import { useRef, useState } from 'react';
import NavbarMenu from '../NavbarMenu/NavbarMenu';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const navRef = useRef(null);

  const handleClick = () => {
    if (!toggleMenu) return; 
    navRef.current.style.width = '20%';
    navRef.current.style.opacity = 0;
    const animationTimer = setTimeout(() => {
      setToggleMenu(false);
    }, 300);
    return () => clearTimeout(animationTimer);
  };

  return (
    <div className="navbar__container">
      <div className="navbar__logo">
        <img src={logo} alt="logo" />
      </div>

      <div className="navbar__line"></div>

      <div className="navbar__links">
        <NavbarMenu handleClick={handleClick} />
      </div>

      <div className="navbar__links-smallcreen">
        {toggleMenu ? (
          <img
            src={burgerLogoClose}
            alt="menu icon"
            onClick={() => handleClick()}
          />
        ) : (
          <img
            src={burgerLogo}
            alt="menu icon"
            onClick={() => setToggleMenu(true)}
          />
        )}

        {toggleMenu && (
          <div
            ref={navRef}
            className="navbar__links-smallscreen_menu slide-left"
          >
            <NavbarMenu handleClick={handleClick} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
