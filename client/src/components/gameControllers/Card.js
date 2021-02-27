import React, { useState } from "react";

const Card = ({ code, clickHandler, open }) => {
  const path = `/assets/images/classic/${code}.png`;
  const pathBack = '/assets/images/purple_back.png';

  return (
      <div className="card-placer"
           onClick={clickHandler}
      >
        <div className={`card-front ${open ? 'open' : ''}`}>
          <div className="card-inner">
            <img width="100%" src={pathBack} alt=""/>
          </div>
          <div className="card-outer">
            <img width="100%" src={path} alt=""/>
          </div>
        </div>
      </div>
  )
};

export default Card;
