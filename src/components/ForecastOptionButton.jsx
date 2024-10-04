/* eslint-disable react/prop-types */
function ForecastOptionButton(props) {
  const { id, value, onButtonHandler } = props;

  return (
    <div>
      <input
        type="radio"
        id={id}
        name="forecast-option"
        value={value}
        onChange={(e) => onButtonHandler(e)}
      />
      <label htmlFor={id}>{value}</label>
    </div>
  );
}

export default ForecastOptionButton;
