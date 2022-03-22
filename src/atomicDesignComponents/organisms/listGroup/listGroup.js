import ListItem from "./../listItem/listItem";
import "./listGroup.scss";

function ItemListWrapper(props) {
  return (
    <div className="listGroup" role="list">
      {props.gameData.map(function (data) {
        return <ListItem gameData={data} />;
      })}
    </div>
  );
}

export default ItemListWrapper;
