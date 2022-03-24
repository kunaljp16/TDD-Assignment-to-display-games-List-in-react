import React, { useContext } from "react";
import RadioButton from "../../atoms/radioButton/radioButton";
import { radioOption } from "../../../interface/radioOption";
import { useDetectClickOutside } from "react-detect-click-outside";
import { FilterButtonContext } from "./../../pages/games";

function RadioButtonGroup() {
  const { radioOptionSelected, fnToSetIsPanelOpen } = useContext(FilterButtonContext);
  const ref = useDetectClickOutside({ onTriggered: fnToSetIsPanelOpen });

  return (
    <div ref={ref}>
      <RadioButton
        name="option"
        value={radioOption.character}
        label={radioOption.character}
        isChecked={radioOption.character === radioOptionSelected}
      />
      <RadioButton
        name="option"
        value={radioOption.minToMaxStake}
        label={radioOption.minToMaxStake}
        isChecked={radioOption.minToMaxStake === radioOptionSelected}
      />
      <RadioButton
        name="option"
        value={radioOption.maxToMinStake}
        label={radioOption.maxToMinStake}
        isChecked={radioOption.maxToMinStake === radioOptionSelected}
      />
    </div>
  );
}

export default RadioButtonGroup;
