import Description from "./../description/description";
import Button from "./../../atoms/button/button";
import "./listItem.scss";

function ListItem(props) {
  return (
    <div className="listItemWrapper" role="listitem">
      <div className="listItem">
        <Description gameData={props.gameData} />
        <div className="buttonWrapper">
          <Button text="PLAY" />
        </div>
      </div>
    </div>
  );
}

export default ListItem;
