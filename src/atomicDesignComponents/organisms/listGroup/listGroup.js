import ListItem from "./../listItem/listItem";
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
      {gameData.map(function (data) {
        return <ListItem gameData={data} />;
      })}
    </div>
  );
}

export default ListGroup;
