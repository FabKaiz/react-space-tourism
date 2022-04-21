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
  const [animationClass, setAnimationClass] = useState('slide-bottom');

  // Set a sliding animation to the bottom if user click a menu number
  // below the current one otherwise set the animation to the top.
  const handleClickAndSetAnimationClass = (index) => {
    index > value
      ? setAnimationClass('slide-bottom')
      : setAnimationClass('slide-top');

    setTimeout(() => {
      setValue(index);
    }, 1);
  };

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
          <span>03</span> SPACE LAUNCH 101
        </h5>

        <div className="content__container technology__container">
          <div className="technology__wrapper">
            <nav className="technology__nav">
              {technology.map((technology, index) => (
                <li
                  onClick={() => handleClickAndSetAnimationClass(index)}
                  key={index}
                  className={`uppercase technology__nav-dot ${
                    index === value ? 'technology__active' : ''
                  }`}
                >
                  <p>{index + 1}</p>
                </li>
              ))}
            </nav>
            <div className="technology__content-left">
              <SwitchTransition>
                <CSSTransition
                  nodeRef={nodeRefLeft}
                  key={value}
                  timeout={500}
                  classNames={animationClass}
                >
                  <div ref={nodeRefLeft}>
                    <h5 className="uppercase">THE TERMINOLOGY…</h5>
                    <h1 className="uppercase">{name}</h1>
                    <p className="description">{description}</p>
                  </div>
                </CSSTransition>
              </SwitchTransition>
            </div>
          </div>

          <div className="technology__content-right">
            <SwitchTransition>
              <CSSTransition
                nodeRef={nodeRefRight}
                key={value}
                timeout={500}
                classNames={animationClass}
              >
                <div ref={nodeRefRight}>
                  {matches && <img src={images.portrait} alt={name} />}
                  {!matches && <img src={images.landscape} alt={name} />}
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
