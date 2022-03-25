import P from "../../atoms/p/p";
import H5 from "../../atoms/h5/h5";
import "./itemTextInfo.scss";

function ItemTextInfo(props) {
  return (
    <div className="itemTextInfo">
      <P text={props.provider} />
      <H5 text={props.displayName} />
      <P text={"€" + props.minimumStake + " min. Stake"} />
    </div>
  );
}

export default ItemTextInfo;
