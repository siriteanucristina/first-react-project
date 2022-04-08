import React from "react";

export default function Textare(props) {
  return (
    <textarea cols={props.cols} rows={props.rows} className="input size" />
  );
}
