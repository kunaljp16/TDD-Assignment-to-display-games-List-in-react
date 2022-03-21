import P from "./../../atoms/p/p";
import H5 from "./../../atoms/h5/h5";
import "./description.scss";

function Description(props) {
  return (
    <div>
      <div className="itemDescription">
        <P text={props.provider} />
        <H5 text={props.displayName} />
        <P text={"€" + props.minimumStake + " min. Stake"} />
      </div>
    </div>
  );
}

export default Description;
