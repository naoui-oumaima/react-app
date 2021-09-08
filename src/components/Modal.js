import React from "react";

const Modall = (props) => {
  return (
    props.show && (
      <div className="Modall">
        <div onClick={props.cancel} className="backDrop"></div>
        <div className="customModal">{props.children}</div>
      </div>
    )
  );
};
export default Modall;
