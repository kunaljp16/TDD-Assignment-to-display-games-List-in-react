import "./filterDropdown.scss";
import React, { useState } from "react";
import RadioButtonGroup from "./../../molecules/radioButtonGroup/radioButtonGroup";
import Arrow from "../arrows/arrow";

function Dropdown(props) {
  let [isPanelOpen, setIsPanelOpen] = useState(false);

  const togglePanelHandler = function () {
    isPanelOpen = !isPanelOpen;
    return setIsPanelOpen(isPanelOpen);
  };
  return (
    <div className="positionRelative">
      <button
        class={isPanelOpen ? "expandedButton button" : "button"}
        onClick={togglePanelHandler}
      >
        <Arrow direction={isPanelOpen ? "up" : "down"} />
        {props.text}
      </button>
      {isPanelOpen && (
        <div className="panelExpanded">
          <RadioButtonGroup togglePanelHandler={togglePanelHandler} />
        </div>
      )}
    </div>
  );
}

export default Dropdown;
