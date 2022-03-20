import "./radioInput.scss";

function RadioInput(props) {
  const radioChangeFn = (e) => {
    const { id } = e.currentTarget;
    props.radioChangeHandler(id);
  };

  return (
    <div>
      <input
        type="radio"
        className="customRadio"
        name={props.name}
        id={props.value}
        checked={false}
        onChange={radioChangeFn}
      />
      <label htmlFor={props.value}>
        <span>{props.label}</span>
      </label>
    </div>
  );
}

export default RadioInput;
