import "./filterDropdown.scss";
import React, { useContext } from "react";
import RadioButtonGroup from "../../molecules/radioButtonGroup/radioButtonGroup";
import Arrow from "../arrows/arrow";
import { FilterButtonContext } from "../../pages/games";

function FilterDropdown(props) {
  const { isPanelOpen, fnToSetIsPanelOpen } = useContext(FilterButtonContext);

  return (
    <div className="positionRelative">
      <button
        className={isPanelOpen ? "expandedButton filterButton" : "filterButton"}
        onClick={fnToSetIsPanelOpen}
      >
        <Arrow direction={isPanelOpen ? "up" : "down"} />
        {props.text}
      </button>
      {isPanelOpen && (
        <div className="panelExpanded">
          <RadioButtonGroup />
        </div>
      )}
    </div>
  );
}

export default FilterDropdown;
