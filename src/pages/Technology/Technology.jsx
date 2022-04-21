import React, { useEffect, useRef, useState } from 'react';
import './Technology.scss';

import Data from '../../data/data.json';

import { motion } from 'framer-motion';
import { SwitchTransition, CSSTransition } from 'react-transition-group';

const Technology = () => {
  const [technology] = useState(Data.technology);
  const [value, setValue] = useState(0);
  const nodeRefRight = useRef(null);
  const nodeRefLeft = useRef(null);

  const [matches, setMatches] = useState(
    window.matchMedia('(min-width: 880px)').matches
  );

  useEffect(() => {
    window
      .matchMedia('(min-width: 880px)')
      .addEventListener('change', (e) => setMatches(e.matches));
  }, []);

  const { name, images, description } = technology[value];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container technology__img background__img">
        <h5 className="uppercase">
          <span>02</span> SPACE LAUNCH 101
        </h5>

        <div className="content__container technology__container">

          <div className="technology__content-left">

            <nav className="technology__nav">
              {technology.map((technology, index) => (
                <li
                  onClick={() => setValue(index)}
                  key={index}
                  className={`uppercase technology__nav-dot ${
                    index === value ? 'technology__active' : ''
                  }`}
                >
                  {index + 1}
                </li>
              ))}
            </nav>

            <SwitchTransition>
              <CSSTransition
                nodeRef={nodeRefLeft}
                key={value}
                timeout={500}
                classNames="slide-left"
              >
                <div ref={nodeRefLeft}>
                  <h5 className="uppercase">THE TERMINOLOGY…</h5>
                  <h1 className="uppercase">{name}</h1>
                  <p className="description">{description}</p>
                </div>
              </CSSTransition>
            </SwitchTransition>

          </div>

          <div className="technology__content-right">
            <SwitchTransition>
              <CSSTransition
                nodeRef={nodeRefRight}
                key={value}
                timeout={500}
                classNames="slide"
              >
                <div ref={nodeRefRight}>
                  {matches && <img src={images.portrait} alt={name} />}
                  {!matches && <img src={images.land} alt={name} />}
                </div>
              </CSSTransition>
            </SwitchTransition>
          </div>

        </div>
      </div>
    </motion.div>
  );
};

export default Technology;
