import React from "react";

const Modall = (props) => {
  // cancel=()=>{

  // };
  return (
    props.show && (
      <div onClick={props.click} className="Modall">
        <div onClick={props.cancel} className="backDrop"></div>
        <div className="customModal">{props.children}</div>
      </div>
    )
  );
};
export default Modall;
