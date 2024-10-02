/* eslint-disable react/prop-types */
function FeelsLikeDisplay({ feelsLike }) {
  return <p>{`Feels like: ${Math.trunc(feelsLike)}\u00b0`}</p>;
}

export default FeelsLikeDisplay;
