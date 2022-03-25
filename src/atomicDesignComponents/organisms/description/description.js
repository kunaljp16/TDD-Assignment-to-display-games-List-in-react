import "./description.scss";
import ItemImage from "../../atoms/itemImage/itemImage";
import ItemTextInfo from "../../molecules/itemTextInfo/itemTextInfo";
import InfoIcon from "../../atoms/infoIcon/infoIcon";

function Description(props) {
  return (
    <div className="description">
      <InfoIcon />
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
