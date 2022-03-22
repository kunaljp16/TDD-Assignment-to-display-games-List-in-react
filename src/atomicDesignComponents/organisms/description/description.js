import "./description.scss";
import ItemImage from "../../atoms/itemImage/itemImage";
import ItemTextInfo from "../../molecules/itemTextInfo/itemTextInfo";

function Description(props) {
  const gameData = {
    displayName: "Lucky Wizard",
    image: "/cms/5bab9d950eb3580fac83392e/Icon_320and250_LuckyWizard.jpg",
    provider: "RedTiger",
    minimumStake: 0.1,
    isInfoIconOn: true,
  };
  return (
    <div className="description">
      <ItemImage src={gameData.image} alt={gameData.displayName} />
      <ItemTextInfo
        provider={gameData.provider}
        displayName={gameData.displayName}
        minimumStake={gameData.minimumStake}
      />
    </div>
  );
}

export default Description;
