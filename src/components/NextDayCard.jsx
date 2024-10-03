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
  return (
    <li className="flex flex-col gap-2">
      <p>{formattedDate()}</p>
      <img src="" alt="" />
      <p>{`${temp}\u00b0 C`}</p>
    </li>
  );
}

export default NextDayCard;
