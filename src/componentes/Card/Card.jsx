import React from 'react'
import Buttom from '../Buttom/Buttom';

import "./Card.css";
const Card = ({ fortuna, changeFramework }) => {
  return (
    <section className="card">
      <div className='card__element'>
      <h2 className="card__title">{fortuna.phrase}</h2>
      <p className="card__description">{fortuna.author}</p>
      <div className="card__container-btn">
        <Buttom handleClick={changeFramework}/>
      </div>
      </div>
    </section>
  );
};

export default Card;