import "./buttonWithArrow.scss";

function ButtonWithArrow(props) {
  return (
    <button className="button">
      <i className={"arrow " + props.direction}></i>
      {props.text}
    </button>
  );
}

export default ButtonWithArrow;
