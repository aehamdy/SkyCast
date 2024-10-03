/* eslint-disable react/prop-types */
function WeatherDayDate({ date }) {
  const getWeekday = () => {
    const valueInMilliseconds = new Date(date * 1000);
    const day = valueInMilliseconds.toLocaleDateString("en-US", {
      weekday: "long",
    });
    const weekday = day.slice(0, 3);
    return weekday;
  };
  const weekday = getWeekday();

  return <p className={`font-normal text-sm`}>{weekday}</p>;
}

export default WeatherDayDate;
