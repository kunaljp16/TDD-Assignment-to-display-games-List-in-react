import "./radioButton.scss";

function RadioButton(props) {
  const radioChangeFn = (e) => {
    const { id } = e.currentTarget;
    props.radioChangeHandler(id);
  };

  return (
    <div>
      <input
        type="radio"
        className="radioButton"
        name={props.name}
        id={props.value}
        checked={props.isChecked}
        onChange={radioChangeFn}
      />
      <label htmlFor={props.value}>
        <span>{props.label}</span>
      </label>
    </div>
  );
}

export default RadioButton;
