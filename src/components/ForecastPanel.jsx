/* eslint-disable react/prop-types */
import DailyForecastList from "./DailyForecastList";

function ForecastPanel({ nextDaysData }) {
  return (
    <section className="w-full p-5 rounded-t-3xl overflow-hidden bg-gradient-primary backdrop-blur-sm">
      <DailyForecastList nextDaysData={nextDaysData} />
    </section>
  );
}

export default ForecastPanel;
