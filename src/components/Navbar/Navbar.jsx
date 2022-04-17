import './Navbar.scss';
import logo from '../../assets/shared/logo.svg';

const Navbar = () => {
  return (
    <div className="navbar__container">
      <div className="navbar__logo">
        <img src={logo} alt="logo" />
      </div>

      <div className="navbar__line"></div>

      <div className="navbar__links">
        <ul>
          <li className="uppercase">
            <span className="numbers">00</span> Home
          </li>
          <li className="uppercase">
            <span className="numbers">01</span> Destination
          </li>
          <li className="uppercase">
            <span className="numbers">02</span> Crew
          </li>
          <li className="uppercase">
            <span className="numbers">03</span> Technology
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
