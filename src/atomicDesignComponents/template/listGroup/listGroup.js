import ListItem from "../../organisms/listItem/listItem";
import "./listGroup.scss";

function ListGroup(props) {
  return (
    <div className="listGroup" role="list">
      {props.gameData.map(function (data, index) {
        return <ListItem gameData={data} key={index} />;
      })}
    </div>
  );
}

export default ListGroup;
