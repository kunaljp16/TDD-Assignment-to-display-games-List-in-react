import RadioButton from "../../atoms/radioButton/radioButton";
import { radioOption } from "../../../interface/radioOption";
import React, { useState } from "react";
import { useDetectClickOutside } from "react-detect-click-outside";

function RadioButtonGroup(props) {
  const [selectedInput, setSelectedInput] = useState(radioOption.character);
  const ref = useDetectClickOutside({ onTriggered: props.togglePanelHandler });
  const radioChangeHandler = (inputValue) => {
    setSelectedInput(inputValue);
  };
  return (
    <div ref={ref}>
      <RadioButton
        name="option"
        value={radioOption.character}
        label={radioOption.character}
        isChecked={radioOption.character === selectedInput}
        radioChangeHandler={radioChangeHandler}
      />
      <RadioButton
        name="option"
        value={radioOption.minToMaxStake}
        label={radioOption.minToMaxStake}
        isChecked={radioOption.minToMaxStake === selectedInput}
        radioChangeHandler={radioChangeHandler}
      />
      <RadioButton
        name="option"
        value={radioOption.maxToMinStake}
        label={radioOption.maxToMinStake}
        isChecked={radioOption.maxToMinStake === selectedInput}
        radioChangeHandler={radioChangeHandler}
      />
    </div>
  );
}

export default RadioButtonGroup;
