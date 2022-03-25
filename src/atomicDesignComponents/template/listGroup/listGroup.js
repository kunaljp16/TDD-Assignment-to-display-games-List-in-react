import ListItem from "../../organisms/listItem/listItem";
import "./listGroup.scss";

function ListGroup(props) {
  return (
    <section className="listGroup" role="list">
      {props.gameData.map(function (data, index) {
        return <ListItem gameData={data} key={index} />;
      })}
    </section>
  );
}

export default ListGroup;
