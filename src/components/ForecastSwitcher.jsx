/* eslint-disable react/prop-types */
import ForecastOptionButton from "./ForecastOptionButton";

function ForecastSwitcher({ onButtonHandler }) {
  return (
    <div>
      <ForecastOptionButton
        id="hourly-forecast"
        value="hourly-forecast"
        onButtonHandler={onButtonHandler}
      />
      <ForecastOptionButton
        id="weekly-forecast"
        value="weekly-forecast"
        onButtonHandler={onButtonHandler}
      />
    </div>
  );
}

export default ForecastSwitcher;
