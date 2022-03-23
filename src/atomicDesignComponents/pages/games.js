import React, { useState } from "react";

import useFetchData from "./../../hooks/useFetchData";
import { radioOption } from "./../../interface/radioOption";
import { gameObjInterface } from "./../../interface/gameObjInterface";

import Header from "../molecules/header/header";
import ListGroup from "./../template/listGroup/listGroup";

function Games() {
  const { data, loading } = useFetchData("./../../module/test-data.json");
  let [dropdownStatus, setDropDownStatus] = useState(radioOption.character);

  let filterGameArray = [];
  let gameItemArray = [];
  let gameObj = {};

  // const getDropdownValue = function (value) {
  //   return setDropDownStatus(value);
  // };

  const iterateGames = (obj) => {
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
        gameItemArray.push(gameObj);
        gameObj = {};
      }
    };
    iterate(data);
  };

  iterateGames(data);

  //filter by min to max stake
  if (dropdownStatus === radioOption.minToMaxStake) {
    filterGameArray = gameItemArray.sort((a, b) => {
      return a.minimumStake - b.minimumStake;
    });
  }

  //filter by max to min stake
  if (dropdownStatus === radioOption.maxToMinStake) {
    filterGameArray = gameItemArray.sort((a, b) => {
      return b.minimumStake - a.minimumStake;
    });
  }

  //filter by character
  if (dropdownStatus === radioOption.character) {
    filterGameArray = gameItemArray.sort(function (a, b) {
      return a[gameObjInterface.displayName] > b[gameObjInterface.displayName]
        ? 1
        : a[gameObjInterface.displayName] < b[gameObjInterface.displayName]
        ? -1
        : 0;
    });
  }

  return (
    <div>
      <Header />
      <ListGroup gameData={filterGameArray} />
    </div>
  );
}

export default Games;
