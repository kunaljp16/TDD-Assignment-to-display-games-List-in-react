import React, { useContext } from "react";
import { FilterButtonContext } from "./../../pages/games";

import "./radioButton.scss";

function RadioButton(props) {

  const { fnToSetRadioOptionSelected } = useContext(FilterButtonContext);

  const radioChangeFn = (e) => {
    const { id } = e.currentTarget;
    fnToSetRadioOptionSelected(id);
  };

  return (
    <div>
      <input
        type="radio"
        className="radioButton"
        name={props.name}
        id={props.value}
        checked={props.isChecked}
        onChange={radioChangeFn}
      />
      <label htmlFor={props.value}>
        <span>{props.label}</span>
      </label>
    </div>
  );
}

export default RadioButton;
