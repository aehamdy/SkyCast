/* eslint-disable react/prop-types */
import ForecastCard from "./ForecastCard";

function ForecastList({ nextDaysData, selectedOption }) {
  const getCurrentDate = () => {
    const d = new Date();
    const date = d.getDate() < 10 ? "0" + d.getDate() : d.getDate();
    const month = d.getMonth();
    const year = d.getFullYear();
    const currentDate = `${year}-${month + 1}-${date}`;
    return currentDate;
  };

  const filterHourlyData = () => {
    const currentDate = getCurrentDate();

    const filtered = nextDaysData.list.filter((item) =>
      item.dt_txt.split(" ")[0].includes(currentDate)
    );
    // console.log(filtered);

    // const formattedList = filtered[0].dt_txt
    //   .split(" ")[0]
    //   .split("-")
    //   .slice(1)
    //   .join("/");
    // .slice(5)
    // .replace("-", "/");
    // const newFormatted = formattedList.join("");
    // .replaceAll("-", "/");

    // console.log(formattedList);

    return filtered;
  };

  const filterDailyData = () => {
    // console.log(nextDaysData);
    const filtered = nextDaysData.list.filter((item) =>
      item.dt_txt.includes("00:00:00")
    );

    return filtered;
  };

  const filteredList =
    selectedOption === "weekly-forecast"
      ? filterDailyData()
      : filterHourlyData();

  return (
    <ul className="flex justify-between items-center gap-2">
      {/* {console.log(filteredList)} */}
      {/* {console.log(filteredList[0].dt_txt.split(" ")[0].replaceAll("-") */}

      {filteredList.map((item, i) => (
        <ForecastCard
          key={i}
          selectedOption={selectedOption}
          date={selectedOption === "weekly-forecast" ? item.dt : item.dt_txt}
          temp={item.main.temp}
          description={item.weather[0].main}
        />
      ))}
    </ul>
  );
}

export default ForecastList;
