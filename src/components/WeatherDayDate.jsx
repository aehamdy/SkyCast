/* eslint-disable react/prop-types */
function WeatherDayDate({ selectedOption, date }) {
  const getFormattedTime = (val) => {
    const dateString = new Date(val);
    const hours = dateString.getHours();
    const fullTime = hours.toString().padStart(2, "0");
    const endFormat = hours < 12 ? `${fullTime} AM` : `${fullTime} PM`;
    return endFormat;
  };

  const getWeekday = (val) => {
    const valueInMilliseconds = new Date(val * 1000);
    const day = valueInMilliseconds.toLocaleDateString("en-US", {
      weekday: "long",
    });

    const weekday = day.slice(0, 3);
    return weekday;
  };

  const getDesiredTime = () => {
    if (selectedOption === "hourly-forecast") {
      const formattedDate = getFormattedTime(date);

      return formattedDate;
    } else if (selectedOption === "weekly-forecast") {
      const weekday = getWeekday(date);

      return weekday;
    }
  };

  const weekday = getDesiredTime();

  return <p className={`font-normal text-sm`}>{weekday}</p>;
}

export default WeatherDayDate;
