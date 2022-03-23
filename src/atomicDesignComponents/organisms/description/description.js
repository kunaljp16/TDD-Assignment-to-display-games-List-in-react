import "./description.scss";
import ItemImage from "../../atoms/itemImage/itemImage";
import ItemTextInfo from "../../molecules/itemTextInfo/itemTextInfo";

function Description(props) {
  return (
    <div className="description">
      <ItemImage src={props.gameData.image} alt={props.gameData.displayName} />
      <ItemTextInfo
        provider={props.gameData.provider}
        displayName={props.gameData.displayName}
        minimumStake={props.gameData.minimumStake}
      />
    </div>
  );
}

export default Description;
