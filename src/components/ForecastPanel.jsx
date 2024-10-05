/* eslint-disable react/prop-types */
import { useState } from "react";
import ForecastList from "./ForecastList";
import ForecastSwitcher from "./ForecastSwitcher";

function ForecastPanel({ nextDaysData }) {
  const [selectedOption, setSelectedOptionOption] = useState("hourly-forecast");
  const [isExpanded, setIsExpanded] = useState(false);

  const onButtonHandler = (e) => {
    const option = e.target.id;
    setSelectedOptionOption(option);
  };

  const togglePanel = () => {
    setIsExpanded((prevValue) => !prevValue);
  };

  return (
    <section
      onClick={togglePanel}
      className={`w-full p-5 rounded-t-3xl overflow-hidden bg-gradient-primary backdrop-blur-sm transition-all duration-300 ${
        isExpanded ? "h-[224px]" : "h-[6%]"
      } duration-700 ease-in-out delay-0`}
    >
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
