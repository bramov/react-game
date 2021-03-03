import React, { useState } from "react";

const Card = ({ code, clickHandler, open, regime }) => {
  const path = `/assets/images/${regime}/${code}.png`;
  const pathBack = `/assets/images/${regime}_back.png`;

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
