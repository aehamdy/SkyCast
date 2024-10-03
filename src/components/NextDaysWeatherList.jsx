import NextDayCard from "./NextDayCard";

/* eslint-disable react/prop-types */
function NextDaysWeatherList({ nextDaysData }) {
  const filterData = () => {
    const filtered = nextDaysData.list.filter((item) =>
      item.dt_txt.includes("00:00:00")
    );
    return filtered;
  };
  const filteredList = filterData();
  return (
    <ul className="flex">
      {console.log(filteredList)}
      {console.log(nextDaysData.list)}
      {filteredList.map((item, i) => (
        <NextDayCard
          key={i}
          date={item.dt_txt}
          temp={item.main.temp}
          description={item.weather[0].main}
        />
      ))}
    </ul>
  );
}

export default NextDaysWeatherList;
