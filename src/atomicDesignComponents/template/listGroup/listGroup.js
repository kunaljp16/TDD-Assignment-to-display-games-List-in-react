import ListItem from "../../organisms/listItem/listItem";
import "./listGroup.scss";

function ListGroup(props) {
  const gameData = [
    {
      displayName: "Lucky Wizard",
      image: "Icon_320and250_LuckyWizard.jpg",
      provider: "RedTiger",
      minimumStake: "0.1",
    },
    {
      displayName: "Greek Gods",
      image: "icon-320and250_GreekGods.jpg",
      provider: "Pragmatic",
      minimumStake: "0.25",
    },
  ];
  return (
    <div className="listGroup" role="list">
      {gameData.map(function (data, index) {
        return <ListItem gameData={data} key={index} />;
      })}
    </div>
  );
}

export default ListGroup;
