/* eslint-disable react/prop-types */
import ForecastOptionButton from "./ForecastOptionButton";

function ForecastSwitcher({ onButtonHandler }) {
  return (
    <div className="flex justify-between pb-4">
      <ForecastOptionButton
        id="hourly-forecast"
        value="hourly-forecast"
        onButtonHandler={onButtonHandler}
        defaultChecked
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
