import React, { useState } from 'react';
import './Destination.scss';
import Data from '../../data/data.json';

const Destination = () => {
  const [destinations] = useState(Data.destinations);
  const [value, setValue] = useState(0);

  const { name, images, description, distance, travel } = destinations[value];

  return (
    <div className="destination__container background__img">
      <h5 className="uppercase">
        <span>01</span> Pick your destination
      </h5>
      <div className="destination__content-container">
        <div className="destination__content-left">
          <img src={images.png} alt={name} />
        </div>
        <div className="destination__content-right">
          <nav>
            <li>{name}</li>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Destination;
