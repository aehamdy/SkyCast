/* eslint-disable react/prop-types */
import ForecastOptionButton from "./ForecastOptionButton";

function ForecastSwitcher({ onButtonHandler }) {
  return (
    <div className="flex justify-around w-full py-2 px-3.5 border-t-2 border-[#00000020] overflow-hidden">
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
