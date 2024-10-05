/* eslint-disable react/prop-types */
import { useState } from "react";
import ForecastList from "./ForecastList";
import ForecastSwitcher from "./ForecastSwitcher";
import ForecastPanelTray from "./ForecastPanelTray";

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
      className={`w-full rounded-t-3xl overflow-hidden bg-gradient-primary backdrop-blur-sm ${
        isExpanded ? "h-[242px]" : "h-[28px]"
      } transition-all duration-300 ease-in-out delay-0`}
    >
      <ForecastPanelTray togglePanel={togglePanel} />
      <ForecastSwitcher onButtonHandler={onButtonHandler} />
      <ForecastList
        nextDaysData={nextDaysData}
        selectedOption={selectedOption}
      />
    </section>
  );
}

export default ForecastPanel;
