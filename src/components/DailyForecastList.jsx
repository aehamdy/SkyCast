import DailyForecastCard from "./DailyForecastCard";

/* eslint-disable react/prop-types */
function DailyForecastList({ nextDaysData }) {
  const filterData = () => {
    const filtered = nextDaysData.list.filter((item) =>
      item.dt_txt.includes("00:00:00")
    );
    return filtered;
  };
  const filteredList = filterData();
  return (
    <ul className="flex justify-between items-center gap-2">
      {console.log(filteredList)}

      {filteredList.map((item, i) => (
        <DailyForecastCard
          key={i}
          date={item.dt}
          temp={item.main.temp}
          description={item.weather[0].main}
        />
      ))}
    </ul>
  );
}

export default DailyForecastList;
