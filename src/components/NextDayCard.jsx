/* eslint-disable react/prop-types */
function NextDayCard({ date, temp, description }) {
  const formattedDate = () => {
    const fullTime = date.split(" ");
    const initDate = fullTime[0].split("-");
    const month = initDate[1];
    const day = initDate[2];
    const formattedDate = `${day}/${month}`;
    return formattedDate;
  };

  const formatTemp = () => {
    const initValue = Math.trunc(temp);
    const value = `${initValue}\u00b0 C`;
    return value;
  };

  const nextDayDate = formattedDate();
  const nextDayTemp = formatTemp();

  return (
    <li className="flex flex-col gap-2">
      <p>{nextDayDate}</p>
      <img src="" alt="" />
      <p>{nextDayTemp}</p>
    </li>
  );
}

export default NextDayCard;
