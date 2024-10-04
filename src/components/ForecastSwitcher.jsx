import ForecastOptionButton from "./ForecastOptionButton";

function ForecastSwitcher() {
  const onButtonHandler = (e) => {
    console.log(e.target.name);
    console.log(e.target.id);
    console.log(e.target.value);
  };
  return (
    <div>
      <ForecastOptionButton
        id="hourly-forecast"
        value="Hourly"
        onButtonHandler={onButtonHandler}
      />
      <ForecastOptionButton
        id="weekly-forecast"
        value="Weekly"
        onButtonHandler={onButtonHandler}
      />
    </div>
  );
}

export default ForecastSwitcher;
