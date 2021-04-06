import React from "react";
import "./Button.css";

export default function Button(props) {
  let cssClass = "button ";
  cssClass += props.operation ? "operation" : "";
  cssClass += props.double ? "double" : "";
  cssClass += props.triple ? "triple" : "";

  return (
    <button
      onClick={(e) => props.click && props.click(props.label)}
      className={cssClass}
    >
      {props.label}
    </button>
  );
}
