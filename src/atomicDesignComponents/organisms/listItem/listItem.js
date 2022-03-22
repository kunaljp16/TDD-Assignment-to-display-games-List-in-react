import Description from "./../description/description";
import Button from "./../../atoms/button/button";
import "./listItem.scss";

function ListItem(props) {
  return (
    <div className="listItem">
      <div className="itemInnerWrapper">
        <Description gameData={props.gameData} />
        <Button text="PLAY" />
      </div>
    </div>
  );
}

export default ListItem;
