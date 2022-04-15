import React from "react";

export default function Input(props) {
  return (
    <input
      className="input"
      type={props.type}
      value={props.value}
      onChange={props.onChange}
    />
  );
}
