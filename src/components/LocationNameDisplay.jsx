/* eslint-disable react/prop-types */
function LocationNameDisplay({ cityName }) {
  return (
    <h3 className="text-4xl font-thin tracking-wide">
      {cityName
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1) + " ")}
    </h3>
  );
}

export default LocationNameDisplay;
