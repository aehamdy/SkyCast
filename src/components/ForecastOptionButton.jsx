/* eslint-disable react/prop-types */
function ForecastOptionButton(props) {
  const { id, value, onButtonHandler } = props;

  return (
    <div className="font-mono">
      <input
        type="radio"
        id={id}
        name="forecast-option"
        value={value}
        onChange={(e) => onButtonHandler(e)}
        className="peer hidden"
      />
      <label
        htmlFor={id}
        className="text-sm font-semibold text-secondary-text-color peer-checked:text-primary-text-color hover:text-primary-text-color cursor-pointer duration-200"
      >
        {value.charAt(0).toUpperCase() + value.slice(1)}
      </label>
    </div>
  );
}

export default ForecastOptionButton;
