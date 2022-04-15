import React from "react";

const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={`btn btn-${props.type} btn-${props.size}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
