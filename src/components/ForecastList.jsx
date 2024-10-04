/* eslint-disable react/prop-types */
import ForecastCard from "./ForecastCard";

function ForecastList({ nextDaysData }) {
  const filterData = () => {
    // console.log(nextDaysData);
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
        <ForecastCard
          key={i}
          date={item.dt}
          temp={item.main.temp}
          description={item.weather[0].main}
        />
      ))}
    </ul>
  );
}

export default ForecastList;
