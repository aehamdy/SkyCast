/* eslint-disable react/prop-types */
import { useState } from "react";
import ForecastList from "./ForecastList";
import ForecastSwitcher from "./ForecastSwitcher";

const arrowIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      fill="rgb(100 116 139)"
      d="M18.293 15.29a1 1 0 0 0 0-1.415L13.4 8.988a2 2 0 0 0-2.828 0l-4.89 4.89a1 1 0 1 0 1.414 1.415l4.185-4.186a1 1 0 0 1 1.415 0l4.182 4.182a1 1 0 0 0 1.414 0Z"
    />
  </svg>
);

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
      <div
        onClick={togglePanel}
        className="flex justify-center items-center cursor-pointer"
      >
        {arrowIcon}
      </div>
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
