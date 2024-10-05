/* eslint-disable react/prop-types */
const arrowIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      fill="rgb(100 116 139)"
      d="M18.293 15.29a1 1 0 0 0 0-1.415L13.4 8.988a2 2 0 0 0-2.828 0l-4.89 4.89a1 1 0 1 0 1.414 1.415l4.185-4.186a1 1 0 0 1 1.415 0l4.182 4.182a1 1 0 0 0 1.414 0Z"
    />
  </svg>
);

function ForecastPanelTray({ togglePanel }) {
  return (
    <div
      onClick={togglePanel}
      className={`flex justify-center items-center transition-all duration-700 delay-150 cursor-pointer`}
    >
      {arrowIcon}
    </div>
  );
}

export default ForecastPanelTray;
