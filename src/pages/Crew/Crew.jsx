import React, { useRef, useState } from 'react'
import Data from '../../data/data.json';
import './Crew.scss'

import { motion } from 'framer-motion';
import { SwitchTransition, CSSTransition } from 'react-transition-group';


const Crew = () => {
  const [crew] = useState(Data.crew);
  const [value, setValue] = useState(0);
  const nodeRefRight = useRef(null);
  const nodeRefLeft = useRef(null);

  const { name, images, role, bio } = crew[value];

  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="container crew__img background__img">

      <h5 className="uppercase">
        <span>02</span> Meet your crew
      </h5>

      <div className="content__container">

        <div className="crew__content-left">

          <SwitchTransition>
            <CSSTransition
              nodeRef={nodeRefLeft}
              key={value}
              timeout={500}
              classNames="slide"
            >
              <div ref={nodeRefLeft}>
                <h4 className="uoppercase">{role}</h4>
                <h1 className="uppercase">{name}</h1>
                <p className="description">{bio}</p>
              </div>
            </CSSTransition>
          </SwitchTransition>

          <nav>
            {crew.map((crew, index) => (
              <li
                onClick={() => setValue(index)}
                key={index}
                className={`uppercase ${index === value ? 'active' : ''}`}
              >
                {crew.name}
              </li>
            ))}
          </nav>

        </div>

        <div className="crew__content-right">
          <SwitchTransition>
            <CSSTransition
              nodeRef={nodeRefRight}
              key={value}
              timeout={400}
              classNames="fade-img"
            >
              <div ref={nodeRefRight}>
                <img src={images.webp} alt={name} />
              </div>
            </CSSTransition>
          </SwitchTransition>
        </div>

      </div>
    </div>
  </motion.div>
  )
}

export default Crew