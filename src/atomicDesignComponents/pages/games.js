import React, { Fragment, useState, createContext } from "react";
import { radioOption } from "./../../interface/radioOption";
import { gameObjInterface } from "./../../interface/gameObjInterface";
import Header from "./../molecules/header/header";
import ListGroup from "./../template/listGroup/listGroup";
import JSONData from "./../../data/data.json";

export const FilterButtonContext = createContext("");

function Games() {
  const [radioOptionSelected, setRadioOptionSelected] = useState(
    radioOption.character
  );
  const fnToSetRadioOptionSelected = (radio) => {
    return setRadioOptionSelected(radio);
  };

  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const fnToSetIsPanelOpen = () => {
    setIsPanelOpen((isPanelOpen) => !isPanelOpen);
  };

  let sortedGamesArray = [];
  let gamesArray = [];
  let gameObj = {};

  const iterate = (obj) => {
    Object.keys(obj).forEach((key) => {
      if (key === gameObjInterface.displayName) {
        gameObj[gameObjInterface.displayName] =
          obj[gameObjInterface.displayName];
      }

      if (key === gameObjInterface.image) {
        gameObj[gameObjInterface.image] = obj[gameObjInterface.image];
      }

      if (typeof obj[key] === "object") {
        if (
          key === gameObjInterface.provider &&
          Array.isArray(obj[gameObjInterface.provider])
        ) {
          gameObj[gameObjInterface.provider] = obj[key][0];
        }
        if (key === gameObjInterface.EUR) {
          gameObj[gameObjInterface.minimumStake] = obj[key].minimumStake;
        }

        iterate(obj[key]);
      }
    });

    if (
      gameObj.displayName != null &&
      gameObj.image != null &&
      gameObj.provider != null &&
      gameObj.minimumStake != null
    ) {
      gamesArray.push(gameObj);
      gameObj = {};
    }
  };

  iterate(JSONData);

  if (radioOptionSelected === radioOption.minToMaxStake) {
    sortedGamesArray = gamesArray.sort((a, b) => {
      return a.minimumStake - b.minimumStake;
    });
  }

  if (radioOptionSelected === radioOption.maxToMinStake) {
    sortedGamesArray = gamesArray.sort((a, b) => {
      return b.minimumStake - a.minimumStake;
    });
  }

  if (radioOptionSelected === radioOption.character) {
    sortedGamesArray = gamesArray.sort(function (a, b) {
      return a[gameObjInterface.displayName] > b[gameObjInterface.displayName]
        ? 1
        : a[gameObjInterface.displayName] < b[gameObjInterface.displayName]
        ? -1
        : 0;
    });
  }

  return (
    <Fragment>
      <FilterButtonContext.Provider
        value={{
          radioOptionSelected,
          isPanelOpen,
          fnToSetRadioOptionSelected,
          fnToSetIsPanelOpen,
        }}
      >
        <Header />
        <ListGroup gameData={sortedGamesArray} />
      </FilterButtonContext.Provider>
    </Fragment>
  );
}

export default Games;
