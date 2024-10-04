/* eslint-disable react/prop-types */
function WeatherDayDate({ selectedOption, date }) {
  const getMonthNDate = (val) => {
    console.log(val);
    const value = val
      .split(" ")[0]
      .replaceAll("-", "/")
      .split("/")
      .slice(1)
      .join("/");
    // .split("-").slice(1).join("/");
    // console.log(value);
    return value;
  };

  const getWeekday = () => {
    if (selectedOption === "weekly-forecast") {
      const valueInMilliseconds = new Date(date * 1000);
      const day = valueInMilliseconds.toLocaleDateString("en-US", {
        weekday: "long",
      });

      const weekday = day.slice(0, 3);

      return weekday;
    } else if (selectedOption === "hourly-forecast") {
      const formattedDate = getMonthNDate(date);

      console.log(formattedDate);

      return formattedDate;
    }
  };
  const weekday = getWeekday();

  return <p className={`font-normal text-sm`}>{weekday}</p>;
}

export default WeatherDayDate;
