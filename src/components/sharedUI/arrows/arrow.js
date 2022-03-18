import React from "react";
import './arrow.scss';

function Arrow(props) {
  return <i className={"arrow " + props.direction}></i>;
}

export default Arrow;
