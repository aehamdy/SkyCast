/* eslint-disable react/prop-types */
import { useState } from "react";
import ForecastList from "./ForecastList";
import ForecastSwitcher from "./ForecastSwitcher";

function ForecastPanel({ nextDaysData }) {
  const [selectedOption, setSelectedOptionOption] = useState("hourly-forecast");

  const onButtonHandler = (e) => {
    const option = e.target.id;
    setSelectedOptionOption(option);
  };

  return (
    <section className="w-full p-5 rounded-t-3xl overflow-hidden bg-gradient-primary backdrop-blur-sm">
      <ForecastSwitcher onButtonHandler={onButtonHandler} />
      <ForecastList
        nextDaysData={nextDaysData}
        selectedOption={selectedOption}
      />{" "}
      {/* hourly */}
      {/* <ForecastList nextDaysData={nextDaysData} /> daily */}
    </section>
  );
}

export default ForecastPanel;
