import React, { useState } from 'react';
import './Destination.scss';
import Data from '../../data/data.json';

import { motion } from 'framer-motion';

const Destination = () => {
  const [destinations] = useState(Data.destinations);
  const [value, setValue] = useState(0);

  const { name, images, description, distance, travel } = destinations[value];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="destination__container background__img">
        <div className="destination__content-container">
          <div className="destination__content-left">
            <h5 className="uppercase">
              <span>01</span> Pick your destination
            </h5>
            <img src={images.webp} alt={name} />
          </div>
          <div className="destination__content-right">
            <nav>
              {destinations.map((destination, index) => (
                <li
                  onClick={() => setValue(index)}
                  key={index}
                  className={`uppercase ${index === value ? 'active' : ''}`}
                >
                  {destination.name}
                </li>
              ))}
            </nav>
            <h1 className="uppercase">{name}</h1>
            <p className="description">{description}</p>
            <hr />
            <div className="info">
              <div>
                <p className="subheading2 uppercase">Avg. Distance</p>
                <p className="subheading1 uppercase">{distance}</p>
              </div>
              <div>
                <p className="subheading2 uppercase">Est. travel time</p>
                <p className="subheading1 uppercase">{travel}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Destination;
