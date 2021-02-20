import React from "react";

const ActionButton = (props) => {
  return (
    <>
      <a onClick={props.start} className="btn-floating btn-large red pulse"><i className="material-icons">play_circle_outline</i></a>
      <h4>Начать новую игру</h4>
    </>
  )
}

export default ActionButton;
