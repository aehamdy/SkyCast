/* eslint-disable react/prop-types */
function WeatherDayDate({ date }) {
  const formattedDate = () => {
    const fullTime = date.split(" ");
    const initDate = fullTime[0].split("-");
    const month = initDate[1];
    const day = initDate[2];
    const formattedDate = `${day}/${month}`;
    return formattedDate;
  };
  const dayDate = formattedDate();

  return <p className={`font-normal text-sm`}>{dayDate}</p>;
}

export default WeatherDayDate;
