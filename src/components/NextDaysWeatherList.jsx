import NextDayCard from "./NextDayCard";

/* eslint-disable react/prop-types */
function NextDaysWeatherList({ nextDaysData }) {
  return (
    <ul className="flex">
      {console.log(nextDaysData.list)}
      {nextDaysData.list.map((item, i) => (
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
