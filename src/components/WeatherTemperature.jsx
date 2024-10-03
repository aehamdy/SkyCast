/* eslint-disable react/prop-types */
function WeatherTemperature({ temp, CSymbol, fontSize }) {
  const formatTemp = () => {
    const initValue = Math.trunc(temp);
    const value = `${initValue}\u00b0`;
    return value;
  };

  const temperature = formatTemp();

  return (
    <div className={`flex text-${fontSize}`}>
      <p>{`${temperature}`}</p>
      <p>{`${CSymbol ? "C" : ""}`}</p>
    </div>
  );
}

export default WeatherTemperature;
