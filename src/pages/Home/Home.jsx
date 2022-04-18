import { Link } from 'react-router-dom';
import './Home.scss';

const Home = () => {
  return (
    <div className="home__container">
      <div className="home__content-left">
        <h5 className="uppercase">So, you want to travel to</h5>
        <h1 className="uppercase">Space</h1>
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>

      <div className="home__content-right">
        <Link to="/destination">
          <div className="button__home uppercase">Explore</div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
