import React, {useState} from "react";

const Card = (props) => {
  const path = `/assets/images/classic/${props.type}.png`;
  const pathBack = '/assets/images/purple_back.png';
  const [isOpen, setOpen] = useState(false);
  const classNaming = `card-front ${isOpen ? 'open' : ''}`;
  const openCard = (e) => {
    setOpen(true);
    console.log(e.target.key);
  }
  return (
    <div className="card-placer"
         onClick={openCard}
    >
      <div className={classNaming}>
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
